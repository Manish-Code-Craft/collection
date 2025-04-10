import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout/layout";
import ServiceCard from "@/components/Collection/ServiceCard/ServiceCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const services = [
  {
    number: "01",
    icon: "/icon.svg",
    title: "Web Development",
    link: "/#",
    text: "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    bgShape: "/service_card_bg.webp",
  },
  {
    number: "01",
    icon: "/icon.svg",
    title: "Web Development",
    link: "/#",
    text: "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    bgShape: "/service_card_bg.webp",
  },
  {
    number: "01",
    icon: "/icon.svg",
    title: "Web Development",
    link: "/#",
    text: "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    bgShape: "/service_card_bg.webp",
  },
 
];

export default function Home() {
  return (
    <>
    <div>
      Manish
    </div>
    <Layout/>

    <div className="pt-[100px]">
      <ServiceCard services={services}/>
    </div>
    </>
  );
}
