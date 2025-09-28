import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SecondHeroSection from "./SecondHeroSection";
import InnovationSVG from "../../assets/innovation-animate4.svg";
import FoundationPNG from "../../assets/HARAR.jpg";
import ExpansionPNG  from "../../assets/Maximizing.jpg"
import Digital from "../../assets/tradition.jpg"

export default function HeroPage() {
  const { t } = useTranslation();

  const cards = [
    {
      year: "2010",
      title: "Foundation",
      desc: "Company was founded",
      img: FoundationPNG,
      cta: "Learn More",
      link: "/about",
    },
    {
      year: "2012",
      title: "First Product",
      desc: "Launched first product",
      img: "https://picsum.photos/id/1012/800/600",
      cta: "Discover",
      link: "/about",
    },
    {
      year: "2015",
      title: "Expansion",
      desc: "Entered new markets",
      img: ExpansionPNG,
      cta: "Explore",
      link: "/about",
    },
    {
      year: "2018",
      title: "Innovation",
      desc: "Released innovative solutions",
      img: Digital,
      cta: "See More",
      link: "/about",
    },
  ];

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 },
    }),
  };

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* First Hero Section */}
      <section className="h-screen w-full snap-start flex items-center justify-center bg-white text-[#02587d]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-8 lg:px-12 pt-20">
          {/* Left: Text */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight mb-4 md:mb-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.03 } } }}>
              {t("hero.title")
                .split("")
                .map((char, idx) => (
                  <motion.span key={idx} custom={idx} variants={letterVariant}>
                    {char}
                  </motion.span>
                ))}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-lg mb-6 max-w-lg mx-auto md:mx-0 text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}>
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}>
              <Link
                to="/programs"
                className="inline-block px-6 py-3 bg-[#FFA500] text-[#02587d] font-semibold rounded-xl shadow-md hover:bg-[#f2b143] transition text-sm sm:text-base">
                {t("hero.cta")}
              </Link>
            </motion.div>
          </div>

          {/* Right: SVG Image */}
          <motion.div
            className="flex justify-center md:justify-end mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}>
            <img
              src={InnovationSVG}
              alt={t("hero.title")}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md max-h-[400px] object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Second Hero Section */}
      <SecondHeroSection initialCards={cards} />
    </div>
  );
}
