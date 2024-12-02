"use client"
import type { IconType } from "react-icons";
import { FaHouse, FaBriefcase, FaInfo } from "react-icons/fa6";

export type NavigationItem = {
  href: string;
  label: string;
  icon: IconType;
};

// Navigation items
const navigation: NavigationItem[] = [
  {
    href: "/",
    label: "Home",
    icon: FaHouse,
  },
  {
    href: "/about",
    label: "About",
    icon: FaInfo,
  },
  {
    href: "/services",
    label: "Services",
    icon: FaBriefcase,
  },
];

export default navigation;
