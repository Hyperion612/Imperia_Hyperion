export default function Dev() {
  const projects = [
    {
      title: 'Сайт-визитка',
      description: 'Минималистичный лендинг для личного бренда. HTML, CSS, JS.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      number: '01',
    },
    {
      title: 'Telegram-бот',
      description: 'Бот для автоматизации задач. Обработка команд, интеграция с API.',
      tags: ['Python', 'aiogram', 'API'],
      number: '02',
    },
    {
      title: 'База данных школы',
      description: 'Система управления данными: ученики, оценки, расписание.',
      tags: ['Python', 'SQL', 'SQLite'],
      number: '03',
    },
    {
      title: 'Портфолио-сайт',
      description: 'Этот сайт. React, TypeScript, Tailwind CSS, маршрутизация.',
      tags: ['React', 'TypeScript', 'Tailwind'],
      number: '04',
    },
  ]

  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React',
    'HTML/CSS', 'SQL', 'Git', 'Linux',
  ]

  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <div className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-4 animate-fade-in opacity-0">
          03 / Разработка
        </div>
        <h1 className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-black leading-[0.9] tracking-tighter animate-fade-in-up opacity-0">
          CODE<br/>& WEB
        </h1>
      </div>

      {/* About */}
      <div className="max-w-2xl mb-20 animate-fade-in-up opacity-0 delay-200">
        <p className="text-lg md:text-xl leading-relaxed text-black/70">
          Учусь в техникуме и параллельно создаю цифровые продукты. 
          Python — мой основной язык. Создаю сайты, ботов, автоматизирую рутину. 
          Верю, что хороший код — это чистый код.
        </p>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-xs tracking-wider uppercase border border-black/20 hover:bg-black hover:text-white transition-colors duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-10 animate-fade-in-up opacity-0 delay-300">
          ПРОЕКТЫ
        </h2>
        <div className="space-y-px bg-black/10">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="bg-white p-8 md:p-10 group hover:bg-black hover:text-white transition-colors duration-300 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="text-[10px] font-mono tracking-widest opacity-40 group-hover:opacity-60">
                  {project.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/60 group-hover:text-white/60 transition-colors">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] tracking-wider uppercase border border-current opacity-40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="animate-fade-in-up opacity-0 delay-600">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-10">
          ПОДХОД
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'ИССЛЕДОВАНИЕ', desc: 'Погружаюсь в задачу, изучаю контекст и требования' },
            { step: '02', title: 'ПРОЕКТИРОВАНИЕ', desc: 'Архитектура, структура, прототипы' },
            { step: '03', title: 'РЕАЛИЗАЦИЯ', desc: 'Чистый код, тестирование, итерации' },
          ].map((item) => (
            <div key={item.step} className="border-t-2 border-black pt-6">
              <div className="text-[10px] font-mono tracking-widest text-black/40 mb-2">
                {item.step}
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
