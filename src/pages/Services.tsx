import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'САЙТЫ',
      price: 'ОТ 3000₽',
      description: 'Лендинги, визитки, портфолио. Адаптивный дизайн, быстрая загрузка, чистый код.',
      features: ['Адаптивная вёрстка', 'SEO-оптимизация', 'Быстрая загрузка', 'Исходный код'],
      number: '01',
    },
    {
      title: 'БОТЫ',
      price: 'ОТ 1500₽',
      description: 'Telegram-боты любой сложности. Автоматизация, интеграции, обработка данных.',
      features: ['Python / aiogram', 'API интеграции', 'База данных', 'Хостинг-настройка'],
      number: '02',
    },
    {
      title: 'БИТЫ / САУНД',
      price: 'ОТ 2000₽',
      description: 'Биты, аранжировки, сведение. Электронная музыка на заказ.',
      features: ['Электронная музыка', 'Сведение', 'Мастеринг', 'Эксклюзивные права'],
      number: '03',
    },
  ]

  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <div className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-4 animate-fade-in opacity-0">
          04 / Услуги
        </div>
        <h1 className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-black leading-[0.9] tracking-tighter animate-fade-in-up opacity-0">
          SERVICES
        </h1>
      </div>

      {/* Services list */}
      <div className="space-y-0 mb-20">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="border-t border-black/10 py-10 md:py-14 group animate-fade-in-up opacity-0"
            style={{ animationDelay: `${0.2 + i * 0.15}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <span className="text-[10px] font-mono tracking-widest text-black/30 pt-2">
                {service.number}
              </span>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                    {service.title}
                  </h2>
                  <span className="text-lg md:text-xl font-bold tracking-wider text-black/60">
                    {service.price}
                  </span>
                </div>
                <p className="text-base text-black/60 max-w-xl leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 text-[11px] tracking-wider uppercase bg-black/5 hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-black/10" />
      </div>

      {/* CTA */}
      <div className="animate-fade-in-up opacity-0 delay-600">
        <div className="bg-black text-white p-10 md:p-16">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4">
            ГОТОВЫ НАЧАТЬ?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg">
            Напишите мне в Telegram — обсудим ваш проект и найдём лучшее решение.
          </p>
          <a
            href="https://t.me/timursounds"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-lg font-bold tracking-wider uppercase border-b-2 border-white pb-2 hover:gap-8 transition-all duration-300"
          >
            <span>Написать в Telegram</span>
            <svg
              className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Process note */}
      <div className="mt-16 animate-fade-in-up opacity-0 delay-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-black/50">
          <div>
            <h3 className="text-black font-bold text-base mb-2">КАК Я РАБОТАЮ</h3>
            <p className="leading-relaxed">
              Обсуждаем задачу → Согласуем ТЗ → Работаю над проектом → 
              Показываю промежуточный результат → Финальная сдача.
            </p>
          </div>
          <div>
            <h3 className="text-black font-bold text-base mb-2">ГАРАНТИИ</h3>
            <p className="leading-relaxed">
              Исправления включены в стоимость. Исходный код передаётся заказчику. 
              Поддержка после сдачи — 2 недели бесплатно.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
