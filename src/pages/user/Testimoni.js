import React from 'react';

const Testimoni = () => {
    const testimonies = [
        {
            content: "Saya sangat senang camping disini bisa mancing!",
            author: "Prime Samodra"
        },
        {
            content: "camping disini dengan orang tersayang.",
            author: "Kresna Saputra"
        },
        {
            content: "Gak Enak.",
            author: "Anis"
        },
        {
            content:"Wah lumayan murah, fasilitas melimpah",
            author: "Gemilang"
        }
    ];

    return (
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">TESTIMONI PENGUNJUNG</h1>
                <div className="flex flex-wrap justify-center">
                    {testimonies.map((testimony, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white rounded-lg p-8">
                                <p className="text-gray-800 text-lg mb-4">
                                    "{testimony.content}"
                                </p>
                                <p className="text-gray-600 font-bold">{testimony.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimoni;

