/**
 * API Error Handler Utility
 * Centralized error handling for API calls
 */

import { ERROR_MESSAGES, HTTP_STATUS } from './constants';

/**
 * Handle API errors with consistent formatting
 */
export const handleApiError = (error) => {
  // Network error
  if (!error.response) {
    return {
      status: 0,
      message: ERROR_MESSAGES.NETWORK_ERROR,
      error: error.message,
    };
  }

  const { status, data } = error.response;

  // Handle specific status codes
  switch (status) {
    case HTTP_STATUS.BAD_REQUEST:
      return {
        status,
        message: data?.message || ERROR_MESSAGES.VALIDATION_ERROR,
        error: data,
      };

    case HTTP_STATUS.UNAUTHORIZED:
      return {
        status,
        message: 'Sesi Anda telah berakhir. Silakan login kembali.',
        error: data,
      };

    case HTTP_STATUS.FORBIDDEN:
      return {
        status,
        message: ERROR_MESSAGES.UNAUTHORIZED,
        error: data,
      };

    case HTTP_STATUS.NOT_FOUND:
      return {
        status,
        message: ERROR_MESSAGES.NOT_FOUND,
        error: data,
      };

    case HTTP_STATUS.INTERNAL_ERROR:
      return {
        status,
        message: ERROR_MESSAGES.SERVER_ERROR,
        error: data,
      };

    default:
      return {
        status,
        message: data?.message || ERROR_MESSAGES.GENERAL_ERROR,
        error: data,
      };
  }
};

/**
 * Check if error is network error
 */
export const isNetworkError = (error) => {
  return !error.response && error.message;
};

/**
 * Check if error is auth error
 */
export const isAuthError = (error) => {
  return error.response?.status === HTTP_STATUS.UNAUTHORIZED;
};

/**
 * Check if error is validation error
 */
export const isValidationError = (error) => {
  return error.response?.status === HTTP_STATUS.BAD_REQUEST;
};

/**
 * Get user-friendly error message
 */
export const getUserFriendlyMessage = (error) => {
  if (!error) return ERROR_MESSAGES.GENERAL_ERROR;

  if (typeof error === 'string') {
    return error;
  }

  if (error.message) {
    return error.message;
  }

  return ERROR_MESSAGES.GENERAL_ERROR;
};

/**
 * Log error with context
 */
export const logError = (error, context = '') => {
  const timestamp = new Date().toISOString();
  const errorLog = {
    timestamp,
    context,
    message: error?.message,
    status: error?.response?.status,
    data: error?.response?.data,
  };

  console.error('[QuranApp Error]', errorLog);

  // In production, you might want to send this to a logging service
  // Example: sendToLoggingService(errorLog);
};

/**
 * Retry API call with exponential backoff
 */
export const retryApiCall = async (
  apiCall,
  maxRetries = 3,
  backoffMs = 1000
) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      const delay = backoffMs * Math.pow(2, attempt - 1);
      console.log(`Retrying... Attempt ${attempt + 1} in ${delay}ms`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

/**
 * Handle form validation errors
 */
export const handleValidationErrors = (errors) => {
  const formattedErrors = {};

  if (Array.isArray(errors)) {
    errors.forEach(error => {
      formattedErrors[error.field] = error.message;
    });
  } else if (typeof errors === 'object') {
    Object.keys(errors).forEach(key => {
      formattedErrors[key] = Array.isArray(errors[key])
        ? errors[key][0]
        : errors[key];
    });
  }

  return formattedErrors;
};
