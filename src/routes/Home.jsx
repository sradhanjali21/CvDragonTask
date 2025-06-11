// import BirthdaySection from "../pages/BirthdaySection";
// import Breadcrumb from "../pages/Breadcrumb";
// import EventSection from "../pages/EventSection";
// import NewsSection from "../pages/NewsSection";
// import { Quicklinks } from "../pages/Quicklinks";
// import UpdateCards from "../pages/UpdateCards";

// const Home = () => {
//   return (
//     <>
//       <Breadcrumb />
//       <NewsSection />
//       <EventSection />
//       <UpdateCards />
//       <BirthdaySection />
//       <Quicklinks />
//     </>
//   );
// };

// export default Home;


import { motion } from "framer-motion";
import BirthdaySection from "../pages/BirthdaySection";
import Breadcrumb from "../pages/Breadcrumb";
import EventSection from "../pages/EventSection";
import NewsSection from "../pages/NewsSection";
import { Quicklinks } from "../pages/Quicklinks";
import UpdateCards from "../pages/UpdateCards";

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
        <Breadcrumb />
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
        <NewsSection />
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
        <EventSection />
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
        <UpdateCards />
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
        <BirthdaySection />
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={6}>
        <Quicklinks />
      </motion.div>
    </>
  );
};

export default Home;
