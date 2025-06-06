import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6 md:p-8">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-white" />
            <span className="text-xl font-medium text-white font-serif">Elm Labs</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;