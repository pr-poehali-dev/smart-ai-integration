import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const images = [
  'https://cdn.poehali.dev/projects/c13cadd6-7eca-4ae4-a45b-82de5414d42a/files/7009bad0-675b-4c3e-a1f2-834d81fa3a8d.jpg',
  'https://cdn.poehali.dev/projects/c13cadd6-7eca-4ae4-a45b-82de5414d42a/files/1cfed182-83a2-4e4b-90fc-b124b3392fa0.jpg',
  'https://cdn.poehali.dev/projects/c13cadd6-7eca-4ae4-a45b-82de5414d42a/files/e09006c7-f691-40c0-a350-8c55b0a88b8b.jpg',
  'https://cdn.poehali.dev/projects/c13cadd6-7eca-4ae4-a45b-82de5414d42a/files/5d3f75d3-1bd1-47ac-87b7-43042ac2f6c8.jpg',
];

const destinations = ['Бали', 'Париж', 'Мальдивы', 'Путешествия'];

const VK_URL = 'https://vk.ru/vasiluuw';

const tours = [
  { country: '🇮🇩', name: 'Бали', duration: '10 ночей', description: 'Рисовые террасы, храмы, пляжи', price: 'от 85 000 ₽' },
  { country: '🇫🇷', name: 'Париж', duration: '7 ночей', description: 'Эйфелева башня, круассаны, шопинг', price: 'от 110 000 ₽' },
  { country: '🇲🇻', name: 'Мальдивы', duration: '8 ночей', description: 'Бунгало над водой, коралловые рифы', price: 'от 180 000 ₽' },
  { country: '🇹🇭', name: 'Таиланд', duration: '12 ночей', description: 'Пхукет, острова, уличная еда', price: 'от 75 000 ₽' },
  { country: '🇦🇪', name: 'ОАЭ', duration: '6 ночей', description: 'Дубай, пустыня, сафари', price: 'от 95 000 ₽' },
  { country: '🇹🇷', name: 'Турция', duration: '9 ночей', description: 'Каппадокия, Стамбул, побережье', price: 'от 60 000 ₽' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTours, setShowTours] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
                  Мигранты
                  <br />
                  <span className="font-semibold italic">счастья</span>
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
                  <button
                    onClick={() => setShowTours(true)}
                    className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                  >
                    Подобрать тур
                  </button>
                  <a
                    href={VK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    Связаться с нами
                  </a>
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

      {/* Модальное окно с турами */}
      {showTours && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setShowTours(false)}
        >
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-zinc-900 p-8">
            <button
              onClick={() => setShowTours(false)}
              className="absolute right-6 top-6 text-white/40 hover:text-white transition-colors"
            >
              <Icon name="X" size={24} />
            </button>

            <h2 className="text-3xl font-light text-white mb-2">Наши туры</h2>
            <p className="text-white/50 text-sm mb-8">Выберите направление — мы всё организуем</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tours.map((tour) => (
                <div
                  key={tour.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/30 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-2xl">{tour.country}</span>
                      <h3 className="text-xl font-semibold text-white mt-1">{tour.name}</h3>
                      <p className="text-xs text-white/40 mt-0.5">{tour.duration}</p>
                    </div>
                    <span className="text-sm font-bold text-white bg-white/10 rounded-full px-3 py-1 whitespace-nowrap">
                      {tour.price}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 mb-4">{tour.description}</p>
                  <a
                    href={VK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-full bg-white py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition-all"
                  >
                    Узнать подробнее
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
