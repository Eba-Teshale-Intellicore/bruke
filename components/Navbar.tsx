"use client";
import { navButtons, navItems } from "@/lib/constants";
// import { Link } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileNavigation from "./MobileNavigation";


export default function Navbar(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handelScroll = ()=> {
            setScrolled(window.scrollY > 50); // This means if scroll 50px in Y direction
        };
        window.addEventListener("scroll",handelScroll);
        return () => window.removeEventListener("scroll",handelScroll);
    },[]);
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 pt-3  transition-all duration-300 md:m-10 md:mt-2 md:rounded-full ${
            scrolled
            ? "bg-background/10 backdrop-blur-lg border-none"
            : " bg-background/70 backdrop-blur-lg border-b-6 border-primary"
        }`}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* logo */}
                    <div>
                        <h1 className="text-2xl font-black font-heading text-primary">GpsFit</h1>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            {navItems.map(item => (
                                <Link className="text-foreground hover:text-primary px-3 py-2 
                                text-md font-medium transition-colors duration-300" key={item.name} href ={item.href}>
                                    {item.name}
                                    </Link>))}
                        </div>
                    </div>
                    {/* CTA  */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle/>
                        {navButtons.map((btn) => (
                            <Link key={btn.name} href={btn.href}>
                                <Button className={btn.className}>
                                    {btn.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                    {/* Mobile Navigation  */}
                    <div className="md:hidden">
                        <MobileNavigation/>
                    </div>
                </div>
            </div>
        </nav>
    );
}