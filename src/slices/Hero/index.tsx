"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <div className="hero min-h-screen relative">
      <PrismicNextImage
        field={slice.primary.hero_image}

        className="absolute inset-0 z-0"
      />
      <div className="hero-overlay bg-black/30"></div>
      <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.3
          }}
          className="glass bg-white/10 px-16 py-12 rounded-2xl backdrop-blur-xl shadow-2xl w-full max-w-2xl mx-auto"
        >
          <div className="space-y-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center bg-gradient-to-r from-primary via-base-content text-balance to-accent bg-clip-text text-transparent font-display gradient-animate prose prose-xl prose-headings:text-primary-content drop-shadow-2xl"
            >
              <PrismicRichText field={slice.primary.heading} />
            </motion.div>
            <div className="prose-lg md:prose-xl text-primary-content text-center text-balance">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <button className="btn btn-primary btn-lg shadow-lg">Get Started</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
