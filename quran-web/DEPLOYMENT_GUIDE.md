# 🚀 Deployment Guide - QuranApp

Panduan lengkap untuk deployment QuranApp ke Netlify atau Vercel.

## 📋 Prerequisites

- GitHub account
- Netlify atau Vercel account (free)
- Repository di GitHub sudah siap
- Supabase project dengan API credentials

---

## 🚀 Deployment ke Netlify

### Step 1: Prepare Repository

```bash
# Push code ke GitHub
git add .
git commit -m "Initial commit - QuranApp"
git push origin main
```

### Step 2: Connect ke Netlify

1. Buka [https://app.netlify.com](https://app.netlify.com)
2. Sign in dengan GitHub account
3. Klik "New site from Git"
4. Pilih GitHub provider
5. Authorize Netlify di GitHub
6. Select repository `quran-apps`

### Step 3: Configure Build Settings

Netlify akan auto-detect Vite configuration. Pastikan:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Base directory**: `quran-web` (if monorepo)

### Step 4: Set Environment Variables

Di Netlify dashboard:

1. Pergi ke **Site settings** → **Build & deploy** → **Environment**
2. Klik **Edit variables**
3. Add environment variables:

```
VITE_API_URL = https://your-api-domain.com/api
VITE_SUPABASE_URL = https://your-project.supabase.co
VITE_SUPABASE_KEY = your_anon_key
```

### Step 5: Deploy

1. Klik **Deploy site**
2. Tunggu build process selesai
3. Your site akan live di `https://[site-name].netlify.app`

### Step 6: Configure Custom Domain (Optional)

1. Di Netlify dashboard, pergi ke **Domain management**
2. Klik **Add custom domain**
3. Masukkan domain Anda
4. Follow instructions untuk configure DNS

### Enable HTTPS

Netlify automatically provides free HTTPS dengan Let's Encrypt

---

## 🚀 Deployment ke Vercel

### Step 1: Prepare Repository

Sama seperti Netlify, push code ke GitHub

### Step 2: Import Project ke Vercel

1. Buka [https://vercel.com/new](https://vercel.com/new)
2. Sign in dengan GitHub account
3. Klik "Import Project"
4. Select repository `quran-apps`
5. Vercel akan auto-detect Vite

### Step 3: Configure Project Settings

#### Root Directory (Jika Monorepo)
- Set to: `quran-web`

#### Build & Output Settings
Vercel akan auto-detect:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Step 4: Environment Variables

1. Di halaman "Configure Project", scroll ke Environment Variables
2. Add variables:

```
VITE_API_URL = https://your-api-domain.com/api
VITE_SUPABASE_URL = https://your-project.supabase.co
VITE_SUPABASE_KEY = your_anon_key
```

3. Klik **Deploy**

### Step 5: Monitor Deployment

- Dashboard akan show build progress
- Klik pada build untuk lihat logs
- Setelah selesai, site akan live

### Step 6: Custom Domain (Optional)

1. Di Vercel dashboard, pergi ke **Settings** → **Domains**
2. Add custom domain
3. Configure DNS records sesuai instruksi

---

## 📌 Important Configuration Notes

### CORS for API Requests

Jika API backend hosted di domain berbeda, pastikan CORS enabled di API:

```javascript
// Di quran-api/index.js
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://your-netlify-domain.netlify.app',
    'https://your-vercel-domain.vercel.app',
    'https://your-custom-domain.com'
  ]
}));
```

### Backend API Deployment Options

#### Option 1: Deploy API ke Heroku (Deprecated - Use Railway/Render)

```bash
# Install Heroku CLI
npm install -g heroku

# Login ke Heroku
heroku login

# Create new app
heroku create your-api-app-name

# Deploy
git push heroku main
```

#### Option 2: Deploy API ke Railway.app

1. Buka [https://railway.app](https://railway.app)
2. Sign in dengan GitHub
3. Create new project
4. Select repository dan `quran-api` folder
5. Add environment variables
6. Deploy!

#### Option 3: Deploy API ke Render.com

1. Buka [https://render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Select `quran-api` directory
5. Add environment variables
6. Deploy!

#### Option 4: Deploy API ke DigitalOcean App Platform

1. Connect GitHub repository
2. Select `quran-api` folder
3. Configure build commands
4. Add environment variables
5. Deploy!

---

## 🔄 CI/CD Pipeline Setup

### GitHub Actions untuk Auto Deploy

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Install dependencies
        run: |
          cd quran-web
          npm install
      
      - name: Build
        run: |
          cd quran-web
          npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_KEY: ${{ secrets.VITE_SUPABASE_KEY }}
      
      - name: Deploy to Netlify
        uses: nfl/deploy-netlify-action@v1.2.3
        with:
          auth: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          dir: quran-web/dist
          prod: true
```

---

## 🔒 Security Best Practices

### 1. Environment Variables
- ✅ Gunakan secrets di CI/CD
- ✅ Never commit `.env` ke Git
- ✅ Use `.env.example` untuk dokumentasi

### 2. Supabase API Key
- ✅ Gunakan anon key untuk frontend
- ✅ Jangan expose service role key
- ✅ Enable Row Level Security (RLS)

### 3. Headers & Security

Verifikasi headers di Netlify:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 🐛 Troubleshooting Deployment

### Issue: Build Fails

**Solution:**
```bash
# Clear cache
npm cache clean --force

# Reinstall dependencies
npm install

# Try building locally
npm run build
```

### Issue: Environment Variables Not Working

**Solution:**
- Restart deployment setelah update environment variables
- Verify variable names (case-sensitive)
- Check `.env` file syntax

### Issue: API 404 Errors

**Solution:**
- Verify API URL di environment variables
- Check CORS settings di backend
- Ensure backend API is running/deployed

### Issue: Service Worker Not Working

**Solution:**
- Clear service worker cache
- Verify `public/sw.js` is present
- Check browser DevTools → Application tab

### Issue: PWA Not Installable

**Solution:**
- Verify `public/manifest.json` exists
- Check HTTPS is enabled
- Verify all required fields dalam manifest
- Test dengan `npm run build` locally first

---

## 📊 Post-Deployment Checklist

- [ ] Website loads without errors
- [ ] All pages accessible
- [ ] API requests working
- [ ] Authentication working
- [ ] Bookmarks functionality working
- [ ] Service worker registered
- [ ] PWA installable
- [ ] Offline mode tested
- [ ] Mobile responsive
- [ ] Performance acceptable (Lighthouse score)
- [ ] HTTPS enabled
- [ ] Custom domain configured (optional)
- [ ] Email notifications configured

---

## 🔄 Continuous Deployment

### Auto Deploy on Git Push

**Netlify:** Already configured via Git integration
**Vercel:** Already configured via Git integration

Just push to main branch and deployment happens automatically!

```bash
git add .
git commit -m "Update feature"
git push origin main
# Automatic deployment triggered!
```

---

## 📈 Performance Optimization

### Build Optimization

1. **Minification**: Already handled by Vite
2. **Code splitting**: React Router handles this
3. **Image optimization**: Use next-gen formats
4. **Lazy loading**: Implement for large components

### Caching Strategy

- Static assets: Long-term caching (1 year)
- HTML/Manifest: No cache
- Service Worker: No cache
- API responses: Short-term caching (5 minutes)

---

## 📞 Support

Jika ada issues:

1. Check Netlify/Vercel build logs
2. Check browser console untuk errors
3. Check network requests di DevTools
4. Read error messages carefully
5. Google error message
6. Contact support

---

**Happy Deployment! 🎉**

Jika ada pertanyaan atau issues, silakan hubungi kami di info@quranapp.com
