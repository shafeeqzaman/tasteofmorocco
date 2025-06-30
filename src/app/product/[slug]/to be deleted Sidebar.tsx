"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type SidebarProps = {
  hamburgerClassName?: string;
};


const navLinks = [
  { label: "Home", href: "#home" },
  {
  label: "Ceramics",
  href: "#ceramics-products",
  sub: [
    { label: "Tajines", href: "#ceramics-tajines" },
    { label: "Cups", href: "#ceramics-cups" },
    { label: "Moroccan Tea Glasses", href: "#ceramics-moroccan-tea-glasses" },
    { label: "Qasriya (Couscous Steaming Dish)", href: "#ceramics-qasriya-couscous-steaming-dish" },
    { label: "Mini Qasriya", href: "#ceramics-mini-qasriya" },
    { label: "Dessert Serving Platter (Mida)", href: "#ceramics-dessert-serving-platter-mida" },
    { label: "Large Serving Plate with Mini Plates Set", href: "#ceramics-large-serving-plate-with-mini-plates-set" },
  ]
},
{
  label: "Food",
  href: "#food-products",
  sub: [
    { label: "Couscous (Veal)", href: "#food-couscous-veal" },
    { label: "Pastilla", href: "#food-pastilla" },
    { label: "Lhem bel Barqouq (Meat with Prunes)", href: "#food-lhem-bel-barqouq-meat-with-prunes" },
    { label: "Djaj Mhammar", href: "#food-djaj-mhammar" },
    { label: "Lhem au Four (Roast Veal/Lamb)", href: "#food-lhem-au-four-roast-veal-lamb" },
    { label: "Pasticcio", href: "#food-pasticcio" },
    { label: "Msemmen", href: "#food-msemmen" },
    { label: "Batbout", href: "#food-batbout" },
    { label: "Khobz (Moroccan Bread with Semolina)", href: "#food-moroccan-bread-with-semolina-khobz" },
  ]
},
  {
    label: "Berber Carpets & Rugs",
    href: "#carpets-products",
    sub: [
      { label: "Berber Rugs", href: "#carpets-berber-rugs" }
    ]
  },
  {
    label: "Leather Goods",
    href: "#leather-products",
    sub: [
      { label: "Backpacks", href: "#leather-backpacks" },
      { label: "Handbags", href: "#leather-handbags" },
      { label: "Wallets", href: "#leather-wallets" },
      { label: "Crossbody Bags for Men", href: "#leather-crossbody-bags-for-men" },
      { label: "Traditional Moroccan Leather Slippers (Men)", href: "#leather-traditional-moroccan-leather-slippers-men" },
      { label: "Traditional Leather Slippers (Women)", href: "#leather-traditional-leather-slippers-women" }
    ]
  },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar({ hamburgerClassName }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <>
      {/* Hamburger button: visible on all screen sizes, top left */}
		<button
			className={hamburgerClassName ?? "fixed top-5 left-5 z-50 p-2 rounded-lg bg-white shadow-lg"}
			onClick={() => setOpen(true)}
			aria-label="Open navigation"
		>
			<Menu size={28} className="text-orange-700" />
		</button>


      {/* Overlay, only visible when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar drawer, always as overlay, not static */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-100 shadow-2xl z-50 transform transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        style={{ maxWidth: "80vw" }}
      >
        <div className="flex items-center justify-between p-6 border-b border-orange-200">
          <span className="font-extrabold text-2xl text-orange-700 tracking-widest" style={{ fontFamily: "'Merriweather', serif" }}>Taste of Morocco</span>
          <button
            className="p-2"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-1">
          {navLinks.map(link =>
            link.sub ? (
              <div key={link.href}>
                <button
                  className="flex items-center w-full px-6 py-3 text-left rounded-lg text-lg font-semibold text-orange-800 hover:bg-orange-100 hover:text-orange-600 transition"
                  onClick={() => toggleDropdown(link.label)}
                >
                  {link.label}
                  <ChevronDown
                    className={`ml-auto transition-transform ${expanded === link.label ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                {expanded === link.label && (
                  <div className="ml-4 flex flex-col gap-0.5">
                    {link.sub.map(sublink => (
                      <a
                        key={sublink.href}
                        href={sublink.href}
                        className="px-6 py-2 rounded-md text-md text-orange-700 hover:bg-amber-100 transition"
                        onClick={() => setOpen(false)}
                      >
                        {sublink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-3 rounded-lg text-lg font-semibold text-orange-800 hover:bg-orange-100 hover:text-orange-600 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </aside>
    </>
  );
}
