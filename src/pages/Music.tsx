export default function Music() {
  const albums = [
    { title: 'FREQUENCIES', year: '2024', tracks: 12, type: 'Album' },
    { title: 'NIGHT DRIVE', year: '2023', tracks: 8, type: 'EP' },
    { title: 'DIGITAL DREAMS', year: '2023', tracks: 15, type: 'Album' },
    { title: 'FIRST SIGNAL', year: '2022', tracks: 10, type: 'Album' },
  ]

  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <div className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-4 animate-fade-in opacity-0">
          02 / Музыка
        </div>
        <h1 className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-black leading-[0.9] tracking-tighter animate-fade-in-up opacity-0">
          TIMUR<br/>SOUNDS
        </h1>
      </div>

      {/* About */}
      <div className="max-w-2xl mb-20 animate-fade-in-up opacity-0 delay-200">
        <p className="text-lg md:text-xl leading-relaxed text-black/70">
          Электронная музыка, созданная на стыке технологий и эмоций. 
          4 альбома, 60+ треков — от эмбиента до экспериментального баса. 
          Каждый трек — это история, рассказанная через синтезаторы и биты.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {['Electronic', 'Ambient', 'Bass', 'Experimental', 'Lo-Fi'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs tracking-wider uppercase border border-black/20 hover:bg-black hover:text-white transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Albums grid */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-10 animate-fade-in-up opacity-0 delay-300">
          ДИСКОГРАФИЯ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
          {albums.map((album, i) => (
            <div
              key={album.title}
              className={`bg-white p-8 md:p-10 group hover:bg-black hover:text-white transition-colors duration-300 animate-fade-in-up opacity-0`}
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2">
                    {album.type} — {album.year}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight">
                    {album.title}
                  </h3>
                </div>
                <div className="text-3xl font-black opacity-20 group-hover:opacity-40 transition-opacity">
                  {String(album.tracks).padStart(2, '0')}
                </div>
              </div>
              <div className="mt-4 text-xs tracking-wider uppercase opacity-50">
                {album.tracks} треков
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Player placeholder */}
      <div className="animate-fade-in-up opacity-0 delay-600">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-10">
          СЛУШАТЬ
        </h2>
        <div className="border-2 border-dashed border-black/20 p-12 md:p-20 text-center hover:border-black/40 transition-colors duration-300">
          <div className="text-4xl mb-4">🎧</div>
          <p className="text-sm tracking-widest uppercase text-black/50 mb-4">
            SoundCloud Player
          </p>
          <p className="text-xs text-black/30">
            Встраиваемый плеер SoundCloud / Яндекс.Музыка
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-black/10 rounded-full"
                style={{ height: `${Math.random() * 40 + 10}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
