import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-[60%] h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[20vw] font-black leading-none select-none">
          T
        </div>
      </div>

      <div className="relative z-10">
        {/* Main title */}
        <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter animate-fade-in-up opacity-0">
          TIMUR
        </h1>

        {/* Subtitle */}
        <div className="mt-6 md:mt-8 animate-fade-in-up opacity-0 delay-200">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-black/60 font-light">
            Web Developer & Sound Producer
          </p>
        </div>

        {/* Description */}
        <div className="mt-12 md:mt-16 max-w-lg animate-fade-in-up opacity-0 delay-300">
          <p className="text-base md:text-lg leading-relaxed text-black/70">
            Создаю цифровые продукты и звуковые ландшафты. 
            Код и музыка — два инструмента для выражения одной идеи.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 animate-fade-in-up opacity-0 delay-400">
          <Link
            to="/dev"
            className="group inline-flex items-center gap-4 text-lg md:text-xl font-bold tracking-wider uppercase border-b-2 border-black pb-2 hover:gap-8 transition-all duration-300"
          >
            <span>Смотреть работы</span>
            <svg
              className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up opacity-0 delay-500">
          <div>
            <div className="text-3xl md:text-4xl font-black">60+</div>
            <div className="text-xs tracking-widest uppercase text-black/50 mt-1">Треков</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black">4</div>
            <div className="text-xs tracking-widest uppercase text-black/50 mt-1">Альбома</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black">10+</div>
            <div className="text-xs tracking-widest uppercase text-black/50 mt-1">Проектов</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black">∞</div>
            <div className="text-xs tracking-widest uppercase text-black/50 mt-1">Идей</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
