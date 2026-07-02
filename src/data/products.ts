export type ProductCategory =
  | "laptops"
  | "keyboards"
  | "mice"
  | "monitors"
  | "headphones"
  | "accessories";

export interface Product {
  id: number;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number; // INR
  rating: number; // 0-5
  reviewCount: number;
  isNew?: boolean;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string[];
  specs: { label: string; value: string }[];
  highlights: string[];
}

export const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const categoryMeta: Record<ProductCategory, { label: string; description: string }> = {
  laptops: {
    label: "Gaming Laptops",
    description: "High-performance gaming laptops built for esports, streaming, and AAA titles.",
  },
  keyboards: {
    label: "Keyboards",
    description: "Mechanical and low-profile keyboards engineered for speed and precision.",
  },
  mice: {
    label: "Gaming Mice",
    description: "Ultra-light wireless mice with esports-grade sensors.",
  },
  monitors: {
    label: "Monitors",
    description: "High refresh-rate displays with vivid colors and rapid response times.",
  },
  headphones: {
    label: "Headphones",
    description: "Immersive surround sound and crystal-clear comms for every battle.",
  },
  accessories: {
    label: "PC Accessories",
    description: "Mousepads, hubs, controllers, and more to complete your battlestation.",
  },
};

export const products: Product[] = [
  {
    id: 1,
    slug: "raven-x16-rtx-gaming-laptop",
    name: "Raven X16 RTX Gaming Laptop",
    brand: "Nebula",
    category: "laptops",
    categoryLabel: "Gaming Laptops",
    price: 184999,
    rating: 4.8,
    reviewCount: 312,
    isNew: true,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "16-inch QHD+ 240Hz gaming powerhouse with RTX 4080 and 32GB DDR5.",
    description: [
      "The Raven X16 is engineered for serious gamers and creators. A 16-inch QHD+ 240Hz panel keeps every frame buttery smooth, while the NVIDIA RTX 4080 and Intel Core i9 HX punch through the most demanding titles at high settings.",
      "Dual-fan vapor chamber cooling keeps thermals in check even during marathon sessions, and the per-key RGB keyboard with 1.7mm travel gives you the feedback you need to react first.",
    ],
    specs: [
      { label: "CPU", value: "Intel Core i9-14900HX" },
      { label: "GPU", value: "NVIDIA GeForce RTX 4080 12GB" },
      { label: "Display", value: "16\" QHD+ 240Hz IPS" },
      { label: "Memory", value: "32GB DDR5-5600" },
      { label: "Storage", value: "1TB NVMe Gen4 SSD" },
    ],
    highlights: [
      "Vapor chamber cooling",
      "Per-key RGB",
      "Thunderbolt 4 + HDMI 2.1",
      "Wi-Fi 7",
    ],
  },
  {
    id: 2,
    slug: "stormblade-15-rtx4060",
    name: "Stormblade 15 RTX 4060",
    brand: "Volt",
    category: "laptops",
    categoryLabel: "Gaming Laptops",
    price: 124999,
    rating: 4.6,
    reviewCount: 198,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "15.6-inch 165Hz QHD with Ryzen 7 and RTX 4060.",
    description: [
      "The Stormblade 15 strikes the sweet spot between portability and performance. A 15.6\" 165Hz QHD display, AMD Ryzen 7, and RTX 4060 deliver excellent 1440p gameplay on the go.",
    ],
    specs: [
      { label: "CPU", value: "AMD Ryzen 7 8845HS" },
      { label: "GPU", value: "NVIDIA GeForce RTX 4060 8GB" },
      { label: "Display", value: "15.6\" QHD 165Hz" },
      { label: "Memory", value: "16GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
    ],
    highlights: ["165Hz QHD", "Dual SSD slots", "RGB keyboard"],
  },
  {
    id: 3,
    slug: "tactix-pro-mechanical-keyboard",
    name: "Tactix Pro Wireless Mechanical Keyboard",
    brand: "Nebula",
    category: "keyboards",
    categoryLabel: "Keyboards",
    price: 12999,
    rating: 4.7,
    reviewCount: 482,
    isNew: true,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "TKL hot-swappable board with linear switches and PBT keycaps.",
    description: [
      "Tactix Pro is a tournament-ready TKL keyboard with hot-swap sockets, gasket-mounted PCB, and pre-lubed linear switches for buttery typing. Triple-mode connectivity (USB-C, Bluetooth, 2.4GHz) keeps you flexible.",
    ],
    specs: [
      { label: "Layout", value: "Tenkeyless (87 keys)" },
      { label: "Switches", value: "Hot-swappable linear" },
      { label: "Keycaps", value: "Double-shot PBT" },
      { label: "Connectivity", value: "USB-C, BT 5.3, 2.4GHz" },
      { label: "Battery", value: "4000mAh" },
    ],
    highlights: ["Hot-swap", "South-facing RGB", "Triple-mode wireless"],
  },
  {
    id: 4,
    slug: "arc60-low-profile-keyboard",
    name: "Arc60 Low-Profile Keyboard",
    brand: "Volt",
    category: "keyboards",
    categoryLabel: "Keyboards",
    price: 7499,
    rating: 4.4,
    reviewCount: 219,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "Compact 60% keyboard with low-profile red switches.",
    description: [
      "A minimalist 60% form factor with low-profile reds and per-key RGB. Perfect for clean desks and fast actuation.",
    ],
    specs: [
      { label: "Layout", value: "60% (61 keys)" },
      { label: "Switches", value: "Low-profile red" },
      { label: "Lighting", value: "Per-key RGB" },
      { label: "Connectivity", value: "USB-C" },
    ],
    highlights: ["Slim profile", "Aluminum top plate", "QMK/VIA"],
  },
  {
    id: 5,
    slug: "phantom-air-wireless-mouse",
    name: "Phantom Air Wireless Gaming Mouse",
    brand: "Nebula",
    category: "mice",
    categoryLabel: "Gaming Mice",
    price: 8999,
    rating: 4.8,
    reviewCount: 654,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "55g ultralight wireless mouse with 30K DPI sensor.",
    description: [
      "At just 55g, the Phantom Air glides effortlessly across any surface. A flagship 30,000 DPI optical sensor and 8K polling rate deliver pixel-perfect tracking for esports.",
    ],
    specs: [
      { label: "Weight", value: "55g" },
      { label: "Sensor", value: "Optical 30,000 DPI" },
      { label: "Polling rate", value: "Up to 8000Hz" },
      { label: "Battery", value: "Up to 90 hours" },
      { label: "Connectivity", value: "2.4GHz / USB-C" },
    ],
    highlights: ["Ultralight 55g", "8K polling", "PTFE skates"],
  },
  {
    id: 6,
    slug: "vector-pro-fps-mouse",
    name: "Vector Pro FPS Mouse",
    brand: "Volt",
    category: "mice",
    categoryLabel: "Gaming Mice",
    price: 4499,
    rating: 4.5,
    reviewCount: 287,
    image: "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "Wired FPS mouse with 26K sensor and Kailh GM 8.0 switches.",
    description: [
      "Built for first-person shooters, the Vector Pro pairs a precision 26K sensor with crisp, snappy mouse switches rated for 80M clicks.",
    ],
    specs: [
      { label: "Weight", value: "68g" },
      { label: "Sensor", value: "Optical 26,000 DPI" },
      { label: "Buttons", value: "6 programmable" },
      { label: "Cable", value: "Paracord USB" },
    ],
    highlights: ["Kailh GM 8.0", "Paracord cable", "Onboard memory"],
  },
  {
    id: 7,
    slug: "horizon-27-qhd-240hz-monitor",
    name: "Horizon 27 QHD 240Hz Monitor",
    brand: "Nebula",
    category: "monitors",
    categoryLabel: "Monitors",
    price: 38999,
    rating: 4.7,
    reviewCount: 421,
    isNew: true,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "27-inch QHD IPS at 240Hz with 1ms response and HDR400.",
    description: [
      "The Horizon 27 brings 240Hz to a stunning Fast IPS panel. Wide color coverage and HDR400 mean games look as good as they play.",
    ],
    specs: [
      { label: "Size", value: "27 inches" },
      { label: "Resolution", value: "2560 x 1440 (QHD)" },
      { label: "Refresh rate", value: "240Hz" },
      { label: "Panel", value: "Fast IPS, 1ms GtG" },
      { label: "HDR", value: "DisplayHDR 400" },
    ],
    highlights: ["240Hz QHD", "G-Sync compatible", "Height-adjustable stand"],
  },
  {
    id: 8,
    slug: "horizon-34-ultrawide",
    name: "Horizon 34 Ultrawide 165Hz",
    brand: "Nebula",
    category: "monitors",
    categoryLabel: "Monitors",
    price: 64999,
    rating: 4.6,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "34-inch curved WQHD ultrawide at 165Hz.",
    description: [
      "An immersive 34-inch curved ultrawide with 3440x1440 resolution and 165Hz refresh. Ideal for racing, sims, and productivity.",
    ],
    specs: [
      { label: "Size", value: "34\" curved" },
      { label: "Resolution", value: "3440 x 1440" },
      { label: "Refresh rate", value: "165Hz" },
      { label: "Panel", value: "VA, 1ms MPRT" },
    ],
    highlights: ["1500R curve", "Picture-in-picture", "USB-C 65W"],
  },
  {
    id: 9,
    slug: "echo-7-wireless-headset",
    name: "Echo 7 Wireless Gaming Headset",
    brand: "Nebula",
    category: "headphones",
    categoryLabel: "Headphones",
    price: 11999,
    rating: 4.6,
    reviewCount: 389,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "Low-latency wireless headset with 50mm drivers and 7.1 surround.",
    description: [
      "Echo 7 pairs custom 50mm neodymium drivers with virtual 7.1 surround for pinpoint positional audio. A detachable boom mic and 40-hour battery have you covered for the longest sessions.",
    ],
    specs: [
      { label: "Drivers", value: "50mm neodymium" },
      { label: "Surround", value: "Virtual 7.1" },
      { label: "Battery", value: "40 hours" },
      { label: "Connectivity", value: "2.4GHz, BT 5.3, USB-C" },
    ],
    highlights: ["Detachable mic", "Memory foam earcups", "Dual-source mixing"],
  },
  {
    id: 10,
    slug: "pulse-studio-over-ear",
    name: "Pulse Studio Over-Ear Headphones",
    brand: "Volt",
    category: "headphones",
    categoryLabel: "Headphones",
    price: 6499,
    rating: 4.4,
    reviewCount: 173,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "Studio-tuned wired headphones for gaming and music.",
    description: [
      "A balanced, studio-tuned signature makes Pulse Studio equally great for competitive shooters and your favorite playlists.",
    ],
    specs: [
      { label: "Drivers", value: "40mm dynamic" },
      { label: "Impedance", value: "32 ohms" },
      { label: "Cable", value: "Detachable 3.5mm" },
    ],
    highlights: ["Lightweight", "Replaceable pads", "Folding design"],
  },
  {
    id: 11,
    slug: "glide-xxl-desk-mat",
    name: "Glide XXL Desk Mat",
    brand: "Nebula",
    category: "accessories",
    categoryLabel: "PC Accessories",
    price: 1799,
    rating: 4.7,
    reviewCount: 612,
    image: "https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "900x400mm cloth desk mat with stitched edges and grippy base.",
    description: [
      "A smooth, fast cloth surface tuned for both speed and control. Stitched edges prevent fraying and the non-slip rubber base stays put.",
    ],
    specs: [
      { label: "Size", value: "900 x 400 x 3 mm" },
      { label: "Surface", value: "Smooth-weave cloth" },
      { label: "Base", value: "Natural rubber" },
    ],
    highlights: ["Stitched edges", "Spill-resistant", "Washable"],
  },
  {
    id: 12,
    slug: "pulse-hub-7-in-1-usb-c",
    name: "Pulse Hub 7-in-1 USB-C Dock",
    brand: "Volt",
    category: "accessories",
    categoryLabel: "PC Accessories",
    price: 3499,
    rating: 4.5,
    reviewCount: 241,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "USB-C hub with HDMI 4K60, PD 100W, and SD/microSD.",
    description: [
      "Expand your laptop's I/O with HDMI 4K60, two USB-A 3.2, USB-C data, 100W power delivery, and SD/microSD card readers in a slim aluminum shell.",
    ],
    specs: [
      { label: "Ports", value: "HDMI, 2x USB-A, USB-C, SD, microSD" },
      { label: "Power delivery", value: "100W PD passthrough" },
      { label: "Video", value: "4K @ 60Hz" },
    ],
    highlights: ["Aluminum body", "Plug & play", "Cool-touch"],
  },
];

export const getProductById = (id: number | string) =>
  products.find((p) => p.id === Number(id));

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);