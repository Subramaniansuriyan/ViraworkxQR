import React from 'react';

export default function Works() {
    // Placeholder clients or works - just names for now
    const clients = [
        "Client 01", "Client 02", "Client 03", "Client 04",
        "Client 05", "Client 06", "Client 07", "Client 08",
        "Client 09", "Client 10", "Client 11", "Client 12",
    ];

    return (
        <section className="max-w-4xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-widest border-b-2 border-secondary inline-block pb-1">
                    Our Works
                </h3>
                <p className="mt-4 text-gray-500 text-sm font-medium tracking-wide uppercase">Clients</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {clients.map((client, index) => (
                    <div key={index} className="aspect-video bg-white border border-gray-100 shadow-sm rounded-lg flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                        <span className="text-gray-400 font-medium text-sm">{client}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
