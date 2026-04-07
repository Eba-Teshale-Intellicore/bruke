"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";
import Link from "next/link";

export default function MobileNavigation(){
    const [isOpen, setIsOpen] = useState(false)
    return <>
    <div className="flex">
        <ThemeToggle/>
        <Button variant="ghost" onClick={() => setIsOpen ( !isOpen )}>
            {isOpen 
        ? <X className="w-5 h-5"/> 
        : <Menu className="w-5 h-5"/>}</Button>
    </div>
    <div className={`fixed top-16 inset-0 z-40 md:hidden 
    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
    <div className=" text-lg font-bold px-2 pt-2 pb-3 bg-primary-foreground sm:px-3 border-t border-border
    dark:border-foreground/40">
        {navItems.map((item ) => 
        <Link key={item.name} href={item.href}
        className="text-foreground hover:text-primary block px-8 py-2">
            {item.name}
        </Link>)}
        <div className="  px-4 py-7">
    <Button className="w-full text-lg font-bold py-5"
    >Join Us</Button>
    </div>
    </div>
    </div>
    </>
}