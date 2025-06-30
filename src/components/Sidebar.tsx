'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';

// Mapping of display name to URL-safe route segment
const categoryMap: Record<string, string> = {
  'Food': 'food',
  'Ceramics': 'ceramics',
  'Berber Carpets, Rugs, and Poufs': 'berber-rugs',
  'Leather Goods': 'leather-goods'
};

const prioritizedCategories = Object.keys(categoryMap);

const navLinks = [
  { label: 'Home', href: '/' },
  ...prioritizedCategories.map(displayName => {
    const route = categoryMap[displayName];

    const filteredProducts = products.filter(
      p => p.category === displayName // use raw displayName match
    );

    return {
      label: displayName,
      href: `/categories/${route}`,
      sub: filteredProducts.map(product => ({
        label: product.name,
        href: `/categories/${route}/product/${product.slug}`
      }))
    };
  }),
  { label: 'Contact', href: '/contact' }
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const router = useRouter();

  const handleNav = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const toggleDropdown = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <>
      <button
        className="fixed top-5 left-5 z-50 p-2 rounded-lg bg-white shadow-lg"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
      >
        <Menu size={28} className="text-orange-700" />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-100 shadow-2xl z-50 transform transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
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

        <nav className="mt-6 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map(link =>
            link.sub ? (
              <div key={link.href}>
                <div className="flex items-center justify-between px-6 py-3 rounded-lg text-lg font-semibold text-orange-800 hover:bg-orange-100 transition">
                  <button
                    className="text-left w-full"
                    onClick={() => handleNav(link.href)}
                    aria-label={`Go to ${link.label} page`}
                  >
                    {link.label}
                  </button>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    aria-label={`Toggle ${link.label} submenu`}
                    className="ml-2"
                  >
                    <ChevronDown
                      className={`transition-transform ${
                        expanded === link.label ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </button>
                </div>

                {expanded === link.label && link.sub.length > 0 && (
                  <div className="ml-6 flex flex-col gap-0.5">
                    {link.sub.map(sublink => (
                      <button
                        key={sublink.href}
                        className="px-4 py-2 rounded-md text-sm text-orange-700 hover:bg-amber-100 transition text-left"
                        onClick={() => handleNav(sublink.href)}
                      >
                        {sublink.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.href}
                className="px-6 py-3 rounded-lg text-lg font-semibold text-orange-800 hover:bg-orange-100 hover:text-orange-600 transition text-left"
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            )
          )}
        </nav>
      </aside>
    </>
  );
}
