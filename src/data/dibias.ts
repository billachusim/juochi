export type Category =
  | "Spiritual Cleansing"
  | "Love & Relationships"
  | "Business & Prosperity"
  | "Protection & Security"
  | "Fertility & Childbirth"
  | "Healing Herbs"
  | "Dream Interpretation"
  | "Ancestral Guidance";

export const ALL_CATEGORIES: Category[] = [
  "Spiritual Cleansing",
  "Love & Relationships",
  "Business & Prosperity",
  "Protection & Security",
  "Fertility & Childbirth",
  "Healing Herbs",
  "Dream Interpretation",
  "Ancestral Guidance",
];

export type Service = { name: string; price: number; duration: string };

export type Dibia = {
  id: string;
  name: string;
  title: string;
  location: string;
  specializations: Category[];
  bio: string;
  price: number; // session base price in NGN
  rating: number;
  reviews: number;
  experience: number;
  verified: boolean;
  services: Service[];
};

export const DIBIAS: Dibia[] = [
  {
    id: "eze-onyeka",
    name: "Eze Onyeka",
    title: "Eze Mmụọ of Nri",
    location: "Nri, Anambra",
    specializations: ["Spiritual Cleansing", "Ancestral Guidance"],
    bio: "A keeper of the old ways from the ancient kingdom of Nri. Eze Onyeka has guided seekers through cleansing rites and ancestral consultations for over thirty years.",
    price: 15000,
    rating: 4.9,
    reviews: 128,
    experience: 32,
    verified: true,
    services: [
      { name: "Spiritual Cleansing Ritual", price: 25000, duration: "90 min" },
      { name: "Ancestral Consultation", price: 15000, duration: "60 min" },
      { name: "Quick Reading", price: 5000, duration: "20 min" },
    ],
  },
  {
    id: "mama-ngozi",
    name: "Mama Ngozi",
    title: "Dibia Afa",
    location: "Awka, Anambra",
    specializations: ["Fertility & Childbirth", "Healing Herbs"],
    bio: "Beloved mother of the village. Mama Ngozi blends inherited herbal wisdom with prayer to support women through fertility, pregnancy, and childbirth.",
    price: 12000,
    rating: 4.8,
    reviews: 214,
    experience: 28,
    verified: true,
    services: [
      { name: "Fertility Consultation", price: 18000, duration: "75 min" },
      { name: "Herbal Preparation", price: 12000, duration: "45 min" },
      { name: "Pregnancy Blessing", price: 10000, duration: "30 min" },
    ],
  },
  {
    id: "dibia-okonkwo",
    name: "Dibia Okonkwo",
    title: "Onye Mmụọ",
    location: "Onitsha, Anambra",
    specializations: ["Business & Prosperity", "Protection & Security"],
    bio: "Trusted by traders across the Niger. Dibia Okonkwo opens roads for business, removes blockages, and shields his clients from envy and harm.",
    price: 20000,
    rating: 4.7,
    reviews: 96,
    experience: 22,
    verified: true,
    services: [
      { name: "Business Opening Rite", price: 35000, duration: "2 hours" },
      { name: "Protection Charm", price: 20000, duration: "60 min" },
      { name: "Prosperity Reading", price: 8000, duration: "30 min" },
    ],
  },
  {
    id: "lolo-adaeze",
    name: "Lolo Adaeze",
    title: "Onye Nkọwa Nrọ",
    location: "Enugu",
    specializations: ["Dream Interpretation", "Love & Relationships"],
    bio: "A gentle voice for matters of the heart and the night. Lolo Adaeze interprets dreams and helps mend, find, or release bonds of love.",
    price: 8000,
    rating: 4.9,
    reviews: 302,
    experience: 18,
    verified: true,
    services: [
      { name: "Dream Interpretation", price: 8000, duration: "45 min" },
      { name: "Love Reading", price: 12000, duration: "60 min" },
      { name: "Reunion Ritual", price: 25000, duration: "90 min" },
    ],
  },
  {
    id: "nze-ikenna",
    name: "Nze Ikenna",
    title: "Dibia Ọgwụ",
    location: "Nsukka, Enugu",
    specializations: ["Healing Herbs", "Spiritual Cleansing"],
    bio: "Master of the forest pharmacy. Nze Ikenna prepares herbal remedies for body and spirit, drawing from a lineage of healers seven generations deep.",
    price: 0,
    rating: 4.6,
    reviews: 74,
    experience: 25,
    verified: true,
    services: [
      { name: "Herbal Consultation (Free)", price: 0, duration: "30 min" },
      { name: "Custom Herbal Bath", price: 15000, duration: "60 min" },
      { name: "Long-term Healing Plan", price: 30000, duration: "2 hours" },
    ],
  },
  {
    id: "dibia-chiamaka",
    name: "Dibia Chiamaka",
    title: "Onye Ndụmọdụ",
    location: "Owerri, Imo",
    specializations: ["Protection & Security", "Ancestral Guidance", "Dream Interpretation"],
    bio: "Walks between worlds with calm and clarity. Dibia Chiamaka offers protection from spiritual attack and guidance from those who came before.",
    price: 10000,
    rating: 4.8,
    reviews: 156,
    experience: 20,
    verified: true,
    services: [
      { name: "Spiritual Protection Rite", price: 22000, duration: "90 min" },
      { name: "Ancestral Voice Session", price: 18000, duration: "75 min" },
      { name: "Dream Decoding", price: 10000, duration: "45 min" },
    ],
  },
];

export function naira(n: number): string {
  if (n === 0) return "Free";
  return "₦" + n.toLocaleString("en-NG");
}

export function getDibia(id: string): Dibia | undefined {
  return DIBIAS.find((d) => d.id === id);
}

// Keyword → category map for Chi
export const KEYWORD_MAP: { keywords: string[]; category: Category }[] = [
  { keywords: ["money", "business", "prosper", "trade", "shop", "wealth", "rich", "job", "work"], category: "Business & Prosperity" },
  { keywords: ["love", "marriage", "wife", "husband", "partner", "relationship", "heart", "ex"], category: "Love & Relationships" },
  { keywords: ["bad luck", "attack", "enemy", "curse", "evil", "misfortune", "blocked"], category: "Spiritual Cleansing" },
  { keywords: ["protect", "safety", "security", "harm", "shield", "danger"], category: "Protection & Security" },
  { keywords: ["pregnan", "child", "baby", "fertility", "womb", "conceive"], category: "Fertility & Childbirth" },
  { keywords: ["dream", "vision", "nightmare", "sleep"], category: "Dream Interpretation" },
  { keywords: ["sick", "herb", "heal", "pain", "fever", "body", "ill"], category: "Healing Herbs" },
  { keywords: ["ancestor", "father", "mother", "lineage", "guidance", "elder"], category: "Ancestral Guidance" },
];

export function detectCategories(text: string): Category[] {
  const t = text.toLowerCase();
  const found = new Set<Category>();
  for (const { keywords, category } of KEYWORD_MAP) {
    if (keywords.some((k) => t.includes(k))) found.add(category);
  }
  return Array.from(found);
}

export function dibiasByCategory(cats: Category[]): Dibia[] {
  if (cats.length === 0) return [];
  return DIBIAS.filter((d) => d.specializations.some((s) => cats.includes(s)));
}
