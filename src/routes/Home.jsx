import BirthdaySection from "../pages/BirthdaySection";
import Breadcrumb from "../pages/Breadcrumb";
import EventSection from "../pages/EventSection";
import NewsSection from "../pages/NewsSection";
import { Quicklinks } from "../pages/Quicklinks";
import UpdateCards from "../pages/UpdateCards";

const Home = () => {
  return (
    <>
      <Breadcrumb />
      <NewsSection />
      <EventSection />
      <UpdateCards />
      <BirthdaySection />
      <Quicklinks />
    </>
  );
};

export default Home;
