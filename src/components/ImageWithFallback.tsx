import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  fallbackSrc = 'https://placehold.co/1920x1080/000000/FFFFFF?text=Image+Not+Found',
}) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
    console.error(`Failed to load image: ${src}. Displaying fallback.`);
  };

  return (
    <img
      src={imageError ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
