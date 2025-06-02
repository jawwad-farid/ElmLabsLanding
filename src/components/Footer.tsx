import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Elm Labs. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-white/70 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-emerald-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;