import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/c13cadd6-7eca-4ae4-a45b-82de5414d42a/files/c4f176d1-b4fa-449c-a656-738210391aab.jpg',
  'https://cdn.poehali.dev/projects/c13cadd6-7eca-4ae4-a45b-82de5414d42a/files/1cfed182-83a2-4e4b-90fc-b124b3392fa0.jpg',
  'https://cdn.poehali.dev/projects/c13cadd6-7eca-4ae4-a45b-82de5414d42a/files/7e1f5a63-88dc-4076-a271-585acf9de61b.jpg',
  'https://cdn.poehali.dev/projects/c13cadd6-7eca-4ae4-a45b-82de5414d42a/files/a9bd3e51-aa1e-4268-a2e1-b335bf39f9e2.jpg',
];

const destinations = ['Бали', 'Париж', 'Мальдивы', 'Сафари'];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt={destinations[index]}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
                Туры заграницу
              </span>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <h1 className="text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
                Открой мир
                <br />
                <span className="font-semibold italic">
                  {destinations[currentIndex]}
                </span>
              </h1>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-400 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-lg font-light leading-relaxed text-white/75 md:text-xl">
                Организуем незабываемые путешествия в любую точку мира. <br className="hidden md:block" />
                Индивидуальные туры, визовая поддержка, трансфер и отели.
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/20">
                  Подобрать тур
                </button>
                <button className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  Связаться с нами
                </button>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-700 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex gap-8 border-t border-white/20 pt-8">
                <div>
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-sm text-white/60">довольных клиентов</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-sm text-white/60">стран мира</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">8 лет</p>
                  <p className="text-sm text-white/60">на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-8 z-20">
        <p className="text-xs font-medium uppercase tracking-widest text-white/40">
          {destinations[currentIndex]}
        </p>
      </div>
    </section>
  );
}
