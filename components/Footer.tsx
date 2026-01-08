import React from 'react';

export default function Footer() {
    return (
        <footer className="py-12 bg-gray-50 text-center text-sm text-gray-500 border-t border-gray-100 mt-12">
            <p>&copy; {new Date().getFullYear()} Viraworkx. All Rights Reserved.</p>
        </footer>
    );
}
