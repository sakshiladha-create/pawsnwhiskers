import {
  Baby,
  BadgePercent,
  Bone,
  Cat,
  Dog,
  HeartPulse,
  Home,
  PackageCheck,
  PawPrint,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Shop", href: "/shop", hasMegaMenu: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" }
];

export const megaMenuCategories = [
  {
    title: "Cat Essentials",
    slug: "cat-essentials",
    icon: Cat,
    accent: "bg-skysoft",
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
    title: "Dog Essentials",
    slug: "dog-essentials",
    icon: Dog,
    accent: "bg-mint",
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

export const menuPromos = [
  {
    title: "Save 50%",
    eyebrow: "Fresh picks for picky eaters",
    copy: "Stock up on premium meals, toppers, and crunchy treats.",
    href: "/category/dog-essentials/dog-food",
    tone: "bg-[#4CB8E8]",
    image:
      "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Extra 20% on Supplies",
    eyebrow: "Travel, beds, bowls and more",
    copy: "Discover toys for your pets!",
    href: "/category/cat-essentials/cat-supplies",
    tone: "bg-plum",
    image:
      "https://images.pexels.com/photos/6816865/pexels-photo-6816865.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const utilityIcons = {
  PawPrint,
  Bone,
  BadgePercent,
  PackageCheck,
  ShieldCheck,
  HeartPulse,
  Home,
  Sparkles,
  Baby
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function categoryHref(categorySlug: string, subcategory: string) {
  return `/category/${categorySlug}/${slugify(subcategory)}`;
}
