// src/data/products.js

export const products = [
  // ── CERAMICS ─────────────────────────────────────────────────────────────
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
    available: false,
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
    available: false,
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
    price: "$13/pc"
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

  // ── FOOD: Salads & Starters ─────────────────────────────────────────────────
  {
    category: "Food",
    name: "Fig & Bocconcini Salad",
    slug: "fig-bocconcini-salad",
    description: "Mixed greens crowned with fresh fig wedges, bocconcini pearls, cherry tomatoes, avocado slices and toasted walnuts, finished with a bright citrus vinaigrette.",
    images: ["/images/food/fig-bocconcini-salad.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$14"
  },

  // ── FOOD: Main Dishes ───────────────────────────────────────────────────────
  {
    category: "Food",
    name: "Couscous (Veal)",
    slug: "couscous-veal",
    description: "Couscous with tender veal and garden vegetables, topped with caramelized raisins and onions.",
    images: [
      "/0WhatsApp Image 2025-06-14 at 01.05.59.jpeg",
      "/0WhatsApp Image 2025-06-14 at 01.05.29.jpeg"
    ],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$22 (1 person), $37 (2 persons)"
  },
  {
    category: "Food",
    name: "Pastilla",
    slug: "pastilla",
    description: "A savory-sweet pie with thin pastry, spiced chicken or seafood, almonds, cinnamon, and sugar—a festive Moroccan classic.",
    images: [
      "/WhatsApp Image 2025-06-14 at 01.18.42.jpeg",
      "/0WhatsApp Image 2025-06-14 at 01.12.45.jpeg",
      "/IMG_20220827_150750.jpg"
    ],
    available: false,
    status: "Unavailable",
    leadTimeDays: 2,
    leadTimeLargeOrderDays: 3,
    price: "$18 (1 person), $6 (mini)"
  },
  {
    category: "Food",
    name: "Djaj Mhammar",
    slug: "djaj-mhammar",
    description: "Marinated Moroccan roast chicken, golden and aromatic, served with olives and preserved lemons.",
    images: ["/IMG_20220820_163406.jpg"],
    available: false,
    status: "Unavailable",
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
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "Veal $22 / Lamb $30"
  },
  {
    category: "Food",
    name: "Pasticcio",
    slug: "pasticcio",
    description: "Moroccan-Italian fusion bake with chicken, ground beef, smoked turkey, fries and cheese.",
    images: ["/0WhatsApp Image 2025-06-14 at 01.06.52.jpeg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$22"
  },

  // ── FOOD: Tajines ───────────────────────────────────────────────────────────
  {
    category: "Food",
    name: "Tajine (Vegetarian)",
    slug: "tajine-vegetarian",
    description: "Colorful vegetable tajine slow-cooked with olives, carrots, and Moroccan spices.",
    images: ["/images/food/tajine-vegetarian.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$18 (1 person), $33 (2 persons)"
  },
  {
    category: "Food",
    name: "Tajine (Chicken & Vegetables)",
    slug: "tajine-chicken-vegetables",
    description: "Tender chicken pieces with seasonal vegetables and spices.",
    images: ["/images/food/0tajine-chicken-vegetables.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$20 (1 person), $35 (2 persons)"
  },
  {
    category: "Food",
    name: "Tajine (Beef & Vegetables)",
    slug: "tajine-beef-vegetables",
    description: "Hearty beef chunks simmered with vegetables and aromatic ras el hanout.",
    images: ["/images/food/0tajine-beef-vegetables.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$22 (1 person), $37 (2 persons)"
  },

  // ── FOOD: Soups & Stews ────────────────────────────────────────────────────
  {
    category: "Food",
    name: "Harira",
    slug: "harira",
    description: "Traditional Moroccan soup of tomatoes, lentils, chickpeas and tender lamb.",
    images: ["/images/food/harira.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$9"
  },
  {
    category: "Food",
    name: "Lentille (Lentil Soup)",
    slug: "lentil-soup",
    description: "Silky lentil soup seasoned with cumin, garlic, and a hint of lemon.",
    images: ["/images/food/lentil-soup.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$8"
  },
  {
    category: "Food",
    name: "Loubia (White Bean Stew)",
    slug: "loubia",
    description: "Creamy white beans slow-cooked in tomato sauce with garlic and cilantro.",
    images: ["/images/food/loubia.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$8"
  },
  {
    category: "Food",
    name: "Zaalouk",
    slug: "zaalouk",
    description: "Smoky eggplant & tomato salad with garlic, paprika and fresh cilantro.",
    images: ["/images/food/zaalouk.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$9"
  },

  // ── FOOD: Breads & Snacks ─────────────────────────────────────────────────
  {
    category: "Food",
    name: "Khobz (Moroccan Bread with Semolina)",  
    slug: "khobz-moroccan-bread-with-semolina",
    description: "Rustic round bread with a golden crust and hearty semolina flavor.",
    images: ["/WhatsApp Image 2025-06-14 at 01.04.45.jpeg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$2/pc"
  },
  {
	category: "Food",
	name: "Batbout",
	slug: "batbout",
	description: "Batbout (Moroccan pocket bread), soft and pillowy, traditionally cooked on a griddle and enjoyed with savory or sweet fillings.",
	images: ["/WhatsApp Image 2025-06-14 at 01.26.12.jpeg", "/WhatsApp Image 2025-06-14 at 01.02.44.jpeg"],
	available: false,
	status: "Unavailable",
	leadTimeDays: 1,
	leadTimeLargeOrderDays: 2,
	price: "Regular $2/pc, Whole wheat $2.50/pc, Mini 3 for $2"
  },
 /* {
    category: "Food",
    name: "Batbout (Mini)",
    slug: "batbout-mini",
    description: "Soft, pocketed mini batbout—perfect for dipping or filling.",
    images: ["/images/food/batbout-mini.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$0.50"
  },*/
  {
    category: "Food",
    name: "Batbout (Stuffed Vegetable)",
    slug: "batbout-stuffed-vegetable",
    description: "Batbout filled with a savory vegetable mélange.",
    images: ["/images/food/batbout-stuffed-vegetable.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$5"
  },
  {
    category: "Food",
    name: "Batbout (Stuffed Beef)",
    slug: "batbout-stuffed-meat",
    description: "Batbout filled with ground beef and vegetables.",
    images: ["/images/food/batbout-stuffed-meat.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$6"
  },
  {
	category: "Food",
	name: "Guorss",
	slug: "guorss",
	description: "Light and airy Moroccan flatbread, served warm.",
	images: ["/images/food/guorss.jpg", "/images/food/guorss2.jpg",  "/images/food/guorss3.jpg"],
	available: false,
	status: "Unavailable",
	leadTimeDays: 1,
	leadTimeLargeOrderDays: 1,
	price: "$2"
  },
  {
    category: "Food",
    name: "Harcha",
    slug: "harcha",
    description: "Semolina flatbread, crisp on the outside and tender inside.",  
    images: ["/images/food/harcha.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$1.50"
  },
  {
    category: "Food",
    name: "Harcha (Moroccan Olives & Zaatar)",  
    slug: "harcha-olives-zaatar",
    description: "Semolina flatbread studded with olives and fragrant zaatar.",  
    images: ["/images/food/harcha-olives-zaatar.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$2.30"
  },
  {
	category: "Food",
	name: "Msemmen",
	slug: "msemmen",
	description: "Large Msemmen (Moroccan square layered flatbread), flaky and delicious—perfect for breakfast with honey or cheese.",
	images: ["/WhatsApp Image 2025-06-14 at 01.04.02.jpeg", "/WhatsApp Image 2025-06-14 at 01.01.11.jpeg"],
	available: false,
	status: "Unavailable",
	leadTimeDays: 1,
	leadTimeLargeOrderDays: 2,
	price: "$3/pc"
  },
  {
	category: "Food",
	name: "Mini Msemmen",
	slug: "mini-msemmen",
	description: "Bite-sized layered semolina flatbreads—crispy on the outside, tender inside—perfect for snacking or cheese pairing.",
	images: ["/images/food/mini-msemmen.jpg"],
	available: false,
	status: "Unavailable",
	leadTimeDays: 1,
	leadTimeLargeOrderDays: 1,
	price: "$2/pc"
  },

  // ── FOOD: Briwats & Mini Treats ───────────────────────────────────────────
  {
    category: "Food",
    name: "Mini Pastilla",
    slug: "mini-pastilla",
    description: "Crispy mini chicken pastilla layered with almonds and cinnamon.",
    images: ["/images/food/mini-pastilla.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$6"
  },
  {
    category: "Food",
    name: "Briwat (Beef & Vegetable)",
    slug: "briwat-beef-vegetable",
    description: "Triangular or cylindrical pastry filled with seasoned ground beef and vegetables.",
    images: ["/images/food/briwat-beef-vegetable.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$3"
  },
  {
    category: "Food",
    name: "Briwat (Chicken & Vegetable)",
    slug: "briwat-chicken-vegetable",
    description: "Triangular or cylindrical pastry filled with spiced chicken and seasonal veggies.",
    images: ["/images/food/briwat-chicken-vegetable.jpg"],
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$3"
  },

  // ── FOOD: Condiments & Accompaniments ────────────────────────────────────
  {
    category: "Food",  
    name: "L7mad Mrakkad – Citron fermenté (Fermented Lemon)",
    slug: "fermented-lemon",  
    description: "Whole lemons preserved in sea salt and their own juices—perfect for adding bright, tangy depth to Djaj Mhammar and other tajines.",
    images: ["/images/food/condiments-set-single.jpg"],  
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 1,
    price: "$4 each"
  },

  // ── FOOD: Desserts & Gateaux ─────────────────────────────────────────────
  {
    category: "Food",
    name: "Seffa",  
    slug: "seffa",  
    description: "Sweet steamed vermicelli layered with cinnamon, toasted almonds and powdered sugar.",
    images: ["/images/food/seffa.jpg"],  
    available: false,
    status: "Unavailable",
    leadTimeDays: 1,
    leadTimeLargeOrderDays: 2,
    price: "$12 (small)"
  },
  {
    category: "Food",
    name: "Gateaux Marocain (Almond Biscuits)",  
    slug: "gateaux-marocain",  
    description: "Delicate almond-based Moroccan biscuits, lightly dusted with powdered sugar.",
    images: ["/images/food/gateaux-marocain.jpg"],  
    available: false,
    status: "Unavailable",
    leadTimeDays: 2,
    leadTimeLargeOrderDays: 3,
    price: "$12 per dozen"
  },

  // ── SPECIAL ORDERS ────────────────────────────────────────────────────────
  {
    category: "Food",
    name: "Msemen for Rfissa",  
    slug: "msemen-for-rfissa",  
    description: "Layered msemen pancakes sold per kilogram for traditional Rfissa service.",
    images: ["/images/food/msemen-for-rfissa.jpg"],  
    available: false,
    status: "Unavailable",
    leadTimeDays: 2,
    leadTimeLargeOrderDays: 3,
    price: "$25/kg"
  },

  // ── BERBER RUGS ───────────────────────────────────────────────────────────
  {
    category: "Berber Carpets, Rugs, and Poufs",
    name: "Berber Rugs",
    slug: "berber-rugs",
    description: "Hand-woven Berber rugs—each piece tells a unique story through color and pattern.",
    images: ["/20250512_123130.jpg"],
    available: true,
    status: "available",
    price: "Price upon request"
  },

  // ── LEATHER GOODS ────────────────────────────────────────────────────────
  {
    category: "Leather Goods",
    name: "Backpacks",
    slug: "backpacks",
    description: "Durable leather backpacks, blending tradition and modern style for everyday use.",
    images: ["/WhatsApp Image 2025-06-14 at 00.51.38.jpg"],
    available: true,
    status: "available",
    price: "$99"
  },
  {
    category: "Leather Goods",
    name: "Handbags",
    slug: "handbags",
    description: "Elegant Moroccan leather handbags, crafted for both form and function.",
    images: [],
    available: false,
    status: "out-of-stock"
  },
  {
    category: "Leather Goods",
    name: "Wallets",
    slug: "wallets",
    description: "Compact, hand-stitched leather wallets—perfect for daily essentials.",
    images: [],
    available: false,
    status: "out-of-stock"
  },
  {
    category: "Leather Goods",
    name: "Crossbody Bags for Men",
    slug: "crossbody-bags-for-men",
    description: "Practical crossbody bags in premium leather, designed for men on the go.",
    images: [],
    available: false,
    status: "out-of-stock"
  },
  {
    category: "Leather Goods",
    name: "Babouches - Mens (Traditional Moroccan Leather Slippers)",
    slug: "traditional-moroccan-leather-slippers-men",
    description: "Classic Moroccan babouches for men—comfortable, timeless, and hand-made.",
    images: [],
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
  }
];
