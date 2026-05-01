// Authentic Igbo Dibia specializations with English translations.
// Sources: Igbo ethnographic studies (Nri Afa system; Nsukka-Igbo dibia practice).

export type Category =
  | "Dibia Afa"
  | "Dibia Ọgwụ"
  | "Dibia Mgborogwu na Mkpa Akwụkwọ"
  | "Dibia Ọkpụkpụ"
  | "Dibia Mmụọ"
  | "Dibia Aja"
  | "Dibia Nrọ"
  | "Dibia Mmiri"
  | "Dibia Ọmụgwọ"
  | "Dibia Ifu Ụzọ"
  | "Dibia Akụ na Ụba"
  | "Dibia Ịhụnanya";

export type CategoryInfo = {
  id: Category;
  igbo: string;
  english: string;
  short: string; // short english tag
  desc: string;
  icon: string;
};

export const CATEGORY_INFO: CategoryInfo[] = [
  {
    id: "Dibia Afa",
    igbo: "Dibịa Afa",
    english: "Diviner / Seer",
    short: "Divination",
    desc: "Reads the cowries, the kola, and the chalk. Sees what the eye cannot.",
    icon: "🔮",
  },
  {
    id: "Dibia Ọgwụ",
    igbo: "Dibịa Ọgwụ",
    english: "Spiritual Medicine",
    short: "Spiritual Medicine",
    desc: "Prepares ọgwụ — protective and curative spiritual medicine.",
    icon: "🕯️",
  },
  {
    id: "Dibia Mgborogwu na Mkpa Akwụkwọ",
    igbo: "Dibịa Mgborogwu na Mkpa Akwụkwọ",
    english: "Herbalist (Roots & Leaves)",
    short: "Herbalist",
    desc: "Master of roots and leaves. Heals the body with the green pharmacy of the forest.",
    icon: "🌿",
  },
  {
    id: "Dibia Ọkpụkpụ",
    igbo: "Dibịa Ọkpụkpụ",
    english: "Bone Setter",
    short: "Bone Doctor",
    desc: "Mends broken bones, dislocations, and wounded joints with skill passed down generations.",
    icon: "🦴",
  },
  {
    id: "Dibia Mmụọ",
    igbo: "Dibịa Mmụọ",
    english: "Spirit Medium / Cleanser",
    short: "Spirit & Cleansing",
    desc: "Walks between worlds. Lifts curses, cleanses, and quiets restless spirits.",
    icon: "👁️",
  },
  {
    id: "Dibia Aja",
    igbo: "Dibịa Aja",
    english: "Sacrifice & Ritual Priest",
    short: "Ritual & Sacrifice",
    desc: "Performs aja (sacrifice) to appease deities and restore balance with the land.",
    icon: "🔥",
  },
  {
    id: "Dibia Nrọ",
    igbo: "Dibịa Nrọ",
    english: "Dream Interpreter",
    short: "Dream Interpretation",
    desc: "Translates the messages your spirit receives at night.",
    icon: "🌙",
  },
  {
    id: "Dibia Mmiri",
    igbo: "Dibịa Mmiri",
    english: "Water Spirit Priest",
    short: "Water Spirits",
    desc: "Serves the water deities — for cleansing, fertility, and restoration of fortune.",
    icon: "🌊",
  },
  {
    id: "Dibia Ọmụgwọ",
    igbo: "Dibịa Ọmụgwọ",
    english: "Fertility & Childbirth",
    short: "Fertility & Childbirth",
    desc: "Guides women through fertility, pregnancy, safe delivery, and post-birth care.",
    icon: "🌱",
  },
  {
    id: "Dibia Ifu Ụzọ",
    igbo: "Dibịa Ifu Ụzọ",
    english: "Path-Opener / Protector",
    short: "Protection & Path",
    desc: "Opens blocked roads in life. Shields you from harm, envy, and spiritual attack.",
    icon: "🛡️",
  },
  {
    id: "Dibia Akụ na Ụba",
    igbo: "Dibịa Akụ na Ụba",
    english: "Wealth & Prosperity",
    short: "Wealth & Business",
    desc: "Opens doors of trade, business, and lasting prosperity.",
    icon: "💰",
  },
  {
    id: "Dibia Ịhụnanya",
    igbo: "Dibịa Ịhụnanya",
    english: "Love & Relationships",
    short: "Love & Marriage",
    desc: "For matters of the heart — finding, mending, or releasing bonds of love.",
    icon: "❤️‍🔥",
  },
];

export const ALL_CATEGORIES: Category[] = CATEGORY_INFO.map((c) => c.id);

export function categoryInfo(c: Category): CategoryInfo {
  return CATEGORY_INFO.find((x) => x.id === c)!;
}

// Pretty label, e.g. "Dibịa Mgborogwu (Herbalist)"
export function categoryLabel(c: Category): string {
  const info = categoryInfo(c);
  return `${info.igbo} (${info.english})`;
}

export type Service = { name: string; price: number; duration: string };

export type Dibia = {
  id: string;
  name: string;
  title: string;
  location: string;
  specializations: Category[];
  bio: string;
  price: number;
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
    title: "Dibịa Afa of Nri",
    location: "Nri, Anambra",
    specializations: ["Dibia Afa", "Dibia Aja"],
    bio: "A keeper of the old ways from the ancient kingdom of Nri. Eze Onyeka reads the Afa with cowries and kola, then performs the proper aja (sacrifice) to set things right.",
    price: 15000,
    rating: 4.9,
    reviews: 128,
    experience: 32,
    verified: true,
    services: [
      { name: "Afa Divination Reading", price: 15000, duration: "60 min" },
      { name: "Aja (Sacrificial Rite)", price: 35000, duration: "2 hours" },
      { name: "Quick Cowrie Reading", price: 5000, duration: "20 min" },
    ],
  },
  {
    id: "mama-ngozi",
    name: "Mama Ngozi",
    title: "Dibịa Ọmụgwọ",
    location: "Awka, Anambra",
    specializations: ["Dibia Ọmụgwọ", "Dibia Mgborogwu na Mkpa Akwụkwọ"],
    bio: "Beloved mother of the village. Mama Ngozi blends inherited herbal wisdom with prayer to support women through fertility, pregnancy, and childbirth.",
    price: 12000,
    rating: 4.8,
    reviews: 214,
    experience: 28,
    verified: true,
    services: [
      { name: "Fertility Consultation", price: 18000, duration: "75 min" },
      { name: "Herbal Preparation (Mgborogwu)", price: 12000, duration: "45 min" },
      { name: "Pregnancy Blessing", price: 10000, duration: "30 min" },
    ],
  },
  {
    id: "dibia-okonkwo",
    name: "Dibịa Okonkwo",
    title: "Dibịa Akụ na Ụba",
    location: "Onitsha, Anambra",
    specializations: ["Dibia Akụ na Ụba", "Dibia Ifu Ụzọ"],
    bio: "Trusted by traders across the Niger. Dibịa Okonkwo opens roads for business, removes blockages, and shields his clients from envy and harm.",
    price: 20000,
    rating: 4.7,
    reviews: 96,
    experience: 22,
    verified: true,
    services: [
      { name: "Business Opening Rite", price: 35000, duration: "2 hours" },
      { name: "Path-Opening Ritual", price: 20000, duration: "60 min" },
      { name: "Prosperity Reading", price: 8000, duration: "30 min" },
    ],
  },
  {
    id: "lolo-adaeze",
    name: "Lolo Adaeze",
    title: "Dibịa Nrọ na Ịhụnanya",
    location: "Enugu",
    specializations: ["Dibia Nrọ", "Dibia Ịhụnanya"],
    bio: "A gentle voice for matters of the heart and the night. Lolo Adaeze interprets dreams and helps mend, find, or release bonds of love.",
    price: 8000,
    rating: 4.9,
    reviews: 302,
    experience: 18,
    verified: true,
    services: [
      { name: "Dream Interpretation (Nkọwa Nrọ)", price: 8000, duration: "45 min" },
      { name: "Love Reading", price: 12000, duration: "60 min" },
      { name: "Reunion Ritual", price: 25000, duration: "90 min" },
    ],
  },
  {
    id: "nze-ikenna",
    name: "Nze Ikenna",
    title: "Dibịa Ọkpụkpụ",
    location: "Nsukka, Enugu",
    specializations: ["Dibia Ọkpụkpụ", "Dibia Mgborogwu na Mkpa Akwụkwọ"],
    bio: "Master of bones and the forest pharmacy. Nze Ikenna sets fractures, treats dislocations, and prepares herbal remedies for body and spirit — drawing from a lineage of healers seven generations deep.",
    price: 0,
    rating: 4.6,
    reviews: 74,
    experience: 25,
    verified: true,
    services: [
      { name: "Bone Assessment (Free)", price: 0, duration: "30 min" },
      { name: "Bone Setting Treatment", price: 25000, duration: "90 min" },
      { name: "Custom Herbal Preparation", price: 15000, duration: "60 min" },
    ],
  },
  {
    id: "dibia-chiamaka",
    name: "Dibịa Chiamaka",
    title: "Dibịa Mmụọ",
    location: "Owerri, Imo",
    specializations: ["Dibia Mmụọ", "Dibia Ifu Ụzọ", "Dibia Mmiri"],
    bio: "Walks between worlds with calm and clarity. Dibịa Chiamaka offers cleansing from spiritual attack, summons the water spirits when needed, and opens what has been closed.",
    price: 10000,
    rating: 4.8,
    reviews: 156,
    experience: 20,
    verified: true,
    services: [
      { name: "Spiritual Cleansing Rite", price: 22000, duration: "90 min" },
      { name: "Water Spirit Bath (Mmiri)", price: 18000, duration: "75 min" },
      { name: "Protection Charm", price: 10000, duration: "45 min" },
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

// Keyword → category map for Chi (Igbo + English)
export const KEYWORD_MAP: { keywords: string[]; category: Category }[] = [
  { keywords: ["money", "business", "trade", "shop", "wealth", "rich", "job", "work", "akụ", "uba", "aku"], category: "Dibia Akụ na Ụba" },
  { keywords: ["love", "marriage", "wife", "husband", "partner", "relationship", "heart", "ex", "ihunanya"], category: "Dibia Ịhụnanya" },
  { keywords: ["bad luck", "curse", "evil", "misfortune", "blocked", "attack", "enemy", "mmụọ", "mmuo"], category: "Dibia Mmụọ" },
  { keywords: ["protect", "safety", "security", "harm", "shield", "danger", "block", "ụzọ", "uzo", "path"], category: "Dibia Ifu Ụzọ" },
  { keywords: ["pregnan", "child", "baby", "fertility", "womb", "conceive", "ọmụgwọ", "omugwo"], category: "Dibia Ọmụgwọ" },
  { keywords: ["dream", "vision", "nightmare", "sleep", "nrọ", "nro"], category: "Dibia Nrọ" },
  { keywords: ["sick", "herb", "heal", "pain", "fever", "body", "ill", "leaf", "root", "ogwu", "ọgwụ", "mgborogwu"], category: "Dibia Mgborogwu na Mkpa Akwụkwọ" },
  { keywords: ["bone", "fracture", "broken", "joint", "dislocate", "ọkpụkpụ", "okpukpu"], category: "Dibia Ọkpụkpụ" },
  { keywords: ["ancestor", "father", "mother", "lineage", "guidance", "elder", "afa", "divin", "see", "reading"], category: "Dibia Afa" },
  { keywords: ["sacrifice", "ritual", "offering", "aja", "deity", "appease"], category: "Dibia Aja" },
  { keywords: ["water", "river", "mami", "mmiri", "stream"], category: "Dibia Mmiri" },
  { keywords: ["medicine", "spiritual", "charm", "ọgwụ"], category: "Dibia Ọgwụ" },
];

export function detectCategories(text: string): Category[] {
  const t = text.toLowerCase();
  const found = new Set<Category>();
  for (const { keywords, category } of KEYWORD_MAP) {
    if (keywords.some((k) => t.includes(k.toLowerCase()))) found.add(category);
  }
  return Array.from(found);
}

export function dibiasByCategory(cats: Category[]): Dibia[] {
  if (cats.length === 0) return [];
  return DIBIAS.filter((d) => d.specializations.some((s) => cats.includes(s)));
}
