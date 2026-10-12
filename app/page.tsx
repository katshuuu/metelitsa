import { AboutBand } from "@/components/sections/AboutBand";
import { Facts } from "@/components/sections/Facts";
import { Hero } from "@/components/sections/Hero";
import { MediaBand } from "@/components/sections/MediaBand";
import { Partners } from "@/components/sections/Partners";
import { Programs } from "@/components/sections/Programs";
import { Schools } from "@/components/sections/Schools";
import { HomeEvents } from "@/components/sections/HomeEvents";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Facts />
      <Programs />
      <AboutBand />
      <HomeEvents />
      <MediaBand />
      <Schools />
      <Partners />
    </>
  );
}
