import { describe } from "node:test";

export const navItems = [
  { name: "Home", href: "#" },
  { name: "Programs", href: "#programs" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

const BASE_URL = "http://127.0.0.1:5000";
export const navButtons = [
    {
        name: "Login",
        href: `${BASE_URL}/login`,
        className: "text-md bg-background text-foreground hover:bg-primary hover:text-amber-50"
    },
    {
        name: "Join Now",
        href: `${BASE_URL}/signup`,
        className: "text-md"
    }
];

export const programs = [
  {
    title: "Strength Training",
    description: "Build muscle and increase your power with our comprehensive training programs.",
    image: "/bruke.pg",   // <-- use imported image
  },
];

export const images = [
    {
        src: "/gallery1.jpg",
        alt: "Gallery Image 1"
    },
    {
        src: "/gallery2.jpg",
        alt: "Gallery Image 2"
    },
    {
        src: "/gallery3.jpg",
        alt: "Gallery Image 3"
    },];
    