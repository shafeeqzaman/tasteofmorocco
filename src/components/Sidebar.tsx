'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';

type SidebarProps = {
  hamburgerClassName?: string;
};

// map display name → route slug
const categoryMap: Record<string,string> = {
  Food:               'food',
  Ceramics:           'ceramics',
  'Berber Carpets, Rugs, and Poufs': 'berber-rugs',
  'Leather Goods':    'leather-goods',
};

export default function Sidebar({ hamburgerClassName }: SidebarProps) {
  const [open, setOpen]           = useState(false);
  const [expanded, setExpanded]   = useState<string|null>(null);
  const router                    = useRouter();

  // build navLinks dynamically
  const navLinks = [
    { label: 'Home', href: '/' },
    // one entry per category...
    ...Object.entries(categoryMap).map(([display, slug]) => {
      // gather all products in that category
      const subs = products
        .filter(p => p.category === display)
        .map(p => ({
          label: p.name,
          href: `/categories/${slug}/product/${p.slug}`,
        }));
      return {
        label: display,
        href: `/categories/${slug}`,
        sub: subs,
      };
    }),
    { label: 'Contact', href: '/contact' },
  ];

  const handleNav = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const toggleDropdown = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <>
      {/* Hamburger */}
      <button
        className={hamburgerClassName ?? 'fixed top-5 left-5 z-50 p-2 rounded-lg bg-white shadow-lg'}
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
      >
        <Menu size={28} className="text-orange-700" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-100
          shadow-2xl z-50 transform transition-transform duration-200
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ maxWidth: '80vw' }}
      >
        <div className="flex items-center justify-between p-6 border-b border-orange-200">
          <span
            className="font-extrabold text-2xl text-orange-700 tracking-widest"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Taste of Morocco
          </span>
          <button className="p-2" onClick={() => setOpen(false)} aria-label="Close navigation">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-1 overflow-y-auto h-[calc(100%-5rem)]">
          {navLinks.map(link => (
            <div key={link.href}>
              {link.sub && link.sub.length > 0 ? (
                <>
                  <div className="flex items-center justify-between px-6 py-3 rounded-lg text-lg font-semibold text-orange-800 hover:bg-orange-100 transition">
                    <button
                      className="text-left w-full"
                      onClick={() => handleNav(link.href)}
                      aria-label={`Go to ${link.label}`}
                    >
                      {link.label}
                    </button>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      aria-label={`Toggle ${link.label} submenu`}
                      className="ml-2"
                    >
                      <ChevronDown
                        className={`transition-transform ${expanded === link.label ? 'rotate-180' : ''}`}
                        size={20}
                      />
                    </button>
                  </div>
                  {expanded === link.label && (
                    <div className="ml-6 flex flex-col gap-0.5">
                      {link.sub.map(s => (
                        <button
                          key={s.href}
                          className="px-4 py-2 rounded-md text-sm text-orange-700 hover:bg-amber-100 transition text-left"
                          onClick={() => handleNav(s.href)}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  className="px-6 py-3 rounded-lg text-lg font-semibold text-orange-800 hover:bg-orange-100 hover:text-orange-600 transition text-left"
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </button>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
