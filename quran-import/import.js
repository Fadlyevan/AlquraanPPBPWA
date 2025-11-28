import fs from "fs";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://msbgvezndwgxroygwacg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zYmd2ZXpuZHdneHJveWd3YWNnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzQ4NTM0MSwiZXhwIjoyMDc5MDYxMzQxfQ.BWpYqaBaH3N9fW6Y6xYGvoAfnWqXXVnPCmQhYjLEWpA"
);

const sql = fs.readFileSync("./quran.sql", "utf8");
const lines = sql.split("\n");

const ayat = [];

for (let line of lines) {
  if (!line.match(/^\d+\t/)) continue;
  const cols = line.split("\t");

  const surah = parseInt(cols[0]);
  const ayah_number = parseInt(cols[1]);
  const ayah_text = cols[2];
  const ayah_text_no_diac = cols[3];
  const surah_name = cols[9];
  const surah_name_no_diac = cols[10];

  ayat.push({
    surah,
    ayah_number,
    ayah_text,
    ayah_text_no_diac,
    surah_name,
    surah_name_no_diac
  });
}

async function importData() {
  console.log("Total ayat:", ayat.length);

  const surahSet = new Map();

  for (const a of ayat) {
    if (!surahSet.has(a.surah)) {
      surahSet.set(a.surah, {
        id: a.surah,
        name: a.surah_name,
        name_no_diacratic: a.surah_name_no_diac,
        ayah_count: 0,
      });
    }
    surahSet.get(a.surah).ayah_count++;
  }

  console.log("Total surah:", surahSet.size);

  for (const s of surahSet.values()) {
    await supabase.from("surah").insert(s);
    console.log("Inserted surah:", s.id);
  }

  for (const a of ayat) {
    await supabase.from("ayah").insert({
      surah_id: a.surah,
      ayah_number: a.ayah_number,
      text_arabic: a.ayah_text,
      text_no_diacratic: a.ayah_text_no_diac,
    });
    console.log("Ayah:", a.surah, a.ayah_number);
  }

  console.log("IMPORT SELESAI!");
}

importData();

