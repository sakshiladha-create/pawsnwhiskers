import { Clock, HeartHandshake, HelpCircle, Mail, MapPin, MessageCircle, PackageSearch, Phone, Sparkles } from "lucide-react";

export const contactHero = {
  eyebrow: "Contact Us",
  title: "Pet care questions? We are happy to help.",
  copy: "Reach out for order support, product guidance, delivery questions, or a little help choosing the right essentials.",
  image:
    "https://images.pexels.com/photos/23849247/pexels-photo-23849247.jpeg?auto=compress&cs=tinysrgb&w=1000",
  alt: "Friendly close-up portrait of a dog"
};

export const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (800) 555-0198",
    href: "tel:+18005550198"
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@pawsnwhiskers.com",
    href: "mailto:hello@pawsnwhiskers.com"
  },
  {
    icon: Clock,
    title: "Store Hours",
    content: "Mon-Sat, 9:00 AM - 7:00 PM",
    href: null
  },
  {
    icon: MapPin,
    title: "Service Area",
    content: "Austin, TX and online nationwide",
    href: null
  }
];

export const contactSupport = {
  eyebrow: "Customer care",
  title: "A real support team for real pet routines.",
  copy: "Tell us what you need help with and we will point you toward a practical next step.",
  image:
    "https://images.pexels.com/photos/29971026/pexels-photo-29971026.jpeg?auto=compress&cs=tinysrgb&w=900",
  alt: "Cozy cat relaxing in warm indoor light",
  notes: [
    "Average response time: under 24 hours",
    "Order support, returns, and delivery help",
    "Product recommendations for dogs and cats"
  ]
};

export const helpCards = [
  {
    icon: PackageSearch,
    title: "Online Order Help",
    copy: "Need tracking, delivery, or return support? Send your order number and we will take it from there."
  },
  {
    icon: Sparkles,
    title: "Product Questions",
    copy: "Ask about sizes, ingredients, materials, or which essentials fit your pet's routine best."
  },
  {
    icon: HeartHandshake,
    title: "Partnerships",
    copy: "For rescue, shelter, or local partner inquiries, our team can route your message quickly."
  }
];

export const contactFaqs = [
  {
    icon: MessageCircle,
    question: "How quickly do you respond?",
    answer: "Most messages receive a reply within one business day."
  },
  {
    icon: Phone,
    question: "Do you offer phone support?",
    answer: "Yes. Call us during store hours for order and product help."
  },
  {
    icon: HelpCircle,
    question: "Can I ask for product recommendations?",
    answer: "Yes. Share your pet's age, size, and routine so we can suggest useful options."
  },
  {
    icon: PackageSearch,
    question: "Do you help with order issues?",
    answer: "Absolutely. Include your order number and we will review the details."
  }
];
