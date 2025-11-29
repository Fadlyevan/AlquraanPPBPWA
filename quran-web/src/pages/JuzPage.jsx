import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const JuzPage = () => {
    const juzList = Array.from({ length: 30 }, (_, i) => i + 1);

    const [search, setSearch] = useState('');
    const [filteredJuz, setFilteredJuz] = useState(juzList);

    // Filter Juz berdasarkan search
    useEffect(() => {
        if (search === '') {
            setFilteredJuz(juzList);
        } else {
            const result = juzList.filter(j =>
                j.toString().includes(search)
            );
            setFilteredJuz(result);
        }
    }, [search]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20 md:pb-0">
            <div className="max-w-6xl mx-auto px-4 py-8">

                {/* HEADER */}
                <div className="mb-8 fade-in">
                    <h1 className="text-3xl font-bold text-primary mb-2">📜 Daftar Juz</h1>
                    <p className="text-gray-600">Pilih Juz untuk membaca</p>
                </div>

                {/* SEARCH */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Cari Juz (1 - 30)..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-5 py-3 border-2 border-gray-300 focus:border-primary rounded-xl focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* LIST JUZ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {filteredJuz.length === 0 && (
                        <div className="col-span-full text-center text-gray-500">
                            Juz tidak ditemukan
                        </div>
                    )}

                    {filteredJuz.map((juz) => (
                        <Link
                            key={juz}
                            to={`/juz/${juz}`}
                            className="bg-white rounded-xl shadow-sm hover:shadow-xl transition p-5 border-l-4 border-primary block"
                        >
                            <h3 className="text-xl font-bold text-primary">Juz {juz}</h3>
                            <p className="text-sm text-gray-500">Bagian ke-{juz}</p>
                        </Link>
                    ))}
                </div>

                {/* INFO */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        Menampilkan <b>{filteredJuz.length}</b> dari <b>30</b> juz
                    </p>
                </div>

            </div>
        </div>
    );
};
