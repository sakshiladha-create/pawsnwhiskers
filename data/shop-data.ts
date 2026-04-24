export type ShopCategorySlug = "cat-essentials" | "dog-essentials";

export type ProductType = "Food" | "Toys" | "Beds" | "Accessories" | "Health" | "Grooming";

export type ShopCollection = {
  id: string;
  categorySlug: ShopCategorySlug;
  categoryTitle: string;
  subcategorySlug: string;
  title: string;
  description: string;
  productCount: number;
  image: string;
  alt: string;
};

export type ShopProduct = {
  id: string;
  slug: string;
  name: string;
  sku: string;
  price: number;
  salePrice?: number | null;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  bestSeller?: boolean;
  productType: ProductType;
  categorySlug: ShopCategorySlug;
  categoryTitle: string;
  subcategorySlug: string;
  subcategoryTitle: string;
  shortDescription: string;
  description: string;
  additionalInfo: Array<{ label: string; value: string }>;
  tags: string[];
  image: string;
  alt: string;
  gallery: string[];
  relatedSlugs: string[];
};

export const shopCategories = [
  {
    slug: "cat-essentials" as const,
    title: "Cat Essentials",
    subcategories: [
      "Cat Treats & Chews",
      "Cat Food",
      "Cat Toys",
      "Cat Beds",
      "Cat Supplies",
      "Health and Wellness",
      "Flea & Ticks"
    ]
  },
  {
    slug: "dog-essentials" as const,
    title: "Dog Essentials",
    subcategories: [
      "Dog Treats & Chews",
      "Dog Food",
      "Dog Toys",
      "Dog Beds",
      "Dog Supplies",
      "Health and Wellness",
      "Flea & Ticks"
    ]
  }
];

export const collections: ShopCollection[] = [
  {
    id: "cat-treats-chews",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-treats-chews",
    title: "Cat Treats & Chews",
    description: "Reward-worthy crunchy bites and gentle chewables for curious cats.",
    productCount: 2,
    image: "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat enjoying food"
  },
  {
    id: "cat-food",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-food",
    title: "Cat Food",
    description: "Premium meals for shiny coats, sensitive stomachs, and happy routines.",
    productCount: 2,
    image: "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat near a food bowl"
  },
  {
    id: "cat-toys",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-toys",
    title: "Cat Toys",
    description: "Interactive play pieces that keep indoor cats active and engaged.",
    productCount: 2,
    image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Playful kitten"
  },
  {
    id: "cat-beds",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-beds",
    title: "Cat Beds",
    description: "Rounded nests and elevated loungers for serious cat naps.",
    productCount: 2,
    image: "https://images.pexels.com/photos/7516508/pexels-photo-7516508.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat lounging on a bed"
  },
  {
    id: "cat-supplies",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-supplies",
    title: "Cat Supplies",
    description: "Litter, bowls, carriers, and stylish daily essentials for home life.",
    productCount: 2,
    image: "https://images.pexels.com/photos/6958160/pexels-photo-6958160.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Modern cat furniture"
  },
  {
    id: "cat-health-and-wellness",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "health-and-wellness",
    title: "Health and Wellness",
    description: "Gentle wellness picks for coats, digestion, and calm everyday care.",
    productCount: 2,
    image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Healthy cat resting"
  },
  {
    id: "cat-flea-ticks",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "flea-ticks",
    title: "Flea & Ticks",
    description: "Protection solutions for clean coats and more confident cuddle time.",
    productCount: 1,
    image: "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat portrait"
  },
  {
    id: "dog-treats-chews",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-treats-chews",
    title: "Dog Treats & Chews",
    description: "Crunchy biscuits and chewy rewards for walks, training, and tail wags.",
    productCount: 2,
    image: "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog portrait"
  },
  {
    id: "dog-food",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-food",
    title: "Dog Food",
    description: "Balanced bowls for puppies, adults, and sensitive tummies.",
    productCount: 2,
    image: "https://images.pexels.com/photos/5732478/pexels-photo-5732478.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog beside feeder"
  },
  {
    id: "dog-toys",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-toys",
    title: "Dog Toys",
    description: "Fetch, tug, chew, and enrichment favorites for active pups.",
    productCount: 2,
    image: "https://images.pexels.com/photos/6568944/pexels-photo-6568944.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog toy setup"
  },
  {
    id: "dog-beds",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-beds",
    title: "Dog Beds",
    description: "Supportive beds with plush finishes for better naps and calmer nights.",
    productCount: 2,
    image: "https://images.pexels.com/photos/4588001/pexels-photo-4588001.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog resting on bed"
  },
  {
    id: "dog-supplies",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-supplies",
    title: "Dog Supplies",
    description: "Collars, carriers, pads, and useful daily pieces for every routine.",
    productCount: 2,
    image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog ready for travel"
  },
  {
    id: "dog-health-and-wellness",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "health-and-wellness",
    title: "Health and Wellness",
    description: "Grooming, brushing, and wellness helpers for everyday care.",
    productCount: 2,
    image: "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Healthy dog"
  },
  {
    id: "dog-flea-ticks",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "flea-ticks",
    title: "Flea & Ticks",
    description: "Protection collars and care kits for cleaner coats and outdoor confidence.",
    productCount: 1,
    image: "https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog in pink sweater"
  }
];

export const products: ShopProduct[] = [
  {
    id: "p1",
    slug: "airline-travel-crate-carrier",
    name: "Airline Travel Crate Carrier",
    sku: "PW-TRAVEL-102",
    price: 129,
    salePrice: 109,
    rating: 4.8,
    reviewCount: 86,
    inStock: true,
    bestSeller: true,
    productType: "Accessories",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-supplies",
    subcategoryTitle: "Dog Supplies",
    shortDescription: "Ventilated, comfortable, and carry-on friendly for small pets.",
    description:
      "A premium airline-ready carrier with breathable side panels, soft bedding insert, reinforced handles, and a streamlined silhouette for calm, practical travel.",
    additionalInfo: [
      { label: "Material", value: "Polyester shell with breathable mesh" },
      { label: "Dimensions", value: "18 x 11 x 11 in" },
      { label: "Best for", value: "Small dogs and cats" }
    ],
    tags: ["travel", "carrier", "airline"],
    image: "https://images.pexels.com/photos/6816865/pexels-photo-6816865.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Pet carrier in a stylish home setting",
    gallery: [
      "https://images.pexels.com/photos/6816865/pexels-photo-6816865.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["buckled-polyester-dog-belt", "puppy-training-pads", "cloud-nest-dog-bed"]
  },
  {
    id: "p2",
    slug: "baked-oat-chicken-puppy-biscuits",
    name: "Baked Oat & Chicken Puppy Biscuits",
    sku: "PW-TREAT-210",
    price: 18,
    salePrice: 15,
    rating: 4.9,
    reviewCount: 142,
    inStock: true,
    productType: "Food",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-treats-chews",
    subcategoryTitle: "Dog Treats & Chews",
    shortDescription: "Training-friendly crunchy treats with simple ingredients.",
    description:
      "Oven-baked biscuits made with oat flour and chicken for a satisfying crunch. Sized for training sessions and everyday rewards.",
    additionalInfo: [
      { label: "Weight", value: "10 oz bag" },
      { label: "Protein", value: "Chicken" },
      { label: "Suitable for", value: "Puppies 3 months+" }
    ],
    tags: ["treats", "training", "puppy"],
    image: "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Puppy treat product",
    gallery: [
      "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["organic-dog-treats", "butterscotch-pet-food", "rope-fetch-toy-set"]
  },
  {
    id: "p3",
    slug: "buckled-polyester-dog-belt",
    name: "Buckled Polyester Dog Belt",
    sku: "PW-WALK-144",
    price: 24,
    rating: 4.6,
    reviewCount: 61,
    inStock: true,
    isNew: true,
    productType: "Accessories",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-supplies",
    subcategoryTitle: "Dog Supplies",
    shortDescription: "Lightweight walking belt with durable buckle and soft lining.",
    description:
      "A polished everyday walking belt built for comfortable wear, secure adjustment, and easy attachment to leads or accessory loops.",
    additionalInfo: [
      { label: "Material", value: "Polyester webbing" },
      { label: "Sizes", value: "S, M, L" },
      { label: "Use", value: "Walks and training" }
    ],
    tags: ["belt", "walking", "accessory"],
    image: "https://images.pexels.com/photos/6568484/pexels-photo-6568484.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog accessory lifestyle image",
    gallery: [
      "https://images.pexels.com/photos/6568484/pexels-photo-6568484.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6568492/pexels-photo-6568492.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/23849247/pexels-photo-23849247.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["airline-travel-crate-carrier", "puppy-training-pads", "gentle-dog-grooming-brush"]
  },
  {
    id: "p4",
    slug: "butterscotch-pet-food",
    name: "Butterscotch Pet Food",
    sku: "PW-FOOD-310",
    price: 32,
    salePrice: 28,
    rating: 4.7,
    reviewCount: 94,
    inStock: true,
    productType: "Food",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-food",
    subcategoryTitle: "Dog Food",
    shortDescription: "A balanced dry food blend with digestive support and rich flavor.",
    description:
      "A premium everyday kibble crafted for active adult dogs with digestible grains, protein-forward nutrition, and a crunchy texture dogs love.",
    additionalInfo: [
      { label: "Weight", value: "5 lb bag" },
      { label: "Life stage", value: "Adult dogs" },
      { label: "Texture", value: "Dry kibble" }
    ],
    tags: ["kibble", "dog food", "adult"],
    image: "https://images.pexels.com/photos/5732478/pexels-photo-5732478.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog food and feeder image",
    gallery: [
      "https://images.pexels.com/photos/5732478/pexels-photo-5732478.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4588069/pexels-photo-4588069.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["organic-dog-treats", "baked-oat-chicken-puppy-biscuits", "flea-tick-protection-collar"]
  },
  {
    id: "p5",
    slug: "tuna-salmon-flavoured-food",
    name: "Tuna & Salmon Flavoured Food",
    sku: "PW-CAT-330",
    price: 26,
    rating: 4.8,
    reviewCount: 133,
    inStock: true,
    productType: "Food",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-food",
    subcategoryTitle: "Cat Food",
    shortDescription: "Protein-rich cat food with ocean flavors and balanced nutrition.",
    description:
      "A flavorful everyday cat food made with tuna and salmon notes for cats who prefer richer bowls and a satisfying crunch.",
    additionalInfo: [
      { label: "Weight", value: "4 lb bag" },
      { label: "Flavor", value: "Tuna & salmon" },
      { label: "Life stage", value: "Adult cats" }
    ],
    tags: ["cat food", "salmon", "tuna"],
    image: "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat near bowl of food",
    gallery: [
      "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["premium-dry-cat-food", "interactive-cat-toy-wand", "soft-plush-cat-bed"]
  },
  {
    id: "p6",
    slug: "soft-plush-cat-bed",
    name: "Soft Plush Cat Bed",
    sku: "PW-BED-415",
    price: 49,
    salePrice: 39,
    rating: 4.9,
    reviewCount: 118,
    inStock: true,
    bestSeller: true,
    productType: "Beds",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-beds",
    subcategoryTitle: "Cat Beds",
    shortDescription: "Deep-cushion cat bed with plush walls and washable cover.",
    description:
      "Designed for tucked-in naps and all-day lounging, this plush cat bed pairs soft structure with a washable cover and calm neutral color palette.",
    additionalInfo: [
      { label: "Material", value: "Poly plush + recycled fill" },
      { label: "Size", value: "21 in diameter" },
      { label: "Care", value: "Removable washable cover" }
    ],
    tags: ["cat bed", "plush", "sleep"],
    image: "https://images.pexels.com/photos/7516508/pexels-photo-7516508.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat lounging on bed",
    gallery: [
      "https://images.pexels.com/photos/7516508/pexels-photo-7516508.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6958160/pexels-photo-6958160.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["premium-dry-cat-food", "interactive-cat-toy-wand", "litter-lounge-supply-kit"]
  },
  {
    id: "p7",
    slug: "interactive-cat-toy-wand",
    name: "Interactive Cat Toy Wand",
    sku: "PW-TOY-520",
    price: 16,
    rating: 4.7,
    reviewCount: 91,
    inStock: true,
    productType: "Toys",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-toys",
    subcategoryTitle: "Cat Toys",
    shortDescription: "Feather-and-string wand for fast chase play and indoor enrichment.",
    description:
      "A flexible cat wand with lightweight feather lure and textured handle to make indoor play sessions more active and rewarding.",
    additionalInfo: [
      { label: "Material", value: "Natural feather, nylon string" },
      { label: "Length", value: "24 in wand" },
      { label: "Use", value: "Supervised play" }
    ],
    tags: ["cat toy", "wand", "play"],
    image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Kitten with playful expression",
    gallery: [
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["soft-plush-cat-bed", "salmon-crunch-cat-treats", "premium-dry-cat-food"]
  },
  {
    id: "p8",
    slug: "gentle-dog-grooming-brush",
    name: "Gentle Dog Grooming Brush",
    sku: "PW-GROOM-602",
    price: 22,
    rating: 4.6,
    reviewCount: 73,
    inStock: true,
    productType: "Grooming",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "health-and-wellness",
    subcategoryTitle: "Health and Wellness",
    shortDescription: "Soft-pin grooming brush for daily coat care and less loose fur.",
    description:
      "A comfortable grooming brush with flexible pins and ergonomic handle for steady brushing sessions and neater coats.",
    additionalInfo: [
      { label: "Handle", value: "Soft touch grip" },
      { label: "Best for", value: "Short and medium coats" },
      { label: "Care", value: "Wipe clean after use" }
    ],
    tags: ["grooming", "brush", "coat care"],
    image: "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Healthy dog portrait",
    gallery: [
      "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6568484/pexels-photo-6568484.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/23849247/pexels-photo-23849247.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["flea-tick-protection-collar", "butterscotch-pet-food", "cloud-nest-dog-bed"]
  },
  {
    id: "p9",
    slug: "flea-tick-protection-collar",
    name: "Flea & Tick Protection Collar",
    sku: "PW-CARE-640",
    price: 34,
    rating: 4.5,
    reviewCount: 57,
    inStock: true,
    productType: "Health",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "flea-ticks",
    subcategoryTitle: "Flea & Ticks",
    shortDescription: "Adjustable protection collar for everyday outdoor peace of mind.",
    description:
      "A lightweight collar with a low-profile fit designed for everyday wear and seasonal protection support during walks and outdoor play.",
    additionalInfo: [
      { label: "Length", value: "Up to 26 in" },
      { label: "Use", value: "Seasonal protection" },
      { label: "Water resistance", value: "Splash resistant" }
    ],
    tags: ["collar", "flea", "tick"],
    image: "https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog in sweater portrait",
    gallery: [
      "https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6568492/pexels-photo-6568492.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["gentle-dog-grooming-brush", "butterscotch-pet-food", "rope-fetch-toy-set"]
  },
  {
    id: "p10",
    slug: "premium-dry-cat-food",
    name: "Premium Dry Cat Food",
    sku: "PW-CAT-341",
    price: 29,
    salePrice: 25,
    rating: 4.9,
    reviewCount: 165,
    inStock: true,
    productType: "Food",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-food",
    subcategoryTitle: "Cat Food",
    shortDescription: "Balanced dry blend with protein-rich bites and coat support.",
    description:
      "A premium dry cat food designed for everyday feeding with crunchy texture, protein-first ingredients, and support for healthy coat shine.",
    additionalInfo: [
      { label: "Weight", value: "4.5 lb bag" },
      { label: "Life stage", value: "Adult cats" },
      { label: "Texture", value: "Dry kibble" }
    ],
    tags: ["dry food", "cat", "daily nutrition"],
    image: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat close-up portrait",
    gallery: [
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["tuna-salmon-flavoured-food", "soft-plush-cat-bed", "interactive-cat-toy-wand"]
  },
  {
    id: "p11",
    slug: "puppy-training-pads",
    name: "Puppy Training Pads",
    sku: "PW-HOME-702",
    price: 21,
    rating: 4.5,
    reviewCount: 49,
    inStock: false,
    productType: "Accessories",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-supplies",
    subcategoryTitle: "Dog Supplies",
    shortDescription: "Quick-absorb pads for training days and cleaner floors.",
    description:
      "Multi-layer puppy pads built to absorb quickly, reduce tracking, and make early training routines easier to manage.",
    additionalInfo: [
      { label: "Count", value: "40 pads" },
      { label: "Absorbency", value: "Multi-layer leak lock" },
      { label: "Use", value: "Indoor training" }
    ],
    tags: ["training", "pads", "puppy"],
    image: "https://images.pexels.com/photos/4588069/pexels-photo-4588069.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dogs resting indoors",
    gallery: [
      "https://images.pexels.com/photos/4588069/pexels-photo-4588069.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6568484/pexels-photo-6568484.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5732478/pexels-photo-5732478.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["airline-travel-crate-carrier", "buckled-polyester-dog-belt", "cloud-nest-dog-bed"]
  },
  {
    id: "p12",
    slug: "organic-dog-treats",
    name: "Organic Dog Treats",
    sku: "PW-TREAT-222",
    price: 17,
    rating: 4.8,
    reviewCount: 104,
    inStock: true,
    productType: "Food",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-treats-chews",
    subcategoryTitle: "Dog Treats & Chews",
    shortDescription: "Soft-bake organic rewards for training and travel.",
    description:
      "Soft-baked dog treats made with organic ingredients and a chewy texture that works well for training, travel, and repeat rewards.",
    additionalInfo: [
      { label: "Weight", value: "8 oz bag" },
      { label: "Texture", value: "Soft-baked" },
      { label: "Ingredients", value: "Organic oats and chicken" }
    ],
    tags: ["dog treats", "organic", "soft bake"],
    image: "https://images.pexels.com/photos/6568492/pexels-photo-6568492.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Happy dog close-up",
    gallery: [
      "https://images.pexels.com/photos/6568492/pexels-photo-6568492.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["baked-oat-chicken-puppy-biscuits", "butterscotch-pet-food", "rope-fetch-toy-set"]
  },
  {
    id: "p13",
    slug: "salmon-crunch-cat-treats",
    name: "Salmon Crunch Cat Treats",
    sku: "PW-CAT-420",
    price: 13,
    salePrice: 11,
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    productType: "Food",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-treats-chews",
    subcategoryTitle: "Cat Treats & Chews",
    shortDescription: "Crunchy salmon bites with a satisfying texture cats love.",
    description:
      "Mini crunchy treats with salmon flavor, sized for reward moments and formulated for daily treat routines.",
    additionalInfo: [
      { label: "Weight", value: "4 oz pouch" },
      { label: "Flavor", value: "Salmon" },
      { label: "Texture", value: "Crunchy" }
    ],
    tags: ["cat treats", "salmon", "crunchy"],
    image: "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat near food bowl",
    gallery: [
      "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["premium-dry-cat-food", "interactive-cat-toy-wand", "soft-plush-cat-bed"]
  },
  {
    id: "p14",
    slug: "litter-lounge-supply-kit",
    name: "Litter Lounge Supply Kit",
    sku: "PW-CAT-780",
    price: 39,
    rating: 4.4,
    reviewCount: 41,
    inStock: true,
    productType: "Accessories",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "cat-supplies",
    subcategoryTitle: "Cat Supplies",
    shortDescription: "Everyday cat home essentials in one polished starter set.",
    description:
      "A practical home set featuring scoop, mat, bowl, and tidy-up accessories designed to keep cat corners neat and simple.",
    additionalInfo: [
      { label: "Pieces", value: "4-piece set" },
      { label: "Includes", value: "Scoop, mat, bowl, tidy caddy" },
      { label: "Best for", value: "Daily home routines" }
    ],
    tags: ["cat supplies", "starter set", "home"],
    image: "https://images.pexels.com/photos/6958160/pexels-photo-6958160.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Modern cat furniture setup",
    gallery: [
      "https://images.pexels.com/photos/6958160/pexels-photo-6958160.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7516508/pexels-photo-7516508.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["soft-plush-cat-bed", "premium-dry-cat-food", "feline-flea-tick-drops"]
  },
  {
    id: "p15",
    slug: "feline-flea-tick-drops",
    name: "Feline Flea & Tick Drops",
    sku: "PW-CAT-812",
    price: 31,
    rating: 4.5,
    reviewCount: 36,
    inStock: true,
    productType: "Health",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "flea-ticks",
    subcategoryTitle: "Flea & Ticks",
    shortDescription: "Monthly topical support for indoor-outdoor cats.",
    description:
      "A simple monthly drop treatment format for cat households looking for easy seasonal coat care and protection support.",
    additionalInfo: [
      { label: "Format", value: "Monthly topical drops" },
      { label: "Suitable for", value: "Adult cats" },
      { label: "Pack size", value: "3-month supply" }
    ],
    tags: ["flea", "tick", "cat care"],
    image: "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat looking upward",
    gallery: [
      "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["litter-lounge-supply-kit", "premium-dry-cat-food", "salmon-crunch-cat-treats"]
  },
  {
    id: "p16",
    slug: "calming-cat-wellness-bites",
    name: "Calming Cat Wellness Bites",
    sku: "PW-CAT-650",
    price: 23,
    rating: 4.6,
    reviewCount: 54,
    inStock: true,
    productType: "Health",
    categorySlug: "cat-essentials",
    categoryTitle: "Cat Essentials",
    subcategorySlug: "health-and-wellness",
    subcategoryTitle: "Health and Wellness",
    shortDescription: "Soft wellness bites for calmer travel and daily transitions.",
    description:
      "Soft chewable wellness bites formulated for calming support during travel, guests, grooming days, or routine changes.",
    additionalInfo: [
      { label: "Form", value: "Soft bites" },
      { label: "Use", value: "Calming support" },
      { label: "Pack", value: "60 bites" }
    ],
    tags: ["calming", "wellness", "cat"],
    image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cat with calm expression",
    gallery: [
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["premium-dry-cat-food", "feline-flea-tick-drops", "soft-plush-cat-bed"]
  },
  {
    id: "p17",
    slug: "rope-fetch-toy-set",
    name: "Rope Fetch Toy Set",
    sku: "PW-DOG-530",
    price: 19,
    rating: 4.7,
    reviewCount: 78,
    inStock: true,
    productType: "Toys",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-toys",
    subcategoryTitle: "Dog Toys",
    shortDescription: "A tug-and-fetch set in cheerful tones for playful afternoons.",
    description:
      "A durable rope toy bundle made for fetch, tug, and supervised chew time with soft-finished knots and playful color accents.",
    additionalInfo: [
      { label: "Pieces", value: "3 toys" },
      { label: "Material", value: "Cotton rope blend" },
      { label: "Best for", value: "Small to medium dogs" }
    ],
    tags: ["toy", "fetch", "rope"],
    image: "https://images.pexels.com/photos/6568944/pexels-photo-6568944.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog toy product image",
    gallery: [
      "https://images.pexels.com/photos/6568944/pexels-photo-6568944.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4588069/pexels-photo-4588069.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["organic-dog-treats", "cloud-nest-dog-bed", "flea-tick-protection-collar"]
  },
  {
    id: "p18",
    slug: "cloud-nest-dog-bed",
    name: "Cloud Nest Dog Bed",
    sku: "PW-BED-418",
    price: 59,
    salePrice: 49,
    rating: 4.9,
    reviewCount: 111,
    inStock: true,
    bestSeller: true,
    productType: "Beds",
    categorySlug: "dog-essentials",
    categoryTitle: "Dog Essentials",
    subcategorySlug: "dog-beds",
    subcategoryTitle: "Dog Beds",
    shortDescription: "Supportive plush bed with bolstered sides and washable cover.",
    description:
      "A premium dog bed made for daily lounging with supportive edges, cozy fill, and a removable cover that keeps cleanup easy.",
    additionalInfo: [
      { label: "Material", value: "Plush cover and recycled fill" },
      { label: "Sizes", value: "M, L" },
      { label: "Care", value: "Removable washable cover" }
    ],
    tags: ["dog bed", "plush", "sleep"],
    image: "https://images.pexels.com/photos/4588001/pexels-photo-4588001.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Dog resting on plush bed",
    gallery: [
      "https://images.pexels.com/photos/4588001/pexels-photo-4588001.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4588069/pexels-photo-4588069.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5732478/pexels-photo-5732478.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    relatedSlugs: ["rope-fetch-toy-set", "butterscotch-pet-food", "airline-travel-crate-carrier"]
  }
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "best-rated", label: "Best Rated" }
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

export function getDisplayPrice(product: ShopProduct) {
  return product.salePrice ?? product.price;
}

export function getCollection(categorySlug: string, subcategorySlug: string) {
  return collections.find((collection) => collection.categorySlug === categorySlug && collection.subcategorySlug === subcategorySlug);
}

export function getProductsByCollection(categorySlug: string, subcategorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug && product.subcategorySlug === subcategorySlug);
}

export function getProductBySlug(productSlug: string) {
  return products.find((product) => product.slug === productSlug);
}

export function getRelatedProducts(product: ShopProduct) {
  return product.relatedSlugs.map((slug) => getProductBySlug(slug)).filter(Boolean) as ShopProduct[];
}

export function getBestSellerProducts(limit = 2) {
  return products.filter((product) => product.bestSeller).slice(0, limit);
}

export function getNewArrivalProducts(limit = 2) {
  return products.filter((product) => product.isNew).slice(0, limit);
}
