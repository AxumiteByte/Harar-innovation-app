import { Link } from "react-router-dom";
import { Rocket, Laptop, Coins } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useProgramStore } from "../../store/programStore";
import { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const categoryIcons = {
  Startup: <Rocket className="text-[#255876] w-12 h-12 mb-4" />,
  Workshops: <Laptop className="text-[#255876] w-12 h-12 mb-4" />,
  Funding: <Coins className="text-[#255876] w-12 h-12 mb-4" />,
};

export default function ProgramsSection() {
  const { t } = useTranslation();
  const { programs, fetchPrograms, loading } = useProgramStore();

  // Fetch programs if not loaded
  useEffect(() => {
    if (programs.length === 0) fetchPrograms();
  }, [fetchPrograms, programs.length]);

  if (loading) return <LoadingSpinner />;

  const latestPrograms = programs.slice(0, 3);

  if (latestPrograms.length === 0) {
    return (
      <section className="px-4 sm:px-6 md:px-16 py-16 bg-[#ffffff] text-[#255876]">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            {t("programs.section.heading", "Our Programs")}
          </h2>
          <p className="text-gray-500">
            {t("programs.section.noPrograms", "No programs available")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-6 md:px-16 py-16 bg-[#ffffff] text-[#255876]">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center">
          {t("programs.section.heading", "Our Programs")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {latestPrograms.map((program, index) => (
            <motion.div
              key={program._id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                  },
                },
              }}
              className="bg-[#FBF2E0] rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <motion.div
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {categoryIcons[program.category] || (
                  <Rocket className="text-[#255876] w-12 h-12 mb-4" />
                )}
              </motion.div>

              <h3 className="text-xl sm:text-lg md:text-xl font-semibold mb-2 text-[#255876]">
                {program.title}
              </h3>
              <p className="text-[#255876]/80 text-sm sm:text-base">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/programs"
            className="inline-block px-6 py-3 bg-[#FFA500] text-[#02587d] font-semibold rounded-lg shadow-md hover:bg-[#f2b143] transition transform hover:scale-105"
          >
            {t("programs.section.cta", "View All Programs")}
          </Link>
        </div>
      </div>
    </section>
  );
}
