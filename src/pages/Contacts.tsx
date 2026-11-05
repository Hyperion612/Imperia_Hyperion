export default function Contacts() {
  const links = [
    {
      name: 'TELEGRAM',
      url: 'https://t.me/timursounds',
      handle: '@timursounds',
      description: 'Быстрый способ связаться',
    },
    {
      name: 'GITHUB',
      url: 'https://github.com/timursounds',
      handle: '@timursounds',
      description: 'Мои проекты и код',
    },
    {
      name: 'VK',
      url: 'https://vk.com/timursounds',
      handle: '@timursounds',
      description: 'Социальная сеть',
    },
    {
      name: 'SOUNDCLOUD',
      url: 'https://soundcloud.com/timursounds',
      handle: '@timursounds',
      description: 'Моя музыка',
    },
  ]

  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-24 py-20 flex flex-col">
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <div className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-4 animate-fade-in opacity-0">
          05 / Контакты
        </div>
        <h1 className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-black leading-[0.9] tracking-tighter animate-fade-in-up opacity-0">
          LET'S<br/>TALK
        </h1>
      </div>

      {/* Intro */}
      <div className="max-w-2xl mb-16 animate-fade-in-up opacity-0 delay-200">
        <p className="text-lg md:text-xl leading-relaxed text-black/70">
          Открыт к сотрудничеству, интересным проектам и новым идеям. 
          Выберите удобный способ связи.
        </p>
      </div>

      {/* Links */}
      <div className="flex-1">
        <div className="space-y-0">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-black/10 py-8 md:py-10 hover:bg-black hover:text-white transition-colors duration-300 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {link.name}
                </h2>
                <div className="flex items-center gap-4 md:ml-auto">
                  <span className="text-sm text-black/50 group-hover:text-white/50 transition-colors">
                    {link.handle}
                  </span>
                  <svg
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-sm text-black/40 group-hover:text-white/40 transition-colors">
                {link.description}
              </p>
            </a>
          ))}
          <div className="border-t border-black/10" />
        </div>
      </div>

      {/* Footer area */}
      <div className="mt-16 pt-8 border-t border-black/10 animate-fade-in-up opacity-0 delay-700">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest uppercase text-black/40">
              Based in Russia
            </p>
            <p className="text-xs tracking-widest uppercase text-black/40 mt-1">
              Available for remote work
            </p>
          </div>
          <div className="text-xs tracking-widest uppercase text-black/40">
            © 2024 TIMURSOUNDS
          </div>
        </div>
      </div>
    </section>
  )
}
