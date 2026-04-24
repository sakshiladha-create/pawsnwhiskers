import {
  BadgePercent,
  Bone,
  Headphones,
  Heart,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  UserRound
} from "lucide-react";

export const heroSlides = [
  {
    eyebrow: "Get 10% Discount",
    title: "Where Being A Pet Is Just The Best",
    copy: "Discover playful essentials, cozy beds, tasty treats, and everyday care for happy cats and dogs.",
    primaryCta: "Shop Now",
    href: "/shop",
    image: "/images/slider_1.webp",
    bg: "bg-[#F4F4FF]",
    headingColor: "text-[#4C6795]",
    eyebrowColor: "text-[#5A78B3]"
  },
  {
    eyebrow: "New Pet Essentials",
    title: "Everything Your Furry Friend Will Love",
    copy: "Shop food, toys, grooming, beds, and accessories made for comfort, care, and fun.",
    primaryCta: "Shop Now",
    href: "/shop",
    image: "/images/slider_2.webp",
    bg: "bg-[#E8F8FF]",
    headingColor: "text-[#4C6795]",
    eyebrowColor: "text-[#5A78B3]"
  }
];

export const serviceFeatures = [
  {
    icon: PackageCheck,
    title: "Free Delivery",
    copy: "Delivery to any point of the city and regions."
  },
  {
    icon: ShieldCheck,
    title: "Easy and Secure",
    copy: "Online payment with credit and debit card."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    copy: "We are always ready to take your phone."
  },
  {
    icon: Bone,
    title: "100% Organic",
    copy: "All products are 100% organic, certified."
  }
];

export const products = [
  {
    title: "Cloud Nest Washable Pet Bed",
    category: "Comfort",
    price: "$46.00",
    oldPrice: "$59.00",
    rating: 4.9,
    reviews: 128,
    description: "Plush bolsters, removable cover, and nap-ready support.",
    image:
      "https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&w=700",
    tag: "Best Seller"
  },
  {
    title: "Salmon Crunch Cat Treats",
    category: "Treats",
    price: "$12.50",
    oldPrice: "$16.00",
    rating: 4.8,
    reviews: 94,
    description: "Tiny crunchy bites with clean protein and no fillers.",
    image:
      "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=700",
    tag: "Save 20%"
  },
  {
    title: "Pastel Rope Toy Trio",
    category: "Toys",
    price: "$18.00",
    oldPrice: "$24.00",
    rating: 4.7,
    reviews: 76,
    description: "Durable tug toys in cheerful colors for active chewers.",
    image:
      "https://images.pexels.com/photos/6568944/pexels-photo-6568944.jpeg?auto=compress&cs=tinysrgb&w=700",
    tag: "New"
  },
  {
    title: "Wellness Flea & Tick Kit",
    category: "Wellness",
    price: "$32.00",
    oldPrice: "$40.00",
    rating: 4.9,
    reviews: 203,
    description: "Gentle coat care and seasonal protection in one set.",
    image:
      "https://images.pexels.com/photos/6816858/pexels-photo-6816858.jpeg?auto=compress&cs=tinysrgb&w=700",
    tag: "Top Rated"
  }
];

export const lowPricePromos = [
  {
    title: "Cat food favorites",
    copy: "Balanced meals for shiny coats.",
    price: "From $9.99",
    image:
      "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=700",
    bg: "bg-[#FBE4D7]"
  },
  {
    title: "Dog toy bundles",
    copy: "Fetch, chew, tug, repeat.",
    price: "From $7.50",
    image:
      "https://images.pexels.com/photos/8434642/pexels-photo-8434642.jpeg?auto=compress&cs=tinysrgb&w=700",
    bg: "bg-[#D9EFD9]"
  },
  {
    title: "Dreamy beds",
    copy: "Soft shapes for serious naps.",
    price: "From $29",
    image:
      "https://images.pexels.com/photos/4588001/pexels-photo-4588001.jpeg?auto=compress&cs=tinysrgb&w=700",
    bg: "bg-[#E9DEF7]"
  },
  {
    title: "Wellness picks",
    copy: "Gentle care, daily confidence.",
    price: "From $14",
    image:
      "https://images.pexels.com/photos/6816863/pexels-photo-6816863.jpeg?auto=compress&cs=tinysrgb&w=700",
    bg: "bg-[#DCEFF8]"
  }
];

export const browseCategories = [
  {
    title: "Cat Treats & Chews",
    href: "/category/cat-essentials/cat-treats-chews",
    image:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    title: "Dog Food",
    href: "/category/dog-essentials/dog-food",
    image:
      "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    title: "Cat Beds",
    href: "/category/cat-essentials/cat-beds",
    image:
      "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    title: "Dog Toys",
    href: "/category/dog-essentials/dog-toys",
    image:
      "https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    title: "Health and Wellness",
    href: "/category/dog-essentials/health-and-wellness",
    image:
      "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=500"
  }
];

export const curatedCollections = {
  kittens: {
    eyebrow: "Collection for kittens",
    title: "Tiny treats, soft naps, curious play.",
    copy: "Everything small cats need for confident starts, from gentle meals to cozy textures.",
    links: ["Kitten Food", "Soft Toys", "Starter Beds", "Grooming"],
    image:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=900",
    products: products.slice(0, 3)
  },
  puppies: {
    eyebrow: "Collection for puppies",
    title: "First walks, first chews, first big naps.",
    copy: "Playful puppy essentials chosen for comfort, training, and healthy routines.",
    links: ["Puppy Food", "Chew Toys", "Training Pads", "Walking Gear"],
    image:
      "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=900",
    products: [products[2], products[0], products[3]]
  }
};

export const midPromos = [
  {
    title: "Organic meals for sensitive tummies",
    copy: "Clean ingredient recipes with big flavor and gentle nutrition.",
    cta: "Shop Organic",
    href: "/category/dog-essentials/dog-food",
    image:
      "https://images.pexels.com/photos/7210747/pexels-photo-7210747.jpeg?auto=compress&cs=tinysrgb&w=900",
    layout: "large"
  },
  {
    title: "Accessories sale",
    copy: "Bowls, carriers, and collars up to 30% off.",
    cta: "Shop Supplies",
    href: "/category/cat-essentials/cat-supplies",
    image:
      "https://images.pexels.com/photos/6816865/pexels-photo-6816865.jpeg?auto=compress&cs=tinysrgb&w=700"
  },
  {
    title: "Pet expert hotline",
    copy: "Need help choosing? We are here every day.",
    cta: "Contact Us",
    href: "/contact-us",
    image:
      "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&cs=tinysrgb&w=700"
  }
];

export const tabbedProducts = {
  "All Items": products,
  Sales: [products[1], products[2], products[0]],
  Featured: [products[0], products[3], products[2]],
  "Best Seller": [products[0], products[1], products[3]],
  "Top Rated": [products[3], products[0], products[1]]
};

export const testimonials = [
  {
    title: "Favorite dry food",
    name: "Thomas Brassington",
    role: "Multi-cat household",
    quote: "Our cats love these, and we get quite a few in a bag, so it’s a good value as well.",
    rating: 5,
    image: "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Curious cat near a bowl of food"
  },
  {
    title: "Puppy love it!",
    name: "Katie Kelly",
    role: "New puppy parent",
    quote: "Our picky puppy enjoys the taste and finishes every bowl.",
    rating: 5,
    image: "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Happy puppy eating beside a bowl"
  },
  {
    title: "Quality at a great price",
    name: "Noemi Medina",
    role: "Cat parent",
    quote: "I order regularly and have never had an issue. My cats prefer it over other brands.",
    rating: 5,
    image: "https://images.pexels.com/photos/7516508/pexels-photo-7516508.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Cat resting on a curved pet lounge"
  }
];

export const brandLogos = [
  {
    name: "Earth Animal",
    image: "https://images.pexels.com/photos/4588069/pexels-photo-4588069.jpeg?auto=compress&cs=tinysrgb&w=240"
  },
  {
    name: "Family Pet Food",
    image: "https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg?auto=compress&cs=tinysrgb&w=240"
  },
  {
    name: "Stella & Chewy's",
    image: "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=240"
  },
  {
    name: "Ark Naturals",
    image: "https://images.pexels.com/photos/4587970/pexels-photo-4587970.jpeg?auto=compress&cs=tinysrgb&w=240"
  },
  {
    name: "Animal Necessity",
    image: "https://images.pexels.com/photos/7516508/pexels-photo-7516508.jpeg?auto=compress&cs=tinysrgb&w=240"
  },
  {
    name: "Barkworthies",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=240"
  }
];

export const galleryItems = [
  {
    title: "Modern cat nook",
    image:
      "https://images.pexels.com/photos/6958160/pexels-photo-6958160.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Cat relaxing inside a modern wood pet house",
    size: "small"
  },
  {
    title: "Soft dog style",
    image:
      "https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Small dog wearing a cozy pink sweater",
    size: "small"
  },
  {
    title: "Smart feeder routine",
    image:
      "https://images.pexels.com/photos/5732478/pexels-photo-5732478.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Border collie beside an automatic pet feeder",
    size: "large"
  },
  {
    title: "Playful puppy face",
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Close-up portrait of a playful puppy",
    size: "small"
  },
  {
    title: "Cat lounge bed",
    image:
      "https://images.pexels.com/photos/7516508/pexels-photo-7516508.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Cat resting on a modern wooden lounge bed",
    size: "small"
  },
  {
    title: "Little pet mealtime",
    image:
      "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Cat eating from a bowl",
    size: "small"
  },
  {
    title: "Curious snack break",
    image:
      "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Cat leaning down toward a bowl of food",
    size: "small"
  },
  {
    title: "Companions at home",
    image:
      "https://images.pexels.com/photos/4588069/pexels-photo-4588069.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Two dogs resting together indoors",
    size: "small"
  },
  {
    title: "Bright kitten portrait",
    image:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Bright portrait of a curious kitten",
    size: "small"
  }
];

export const utilityShortcuts = [
  { title: "Shop", href: "/shop", icon: ShoppingBag },
  { title: "Account", href: "/account", icon: UserRound },
  { title: "Wishlist", href: "/wishlist", icon: Heart },
  { title: "Search", href: "/search", icon: Search }
];

export const footerLinks = ["About Us", "Shop", "Blog", "Contact Us", "Wishlist", "Account"];

export const iconMap = {
  BadgePercent,
  Bone,
  PackageCheck,
  Sparkles,
  Star
};
