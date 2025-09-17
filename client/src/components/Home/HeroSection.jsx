import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InnovationSVG from "../../assets/innovation-animate4.svg";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="mb-12 pt-16 pb-6 min-h-[calc(100vh-4rem)] flex items-center justify-center
      bg-[#ffffff] text-[#02587d]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-8 lg:px-12 pt-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight mb-4 md:mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-[#9f9e9f] text-base sm:text-lg md:text-lg mb-6 max-w-lg mx-auto md:mx-0">
            {t("hero.description")}
          </p>

          <Link
            to="/programs"
            className="inline-block px-6 py-3 bg-[#FFA500] text-[#02587d] font-semibold rounded-xl shadow-md hover:bg-[#f2b143] transition text-sm sm:text-base">
            {t("hero.cta")}
          </Link>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={InnovationSVG}
            alt={t("hero.imageAlt")}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md max-h-[400px] object-contain drop-shadow-lg block"
          />
        </motion.div>
      </div>
    </section>
  );
}
