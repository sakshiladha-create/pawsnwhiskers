export type BlogCategory =
  | "Cat Essentials"
  | "Dog Essentials"
  | "Food"
  | "Grooming"
  | "Health"
  | "Travel";

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; title: string; text: string }
  | { type: "quote"; text: string };

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  featured: boolean;
  content: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Essential Cat Accessories Every Cat Parent Should Own",
    slug: "essential-cat-accessories-every-cat-parent-should-own",
    excerpt: "From scratch-ready loungers to tidy feeding tools, these are the everyday cat essentials that make home life calmer and more comfortable.",
    category: "Cat Essentials",
    author: "Lena Morris",
    authorRole: "Pet Lifestyle Editor",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    date: "April 18, 2026",
    publishedAt: "2026-04-18",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/7516508/pexels-photo-7516508.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Cat resting on a curved wooden pet bed",
    tags: ["cat bed", "feeding", "home setup"],
    featured: true,
    content: [
      { type: "paragraph", text: "A well-set-up cat home feels effortless. The best accessories are the ones your cat reaches for naturally and that still look beautiful in your space." },
      { type: "heading", text: "Start with comfort zones" },
      { type: "paragraph", text: "Cats love a mix of lookout spots, hidden nooks, and soft places to curl up. A supportive bed near daylight plus one tucked-away hideout usually covers both needs." },
      { type: "list", items: ["A washable lounge bed for naps", "A scratching surface near their favorite room", "Elevated or shallow feeding bowls that feel easy to use"] },
      { type: "tip", title: "Quick setup tip", text: "Place beds and scratchers where your cat already lingers. Good placement matters more than buying more things." },
      { type: "heading", text: "Keep feeding simple and clean" },
      { type: "paragraph", text: "A tidy mealtime station with a mat, fresh water, and sealed treat storage makes daily routines smoother for both pet and person." },
      { type: "quote", text: "The most-loved cat accessories usually blend comfort, routine, and a little bit of curiosity." }
    ]
  },
  {
    id: "blog-2",
    title: "How to Choose the Right Cat Food for Everyday Health",
    slug: "how-to-choose-the-right-cat-food-for-everyday-health",
    excerpt: "Ingredients, texture, feeding habits, and age all play a role. Here is a practical way to compare cat food without getting overwhelmed.",
    category: "Food",
    author: "Dr. Mira Chen",
    authorRole: "Veterinary Content Advisor",
    authorAvatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200",
    date: "April 12, 2026",
    publishedAt: "2026-04-12",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Cat leaning down to eat from a bowl",
    tags: ["cat food", "nutrition", "wellness"],
    featured: false,
    content: [
      { type: "paragraph", text: "When you compare cat foods, focus first on what supports your cat's age, appetite, and digestion. Fancy packaging matters far less than consistent nutrition and a formula they genuinely enjoy." },
      { type: "heading", text: "Look for a strong everyday formula" },
      { type: "list", items: ["Choose food made for your cat's life stage", "Check whether your cat does better on wet, dry, or a mix", "Review ingredient quality and feeding guidance"] },
      { type: "paragraph", text: "If your cat has a sensitive stomach, change foods gradually over a week and watch appetite, energy, and litter habits." },
      { type: "tip", title: "Small change, big payoff", text: "Keep mealtimes consistent and measure portions. Routine often improves appetite and digestion." }
    ]
  },
  {
    id: "blog-3",
    title: "Best Toys to Keep Indoor Cats Active and Happy",
    slug: "best-toys-to-keep-indoor-cats-active-and-happy",
    excerpt: "Great indoor cat toys create short bursts of movement, problem-solving, and routine. These are the toy types worth rotating through the week.",
    category: "Cat Essentials",
    author: "Noah Patel",
    authorRole: "Play & Enrichment Writer",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    date: "April 7, 2026",
    publishedAt: "2026-04-07",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/6568944/pexels-photo-6568944.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Cat toy and play accessories on a soft surface",
    tags: ["cat toys", "indoor cats", "play"],
    featured: false,
    content: [
      { type: "paragraph", text: "Indoor cats do best when play feels varied, interactive, and easy to repeat. Think less about collecting more toys and more about creating a rotation they stay curious about." },
      { type: "heading", text: "Three toy styles that work well" },
      { type: "list", items: ["Wands for shared play sessions", "Lightweight kick toys for solo play", "Puzzle feeders for curiosity and movement"] },
      { type: "paragraph", text: "Short sessions count. Two ten-minute play breaks a day can help with energy, confidence, and general calm at home." }
    ]
  },
  {
    id: "blog-4",
    title: "Creating a Healthy Lifestyle for Your Pet at Home",
    slug: "creating-a-healthy-lifestyle-for-your-pet-at-home",
    excerpt: "Healthy pets thrive on rhythm: movement, nutrition, rest, and regular care. A few thoughtful routines can make a huge difference week to week.",
    category: "Health",
    author: "Ava Sinclair",
    authorRole: "Pet Wellness Editor",
    authorAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    date: "March 29, 2026",
    publishedAt: "2026-03-29",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Happy dog outdoors in bright daylight",
    tags: ["health", "routine", "daily care"],
    featured: true,
    content: [
      { type: "paragraph", text: "The healthiest homes for pets are rarely the most complicated ones. They are the homes where good food, movement, rest, and simple care routines happen consistently." },
      { type: "heading", text: "Build a gentle weekly routine" },
      { type: "list", items: ["Schedule daily feeding times", "Set short play or walk windows", "Keep grooming tools within easy reach", "Refresh beds, bowls, and carriers regularly"] },
      { type: "paragraph", text: "Pets tend to relax when life feels predictable. That calm often shows up in appetite, behavior, and sleep." },
      { type: "tip", title: "Wellness reminder", text: "Choose supplies that are easy to maintain. The easier they are to keep clean and use often, the more consistently they will support your routine." }
    ]
  },
  {
    id: "blog-5",
    title: "Dog Essentials Every New Pet Parent Should Have",
    slug: "dog-essentials-every-new-pet-parent-should-have",
    excerpt: "A strong starter setup for dogs includes comfort, feeding basics, walking gear, and a few training-ready tools that make daily care easier.",
    category: "Dog Essentials",
    author: "Lena Morris",
    authorRole: "Pet Lifestyle Editor",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    date: "March 20, 2026",
    publishedAt: "2026-03-20",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Golden puppy sitting on a light rug",
    tags: ["dog essentials", "new pet parent", "starter kit"],
    featured: false,
    content: [
      { type: "paragraph", text: "The first few weeks with a dog feel better when the basics are ready before you need them. A calm bed, food station, walking gear, and a few cleanup tools go a long way." },
      { type: "heading", text: "Start with four everyday categories" },
      { type: "list", items: ["Bed and crate comfort", "Food and treat storage", "Leash, harness, and ID basics", "Training and cleanup supplies"] },
      { type: "paragraph", text: "You do not need everything at once, but you do want the essentials that support routine, comfort, and confidence from day one." }
    ]
  },
  {
    id: "blog-6",
    title: "A Grooming Routine That Keeps Coats Soft and Homes Tidy",
    slug: "a-grooming-routine-that-keeps-coats-soft-and-homes-tidy",
    excerpt: "The best grooming routine is the one you can actually maintain. Start small, use the right tools, and build a calm weekly rhythm.",
    category: "Grooming",
    author: "Noah Patel",
    authorRole: "Play & Enrichment Writer",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    date: "March 11, 2026",
    publishedAt: "2026-03-11",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/6816863/pexels-photo-6816863.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Dog being gently groomed indoors",
    tags: ["grooming", "brushes", "coat care"],
    featured: false,
    content: [
      { type: "paragraph", text: "A gentle grooming routine helps with shedding, skin comfort, and overall cleanliness. It also gives you a regular moment to notice changes in coat, paws, and ears." },
      { type: "heading", text: "Keep your kit simple" },
      { type: "list", items: ["Use a brush suited to your pet's coat", "Pair grooming with treats and calm praise", "Store wipes and combs where they are easy to grab"] },
      { type: "tip", title: "Consistency wins", text: "Five calm minutes a few times a week usually works better than one long session your pet dreads." }
    ]
  },
  {
    id: "blog-7",
    title: "Flea & Tick Care Tips for Dogs and Cats",
    slug: "flea-and-tick-care-tips-for-dogs-and-cats",
    excerpt: "Protection is easiest when it becomes part of your seasonal routine. These care habits help you stay ready without feeling alarmed.",
    category: "Health",
    author: "Dr. Mira Chen",
    authorRole: "Veterinary Content Advisor",
    authorAvatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200",
    date: "March 5, 2026",
    publishedAt: "2026-03-05",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/4588069/pexels-photo-4588069.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Two dogs relaxing indoors after care time",
    tags: ["flea care", "tick care", "seasonal wellness"],
    featured: false,
    content: [
      { type: "paragraph", text: "Flea and tick care works best when you think ahead. Seasonal prevention, regular checks, and keeping the home environment tidy all help reduce stress later." },
      { type: "heading", text: "Simple habits to keep in place" },
      { type: "list", items: ["Check coats after outdoor time", "Wash bedding regularly", "Keep preventatives and reminders organized", "Talk with your vet about the right option for your pet"] },
      { type: "quote", text: "Prevention feels much smaller than treatment, and that is exactly why routine matters." }
    ]
  },
  {
    id: "blog-8",
    title: "Traveling With Pets: Crates, Carriers, and Comfort",
    slug: "traveling-with-pets-crates-carriers-and-comfort",
    excerpt: "A good travel setup feels safe, breathable, and easy to carry. Here is what to look for when choosing a crate or carrier for everyday trips.",
    category: "Travel",
    author: "Ava Sinclair",
    authorRole: "Pet Wellness Editor",
    authorAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    date: "February 24, 2026",
    publishedAt: "2026-02-24",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6568950/pexels-photo-6568950.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Pet carrier bag ready for travel",
    tags: ["travel carrier", "crate", "road trip"],
    featured: true,
    content: [
      { type: "paragraph", text: "Whether you are heading to the vet, a weekend stay, or a longer trip, the right carrier can make the whole experience calmer for both of you." },
      { type: "heading", text: "What a good carrier should do" },
      { type: "list", items: ["Fit your pet comfortably without too much extra movement", "Offer airflow and easy visibility", "Feel stable to carry and simple to clean"] },
      { type: "paragraph", text: "Familiar bedding, a soft towel, and a small routine before leaving can make travel much smoother." },
      { type: "tip", title: "Travel prep tip", text: "Let your pet spend a little calm time with the carrier at home before the trip so it feels familiar instead of sudden." }
    ]
  }
];

export const blogFilterCategories: Array<"All" | BlogCategory> = ["All", "Cat Essentials", "Dog Essentials", "Food", "Grooming", "Health", "Travel"];

export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedBlogPost() {
  return getAllBlogPosts().find((post) => post.featured) ?? getAllBlogPosts()[0];
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLatestBlogPosts(limit = 3) {
  return getAllBlogPosts().slice(0, limit);
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3) {
  return getAllBlogPosts()
    .filter((entry) => entry.slug !== post.slug && (entry.category === post.category || entry.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, limit);
}

export function getBlogCategoriesWithCount() {
  const counts = new Map<BlogCategory, number>();
  for (const post of blogPosts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return Array.from(counts.entries()).map(([category, count]) => ({ category, count }));
}
