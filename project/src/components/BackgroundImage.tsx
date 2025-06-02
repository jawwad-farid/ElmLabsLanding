import React from 'react';

const BackgroundImage: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-emerald-800/80 to-gray-900/90" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/808510/pexels-photo-808510.jpeg")',
          filter: 'brightness(0.4)',
        }}
      />
    </div>
  );
};

export default BackgroundImage;