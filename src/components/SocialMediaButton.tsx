import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";
import React from "react";

type Props = {
  type: "whatsapp" | "instagram" | "tiktok";
  href: string;
  style?: React.CSSProperties;
};

const ICON_MAP = {
  whatsapp: <FaWhatsapp size={28} color="#25D366" />,
  instagram: <FaInstagram size={28} color="#E4405F" />,
  tiktok: <FaTiktok size={28} color="#010101" />
};

export default function SocialMediaButton({ type, href, style }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={type.charAt(0).toUpperCase() + type.slice(1)}
      className="fixed right-4 z-50 rounded-full bg-white border border-gray-200 shadow-md w-12 h-12 flex items-center justify-center hover:scale-110 transition"
      style={style}
    >
      {ICON_MAP[type]}
    </a>
  );
}
