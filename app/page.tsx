"use client";

import { HeroScrub } from "@/components/ui/hero-scrub";
import { BrandIntro } from "@/components/brand-intro";
import { FeaturedCollection } from "@/components/featured-collection";
import { FullCatalog } from "@/components/full-catalog";
import { InquiryContact } from "@/components/inquiry-contact";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Demo() {
  const getFrameUrl = (i: number) => {
    return `https://raw.githubusercontent.com/duthiljean/ferrari-hero-demo/main/${String(i + 1).padStart(4, "0")}.webp`;
  };

  return (
    <>
      <Navbar />
      <HeroScrub
        frameCount={300}
        frameUrl={getFrameUrl}
        titleTop="Ferrari"
        titleBottom="Amalfi"
        accentHex="#3a9b8a"
      />
      <div id="collection">
        <BrandIntro />
        <FeaturedCollection />
      </div>
      <div id="catalog">
        <FullCatalog />
      </div>
      <Testimonials />
      <div id="contact">
        <InquiryContact />
      </div>
      <Footer />
    </>
  );
}