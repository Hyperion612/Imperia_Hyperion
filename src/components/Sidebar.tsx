import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'ГЛАВНАЯ', number: '01' },
  { path: '/music', label: 'МУЗЫКА', number: '02' },
  { path: '/dev', label: 'РАЗРАБОТКА', number: '03' },
  { path: '/services', label: 'УСЛУГИ', number: '04' },
  { path: '/contacts', label: 'КОНТАКТЫ', number: '05' },
]

const socialLinks = [
  {
    name: 'Telegram',
    url: 'https://t.me/timursounds',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/timursounds',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/timursounds',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.057-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.308c.013.06.045.094.104.094.057 0 .09-.038.104-.094l.21-1.308-.21-1.334c-.014-.057-.047-.094-.104-.094m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.21 2.458c0 .06.059.104.12.104.06 0 .12-.044.12-.104l.24-2.458-.24-2.563c0-.06-.06-.104-.12-.104m.944-.089c-.074 0-.135.06-.15.135l-.193 2.652.193 2.508c.015.075.076.135.15.135.074 0 .135-.06.15-.135l.21-2.508-.21-2.652c-.015-.075-.076-.135-.15-.135m1.005-.465c-.09 0-.165.074-.18.164l-.18 2.952.18 2.563c.015.09.09.164.18.164s.165-.074.18-.164l.21-2.563-.21-2.952c-.015-.09-.09-.164-.18-.164m1.065-.269c-.104 0-.194.089-.21.194l-.163 2.957.163 2.611c.016.105.106.194.21.194.104 0 .194-.089.21-.194l.18-2.611-.18-2.957c-.016-.105-.106-.194-.21-.194m1.124-.374c-.119 0-.224.104-.224.224l-.15 3.107.15 2.64c0 .12.105.224.224.224.12 0 .224-.104.224-.224l.165-2.64-.164-3.107c0-.12-.105-.224-.225-.224m1.17-.135c-.135 0-.24.105-.255.24l-.135 2.977.135 2.67c.015.135.12.24.255.24.135 0 .24-.105.255-.24l.15-2.67-.15-2.977c-.015-.135-.12-.24-.255-.24m1.214.045c-.149 0-.27.12-.284.27l-.12 2.932.12 2.685c.014.15.135.27.284.27.15 0 .27-.12.284-.27l.135-2.685-.135-2.932c-.014-.15-.134-.27-.284-.27m1.275-.105c-.165 0-.3.135-.314.3l-.105 2.772.105 2.7c.014.165.149.3.314.3.165 0 .3-.135.315-.3l.12-2.7-.12-2.772c-.015-.165-.15-.3-.315-.3m2.354.57c-.045-.015-.09-.015-.135-.015-.18 0-.33.149-.344.33l-.09 2.217.09 2.7c.014.18.164.33.344.33.045 0 .09 0 .135-.015.135-.045.24-.165.255-.315l.105-2.7-.105-2.217c-.015-.15-.12-.27-.255-.315m.854-.794c-.194 0-.36.164-.374.36l-.075 2.992.075 2.7c.014.195.18.36.374.36.195 0 .36-.165.375-.36l.09-2.7-.09-2.992c-.015-.196-.18-.36-.375-.36m.915-.135c-.21 0-.375.165-.39.375l-.06 2.857.06 2.7c.015.21.18.375.39.375.21 0 .375-.165.39-.375l.075-2.7-.075-2.857c-.015-.21-.18-.375-.39-.375m.96-.015c-.225 0-.405.18-.42.405l-.045 2.607.045 2.7c.015.225.195.405.42.405.225 0 .405-.18.42-.405l.06-2.7-.06-2.607c-.015-.225-.195-.405-.42-.405m3.464 1.485c-.225 0-.405.18-.42.405l-.045 1.122.045 2.7c.015.225.195.405.42.405.225 0 .405-.18.42-.405l.06-2.7-.06-1.122c-.015-.225-.195-.405-.42-.405m-.96-.6c-.24 0-.42.18-.435.42l-.045 1.722.045 2.7c.015.24.195.42.435.42.24 0 .42-.18.435-.42l.06-2.7-.06-1.722c-.015-.24-.195-.42-.435-.42m1.905 1.035c-.195 0-.36.135-.39.33l-.03.69.03 2.7c.03.195.195.33.39.33.195 0 .36-.135.39-.33l.045-2.7-.045-.69c-.03-.195-.195-.33-.39-.33m.945-.135c-.21 0-.375.15-.39.36l-.03.825.03 2.7c.015.21.18.36.39.36.21 0 .375-.15.39-.36l.045-2.7-.045-.825c-.015-.21-.18-.36-.39-.36m.96-.165c-.225 0-.39.165-.405.375l-.015 1.155.015 2.7c.015.21.18.375.405.375.225 0 .39-.165.405-.375l.03-2.7-.03-1.155c-.015-.21-.18-.375-.405-.375m1.89.735c-.06-.015-.12-.03-.18-.03-.165 0-.3.105-.345.255l-.015.36.015 2.7c.015.21.18.375.39.375.06 0 .12-.015.18-.03.15-.06.255-.195.27-.36l.03-2.685-.03-.36c-.015-.165-.12-.3-.27-.36m.855-.36c-.075-.03-.165-.045-.255-.045-.165 0-.3.105-.345.255l-.015.525.015 2.7c.015.21.18.375.39.375.09 0 .18-.015.255-.045.135-.06.225-.195.24-.345l.03-2.685-.03-.525c-.015-.15-.105-.285-.24-.345"/>
      </svg>
    ),
  },
]

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      {/* Mobile burger button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-4 left-4 z-[100] w-12 h-12 bg-black text-white flex items-center justify-center"
        aria-label="Menu"
      >
        <div className="relative w-6 h-5">
          <span className={`absolute left-0 w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'top-2.5 rotate-45' : 'top-0'}`} />
          <span className={`absolute left-0 top-2.5 w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute left-0 w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'top-2.5 -rotate-45' : 'top-5'}`} />
        </div>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[49]"
          onClick={closeMobile}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-[250px] bg-[var(--color-sidebar-bg)] text-[var(--color-sidebar-text)]
          z-50 flex flex-col transition-transform duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="px-6 pt-8 pb-4">
          <NavLink to="/" onClick={closeMobile} className="block">
            <div className="text-[11px] tracking-[0.3em] text-white/40 uppercase mb-1">Portfolio</div>
            <h1 className="text-xl font-black tracking-tight leading-none">
              TIMUR<br/>
              <span className="text-white/60 font-light text-sm tracking-widest">SOUNDS</span>
            </h1>
          </NavLink>
        </div>

        {/* Divider */}
        <div className="mx-6 h-[1px] bg-white/10" />

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-3 py-3 text-sm font-medium tracking-wider transition-all duration-200
                    ${isActive
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:bg-white hover:text-black'
                    }`
                  }
                >
                  <span className="text-[10px] font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="px-6 pb-8">
          <div className="h-[1px] bg-white/10 mb-6" />
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-200"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-[10px] text-white/30 mt-4 tracking-wider">
            © 2024 TIMURSOUNDS
          </p>
        </div>
      </aside>
    </>
  )
}
