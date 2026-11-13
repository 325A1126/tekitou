import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src?: string;
  alt: string;
  caption?: string;
  className?: string;
  aspectClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  caption,
  className = '',
  aspectClassName = 'aspect-[4/3]',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="m-0">
      <div
        className={`relative overflow-hidden bg-[#EFECE6] border border-[#E4DFD5] ${aspectClassName} ${className}`}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover block"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F4F0E8] to-[#E6E0D5] text-[#64605A]">
            <ImageOff className="w-6 h-6 mb-2 opacity-60" aria-hidden="true" />
            <span className="text-xs font-medium tracking-wide">{alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs text-[#64605A] font-serif leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
