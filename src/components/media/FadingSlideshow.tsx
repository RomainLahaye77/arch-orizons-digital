import { useState, useEffect } from 'react';

type Props = {
  images: string[];
  interval?: number;
  contain?: boolean;
};

export default function FadingSlideshow({ images, interval = 2500, contain = false }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full bg-black">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full ${contain ? 'object-contain' : 'object-cover'}`}
          style={{
            opacity: i === activeIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
    </div>
  );
}