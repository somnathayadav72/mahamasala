export type Product = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  rating: string;
  reviewCount: string;
  price: string;
  originalPrice: string;
  discount: string;
  tags: string[];
  shortTags: string[];
  lovePoints: string[];
  description: string;
  botanicalName: string;
  processing: string;
  badge: string;
  breadcrumb: string;
  origin: string;
  shelfLife: string;
};

export const products: Product[] = [
  {
    id: "1",
    image: "/images/1.png",
    title: "Turmeric Powder",
    subtitle: "Haldi",
    rating: "4.8",
    reviewCount: "236 reviews",
    price: "₹149",
    originalPrice: "₹199",
    discount: "25% OFF",
    tags: ["Immunity", "Anti-Inflammatory", "Daily Use"],
    shortTags: ["Immunity", "Anti-Inflammatory"],
    lovePoints: [
      "Rich in Curcumin",
      "Enhances flavour and colour",
      "Sourced from trusted farms",
      "Freshly ground for maximum aroma",
    ],
    description:
      "Satyasee Turmeric Powder is made from high-quality turmeric (haldi) rhizomes, carefully selected, cleaned and ground to perfection to retain its natural colour, aroma and goodness.",
    botanicalName: "Curcuma Longa",
    processing: "Sun Dried & Ground",
    badge: "Best Seller",
    breadcrumb: "Turmeric Powder (Haldi)",
    origin: "India",
    shelfLife: "12 Months",
  },
  {
    id: "2",
    image: "/images/2.png",
    title: "Red Chilli Powder",
    subtitle: "Laal Mirch",
    rating: "4.7",
    reviewCount: "189 reviews",
    price: "₹149",
    originalPrice: "₹199",
    discount: "25% OFF",
    tags: ["Spicy", "Rich Colour", "Pure & Bold"],
    shortTags: ["Spicy", "Rich Colour"],
    lovePoints: [
      "Bold and fiery heat",
      "Deep red natural colour",
      "No artificial dyes",
      "Perfect for curries and marinades",
    ],
    description:
      "Satyasee Red Chilli Powder is crafted from handpicked Guntur red chillies, sun-dried and ground to deliver bold heat, vibrant colour and authentic flavour to every dish.",
    botanicalName: "Capsicum Annuum",
    processing: "Sun Dried & Ground",
    badge: "Best Seller",
    breadcrumb: "Red Chilli Powder (Laal Mirch)",
    origin: "India",
    shelfLife: "12 Months",
  },
  {
    id: "3",
    image: "/images/3.png",
    title: "Coriander Powder",
    subtitle: "Dhania",
    rating: "4.8",
    reviewCount: "198 reviews",
    price: "₹129",
    originalPrice: "₹169",
    discount: "24% OFF",
    tags: ["Aromatic", "Digestive", "Daily Use"],
    shortTags: ["Aromatic", "Digestive"],
    lovePoints: [
      "Earthy and aromatic flavour",
      "Aids digestion naturally",
      "Freshly roasted for depth",
      "Essential for Indian cooking",
    ],
    description:
      "Satyasee Coriander Powder is made from premium coriander seeds, roasted lightly and ground fresh to preserve its earthy aroma and subtle citrus notes that elevate any dish.",
    botanicalName: "Coriandrum Sativum",
    processing: "Roasted & Ground",
    badge: "Best Seller",
    breadcrumb: "Coriander Powder (Dhania)",
    origin: "India",
    shelfLife: "12 Months",
  },
  {
    id: "4",
    image: "/images/4.png",
    title: "Garam Masala",
    subtitle: "Signature Spice Blend",
    rating: "4.9",
    reviewCount: "312 reviews",
    price: "₹159",
    originalPrice: "₹209",
    discount: "24% OFF",
    tags: ["Aromatic", "Warmth", "Finishing Touch"],
    shortTags: ["Aromatic", "Warmth"],
    lovePoints: [
      "Complex warming flavour",
      "Perfect finishing spice",
      "Small-batch freshness",
      "Authentic family recipe",
    ],
    description:
      "Satyasee Garam Masala is a signature blend of whole spices — cinnamon, cardamom, cloves, black pepper and bay leaves — roasted and ground in small batches for an intense, warming aroma.",
    botanicalName: "Blend of Spices",
    processing: "Roasted & Blended",
    badge: "Best Seller",
    breadcrumb: "Garam Masala",
    origin: "India",
    shelfLife: "12 Months",
  },
  {
    id: "5",
    image: "/images/5.png",
    title: "Kitchen King Masala",
    subtitle: "All-in-One Spice Blend",
    rating: "4.7",
    reviewCount: "156 reviews",
    price: "₹159",
    originalPrice: "₹209",
    discount: "24% OFF",
    tags: ["Versatile", "Multi-Purpose", "Family Favourite"],
    shortTags: ["Versatile", "Multi-Purpose"],
    lovePoints: [
      "Works with any dish",
      "Balanced heat and flavour",
      "Saves time in kitchen",
      "Loved by home cooks",
    ],
    description:
      "Satyasee Kitchen King Masala is an all-in-one spice blend crafted for everyday Indian cooking. A balanced mix of coriander, cumin, turmeric, chilli and aromatic spices that works with any vegetable or dal.",
    botanicalName: "Spice Blend",
    processing: "Blended & Ground",
    badge: "Best Seller",
    breadcrumb: "Kitchen King Masala",
    origin: "India",
    shelfLife: "12 Months",
  },
  {
    id: "6",
    image: "/images/6.png",
    title: "Biryani Masala",
    subtitle: "Premium Aromatic Blend",
    rating: "4.9",
    reviewCount: "278 reviews",
    price: "₹169",
    originalPrice: "₹219",
    discount: "23% OFF",
    tags: ["Authentic", "Rich", "Restaurant Style"],
    shortTags: ["Authentic", "Restaurant Style"],
    lovePoints: [
      "Restaurant-quality biryani at home",
      "Rich aromatic depth",
      "Authentic Hyderabadi-style",
      "Premium whole spices used",
    ],
    description:
      "Satyasee Biryani Masala is a premium aromatic blend of star anise, mace, nutmeg, cardamom, cinnamon and saffron-infused spices designed to give your biryani that authentic restaurant-style depth and fragrance.",
    botanicalName: "Aromatic Spice Blend",
    processing: "Slow Roasted & Blended",
    badge: "Best Seller",
    breadcrumb: "Biryani Masala",
    origin: "India",
    shelfLife: "12 Months",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getAllProductIds(): string[] {
  return products.map((p) => p.id);
}
