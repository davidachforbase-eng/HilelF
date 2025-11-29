import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white/40 py-8 text-center border-t border-white/5 text-sm font-mono">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} HILLEL MEDIA. All Rights Reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Vimeo</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </div>
    </footer>
  );
};