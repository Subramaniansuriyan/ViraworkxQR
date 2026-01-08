'use client';

import React from 'react';
import Image from 'next/image';
import { PhoneIcon, EmailIcon, GlobeIcon, MapPinIcon, TwitterIcon, LinkedInIcon } from './Icons';

export default function ProfileCard() {
    const contact = {
        name: "Rahul Ramachandran",
        role: "Founder",
        phone: "+1 (470) 213-0571",
        address: "Houston Texas",
        email: "rahul@viraworkx.ai",
        website: "www.viraworkx.ai",
        websiteUrl: "https://www.viraworkx.ai"
    };

    const handleDownloadVCard = () => {
        const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
N:Ramachandran;Rahul;;;
ORG:Viraworkx
TITLE:${contact.role}
TEL;TYPE=WORK,VOICE:${contact.phone}
EMAIL:${contact.email}
URL:${contact.websiteUrl}
ADR;TYPE=WORK:;;${contact.address};;;;
END:VCARD`;

        const blob = new Blob([vcardContent], { type: "text/vcard;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "contact.vcf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white overflow-hidden my-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6">

                {/* Profile Image Placeholder */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-white flex-shrink-0 overflow-hidden border-4 border-primary/20">
                    <Image
                        src="/logo.png"
                        alt={contact.name}
                        fill
                        className="object-contain p-2"
                        priority
                    />
                </div>

                {/* Details */}
                <div className="flex-1 text-center md:text-left space-y-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black">{contact.name}</h2>
                        <p className="text-xl md:text-2xl text-secondary font-bold">{contact.role}</p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4 justify-center md:justify-start">
                            <a href="https://x.com/rahulram2712" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110"><TwitterIcon className="w-6 h-6" /></a>
                            <a href="https://www.linkedin.com/in/rahul-ramachandran-42618419/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110"><LinkedInIcon className="w-7 h-7" /></a>
                        </div>
                    </div>

                    <div className="space-y-4 mt-8">
                        <a href={`tel:${contact.phone}`} className="flex items-center justify-center md:justify-start gap-4 text-gray-800 hover:text-primary transition-colors group">
                            <PhoneIcon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                            <span className="font-semibold text-lg">{contact.phone}</span>
                        </a>

                        <a href={`mailto:${contact.email}`} className="flex items-center justify-center md:justify-start gap-4 text-gray-800 hover:text-primary transition-colors group">
                            <EmailIcon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                            <span className="font-semibold text-lg">{contact.email}</span>
                        </a>

                        <a href={contact.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-4 text-gray-800 hover:text-primary transition-colors group">
                            <GlobeIcon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                            <span className="font-semibold text-lg">{contact.website}</span>
                        </a>

                        <div className="flex items-start justify-center md:justify-start gap-4 text-gray-800 group">
                            <MapPinIcon className="w-6 h-6 text-accent mt-1 group-hover:scale-110 transition-transform" />
                            <span className="font-semibold text-lg">{contact.address}</span>
                        </div>
                    </div>

                    <div className="pt-8">
                        <button
                            onClick={handleDownloadVCard}
                            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer w-full md:w-auto"
                        >
                            Add to Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
