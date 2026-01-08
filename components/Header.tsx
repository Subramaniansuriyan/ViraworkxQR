import Image from 'next/image';

export default function Header() {
    return (
        <header className="p-6 flex justify-center bg-white shadow-sm">
            <div className="relative w-48 h-16">
                <Image
                    src="/logo.png"
                    alt="VIRAWORKX"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </header>
    );
}
