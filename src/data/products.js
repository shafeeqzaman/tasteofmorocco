// src/data/products.js

export const products = [
  // CERAMICS
  {
    category: "Ceramics",
    name: "Tajines",
    slug: "tajines",
    description: "Traditional tajines for authentic slow-cooked Moroccan meals.",
    images: ["/WhatsApp Image 2025-06-14 at 00.54.23.jpg"],
    available: true,
    status: "available",
    price: "Price upon request"
  },
  {
    category: "Ceramics",
    name: "Cups",
    slug: "cups",
    description: "Ceramic cups with vibrant patterns, ideal for coffee or tea.",
    images: ["/WhatsApp Image 2025-06-14 at 00.53.20.jpeg"],
    available: true,
    status: "available",
    price: "$12"
  },
  {
    category: "Ceramics",
    name: "Moroccan Tea Glasses",
    slug: "moroccan-tea-glasses",
    description: "Traditional tea glasses for enjoying Moroccan mint tea.",
    images: ["/WhatsApp Image 2025-06-14 at 00.57.13.jpeg"],
    available: true,
    status: "available",
    price: "$49 for set of 14 glasses"
  },
  {
    category: "Ceramics",
    name: "Qasriya (Couscous Steaming Dish)",
    slug: "qasriya-couscous-steaming-dish",
    description: "Large shallow ceramic dish for steaming and serving couscous, an essential for Moroccan feasts.",
    images: ["/WhatsApp Image 2025-06-14 at 00.52.31.jpeg"],
    available: true,
    status: "available",
    price: "$40"
  },
  {
    category: "Ceramics",
    name: "Mini Qasriya",
    slug: "mini-qasriya",
    description: "Individual-size qasriya dishes—perfect for personal servings or decorative use.",
    images: ["/WhatsApp Image 2025-06-14 at 00.55.37.jpeg"],
    available: true,
    status: "available",
    price: "$20/pc"
  },
  {
    category: "Ceramics",
    name: "Dessert Serving Platter",
    slug: "dessert-serving-platter",
    description: "Traditional round ceramic platter for serving Moroccan pastries, dates, and sweets.",
    images: ["/WhatsApp Image 2025-06-14 at 00.56.08.jpeg"],
    available: true,
    status: "available",
    price: "$35"
  },
  {
    category: "Ceramics",
    name: "Large Serving Plate with Mini Plates Set",
    slug: "large-serving-plate-with-mini-plates-set",
    description: "Stunning large ceramic platter with 6 matching mini plates—ideal for sharing appetizers, desserts, or meze.",
    images: ["/WhatsApp Image 2025-06-14 at 00.56.34.jpeg"],
    available: true,
    status: "available",
    price: "$45 for full set"
  },

  // FOOD
  {
    category: "Food",
    name: "Couscous (Veal)",
    slug: "couscous-veal",
    description: "Couscous with tender veal and garden vegetables, topped with caramelized raisins and onions.",
    images: ["/WhatsApp Image 2025-06-14 at 01.05.59.jpeg","/WhatsApp Image 2025-06-14 at 01.05.29.jpeg"],
    available: true,
    status: "made-to-order",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$22 (1 person), $37 (2 persons)"
  },
  {
    category: "Food",
    name: "Pastilla",
    slug: "pastilla",
    description: "A savory-sweet pie with thin pastry, spiced chicken or seafood, almonds, cinnamon, and sugar—a festive Moroccan classic.",
    images: ["/WhatsApp Image 2025-06-14 at 01.18.42.jpeg","/WhatsApp Image 2025-06-14 at 01.12.45.jpeg","/IMG_20220827_150750.jpg"],
    available: true,
    status: "made-to-order",
    leadTimeDays: 2,
    leadTimeLargeOrderDays: 3,
    price: "$18 (1 person), $6 (mini)"
  },
  {
    category: "Food",
    name: "Lhem bel Barqouq (Meat with Prunes)",
    slug: "lhem-bel-barqouq-meat-with-prunes",
    description: "Tender veal slow-cooked with prunes and almonds, blending sweet and savory flavors.",
    images: ["/IMG_20220530_142838.jpg"],
    available: true,
    status: "made-to-order",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$22 (1 person), $40 (2 persons)"
  },
  {
    category: "Food",
    name: "Djaj Mhammar",
    slug: "djaj-mhammar",
    description: "Marinated Moroccan roast chicken, golden and aromatic, often served with olives and preserved lemons.",
    images: ["/IMG_20220820_163406.jpg"],
    available: false,
    status: "made-to-order",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$20 (small), $38 (large)"
  },
  {
    category: "Food",
    name: "Lhem au Four (Roast Veal/Lamb)",
    slug: "lhem-au-four-roast-veal-lamb",
    description: "Oven-roasted lamb or veal, seasoned with Moroccan spices for a tender, flavorful dish.",
    images: ["/IMG_20220611_153303.jpg"],
    available: true,
    status: "made-to-order",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "Veal $22 / Lamb $30"
  },
  {
    category: "Food",
    name: "Pasticcio",
    slug: "pasticcio",
    description: "Made with seasoned chicken, ground beef, and smoked turkey, french fries and cheese — Moroccan-Italian fusion.",
    images: ["/WhatsApp Image 2025-06-14 at 01.06.52.jpeg"],
    available: true,
    status: "made-to-order",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$22"
  },
  {
    category: "Food",
    name: "Msemmen",
    slug: "msemmen",
    description: "Msemmen (Moroccan square layered flatbread), flaky and delicious—perfect for breakfast with honey or cheese.",
    images: ["/WhatsApp Image 2025-06-14 at 01.04.02.jpeg","/WhatsApp Image 2025-06-14 at 01.01.11.jpeg"],
    available: false,
    status: "made-to-order",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$2/pc"
  },
  {
    category: "Food",
    name: "Batbout",
    slug: "batbout",
    description: "Batbout (Moroccan pocket bread), soft and pillowy, traditionally cooked on a griddle and enjoyed with savory or sweet fillings.",
    images: ["/WhatsApp Image 2025-06-14 at 01.26.12.jpeg","/WhatsApp Image 2025-06-14 at 01.02.44.jpeg"],
    available: false,
    status: "made-to-order",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "Regular $1/pc, Whole wheat $2/pc, Mini 3 for $1"
  },
  {
    category: "Food",
    name: "Khobz (Moroccan Bread with Semolina)",
    slug: "khobz-moroccan-bread-with-semolina",
    description: "Khobz (rustic round bread with a golden crust and hearty semolina flavor), staple on every Moroccan table.",
    images: ["/WhatsApp Image 2025-06-14 at 01.04.45.jpeg"],
    available: true,
    status: "made-to-order",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$2/pc"
  },

  // CARPETS
  {
    category: "Berber Carpets & Rugs",
    name: "Berber Rugs",
    slug: "berber-rugs",
    description: "Hand-woven Berber rugs—each piece tells a unique story through color and pattern.",
    images: ["/20250512_123130.jpg"],
    available: true,
    status: "available",
    price: "Price upon request"
  },

  // LEATHER GOODS
  {
    category: "Leather Goods",
    name: "Backpacks",
    slug: "backpacks",
    description: "Durable leather backpacks, blending tradition and modern style for everyday use.",
    images: ["/WhatsApp Image 2025-06-14 at 00.51.38.jpg"],
    available: true,
    status: "available",
    price: "$125"
  },
  {
    category: "Leather Goods",
    name: "Handbags",
    slug: "handbags",
    description: "Elegant Moroccan leather handbags, crafted for both form and function.",
    images: [""],
    available: false,
    status: "out-of-stock"
  },
  {
    category: "Leather Goods",
    name: "Wallets",
    slug: "wallets",
    description: "Compact, hand-stitched leather wallets—perfect for daily essentials.",
    images: [""],
    available: false,
    status: "out-of-stock"
  },
  {
    category: "Leather Goods",
    name: "Crossbody Bags for Men",
    slug: "crossbody-bags-for-men",
    description: "Practical crossbody bags in premium leather, designed for men on the go.",
    images: [""],
    available: false,
    status: "out-of-stock"
  },
  {
    category: "Leather Goods",
    name: "Babouches - Mans (Traditional Moroccan Leather Slippers)",
    slug: "traditional-moroccan-leather-slippers-men",
    description: "Classic Moroccan babouches for men—comfortable, timeless, and hand-made.",
    images: [""],
    available: false,
    status: "out-of-stock"
  },
  {
    category: "Leather Goods",
    name: "Babouches - Womens (Traditional Leather Slippers)",
    slug: "babouche-traditional-leather-slippers-women",
    description: "Stylish babouches for women, blending tradition with vibrant color and comfort.",
    images: ["/WhatsApp Image 2025-06-14 at 00.51.08.jpg"],
    available: true,
    status: "available",
    price: "$35"
  },
];
