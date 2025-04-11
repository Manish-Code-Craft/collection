import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout/layout";
import ServiceCard from "@/components/Collection/ServiceCard/ServiceCard";
import ImageSection from "@/components/Collection/ImageSection/ImageSection";
import TeamMember from "@/components/Team/TeamMember";

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
    number: "02",
    icon: "/icon.svg",
    title: "Web Development",
    link: "/#",
    text: "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    bgShape: "/service_card_bg.webp",
  },
  {
    number: "03",
    icon: "/icon.svg",
    title: "Web Development",
    link: "/#",
    text: "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    bgShape: "/service_card_bg.webp",
  },
 
];

const teamMembersData = [
  {
    name: "Manish",
    description: "Web Development",
    image: "/3.png",
    socials: {
      facebook: "#",
      pinterest: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Rajeev",
    description: "Web Development",
    image: "/2.png",
    socials: {
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Abhishek",
    description: "UI/UX Designer",
    image: "/1.png",
    socials: {
      instagram: "#",
      pinterest: "#",
    },
  },
  {
    name: "Andaz",
    description: "Full Stack Developer",
    image: "/team-img-4.webp",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
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

    <div className="pt-[100px]">
      <ImageSection/>
    </div>

    <div className="py-20 bg-indigo-100">
    <TeamMember members={teamMembersData} />
    </div>
    </>
  );
}
