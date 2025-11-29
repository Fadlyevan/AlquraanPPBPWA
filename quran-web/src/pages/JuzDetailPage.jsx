import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { quranAPI } from "../services/api";

export const JuzDetailPage = () => {
    const { id } = useParams();
    const [ayat, setAyat] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        fetchJuz();
        loadBookmarks();
    }, [id]);

    const fetchJuz = async () => {
        try {
            setLoading(true);
            const data = await quranAPI.getJuzById(id);
            setAyat(data);
        } catch (err) {
            setError("Gagal memuat Juz");
        } finally {
            setLoading(false);
        }
    };

    const loadBookmarks = () => {
        const saved = localStorage.getItem('bookmarks');
        if (saved) setBookmarks(JSON.parse(saved));
    };

    const toggleBookmark = (ayahKey) => {
        let updated = [...bookmarks];

        if (updated.includes(ayahKey)) {
            updated = updated.filter(a => a !== ayahKey);
        } else {
            updated.push(ayahKey);
        }

        setBookmarks(updated);
        localStorage.setItem('bookmarks', JSON.stringify(updated));
    };

    const isBookmarked = (ayahKey) => bookmarks.includes(ayahKey);

    if (loading) return <div className="p-6 text-center">Loading...</div>;
    if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

    return (
        <div className="min-h-screen px-4 py-6 pb-20">
            <Link to="/juz" className="text-primary">← Kembali</Link>

            <h1 className="text-2xl font-bold mt-4 mb-6">Juz {id}</h1>

            <div className="space-y-4">
                {ayat.map((a, i) => {

                    const ayahKey = `${a.surah_id}-${a.ayah_number}`;

                    return (
                        <div key={i} className="bg-white rounded-xl shadow p-4">

                            <div className="flex justify-between items-start mb-2">
                                <p className="text-xs text-gray-500">
                                    Surah {a.surah_id} · Ayat {a.ayah_number}
                                </p>

                                <button
                                    onClick={() => toggleBookmark(ayahKey)}
                                    className={`text-xl transition ${
                                        isBookmarked(ayahKey)
                                            ? 'text-yellow-400'
                                            : 'text-gray-300 hover:text-yellow-400'
                                    }`}
                                >
                                    🔖
                                </button>
                            </div>

                            <p className="text-right text-2xl leading-loose">{a.text_arabic}</p>
                            <p className="italic text-gray-600 mt-2">{a.text_no_diacratic}</p>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};
