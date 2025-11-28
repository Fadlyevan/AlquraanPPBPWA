import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(cors());

const supabase = createClient(
  "https://msbgvezndwgxroygwacg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zYmd2ZXpuZHdneHJveWd3YWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0ODUzNDEsImV4cCI6MjA3OTA2MTM0MX0.NL4ewKWgenehCzzEVOWQtW6iYj07PgsMGt73dGL9oGs"
);

// --- GET ALL SURAH ---
app.get("/api/surah", async (req, res) => {
  const { data, error } = await supabase.from("surah").select("*");

  if (error) return res.status(500).json(error);
  res.json(data);
});

// --- GET SURAH BY ID + AYAT ---
app.get("/api/surah/:id", async (req, res) => {
  const id = req.params.id;

  // Ambil info surah
  const { data: surah } = await supabase
    .from("surah")
    .select("*")
    .eq("id", id)
    .single();

  // Ambil ayat-ayatnya
  const { data: ayah } = await supabase
    .from("ayah")
    .select("*")
    .eq("surah_id", id)
    .order("ayah_number");

  res.json({ surah, ayah });
});

app.listen(3000, () => console.log("API running at http://localhost:3000"));

