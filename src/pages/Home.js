import SubHome from "../component/Home/SubHome";
import SiteHeader from "../component/shared/SiteHeader";
import Footer from "../component/shared/Footer";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../component/Contact/Contact";
import AboutMe from "../component/AboutMe/AboutMe";
import Blog from "../component/Blog/Blog";
import Portfolio from "../component/Portfolio/Portfolio";
import Resume from "../component/Resume/Resume";
import AnimatedBackground from "../component/shared/AnimatedBackground";
import LoadingAnimation from "../component/shared/LoadingAnimation";
import ArrowsNav from "../component/shared/nav/ArrowsNav";
import { useEffect, useMemo, useState } from "react";
import { setActiveMenu } from "../features/menu/menuSlice";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const numMenuItems = useMemo(() => ["home", "about-me", "resume", "portfolio", "blog", "contact"],[]);
  const { activeMenu } = useSelector((state) => state.menu) || {};
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(setActiveMenu(numMenuItems[activeMenuIndex]))},[numMenuItems,dispatch,activeMenuIndex])
  const handleLeftArrowClick = () => {
    setActiveMenuIndex(prevIndex => (prevIndex - 1 + numMenuItems.length) % numMenuItems.length);
  };

  const handleRightArrowClick = () => {
    setActiveMenuIndex(prevIndex => (prevIndex + 1) % numMenuItems.length);
  };

  return (
    <div className="home">
      <AnimatedBackground />
      <LoadingAnimation />
      <div className="page">
        <div className="page-content">
          <SiteHeader />
          <ArrowsNav handleLeftArrowClick={handleLeftArrowClick} handleRightArrowClick={handleRightArrowClick} />

          <div className="content-area">
            <AnimatePresence>
            <div className="animated-sections" location={activeMenu} key={activeMenu}>
              {activeMenu==="home" && <SubHome />}
              {activeMenu==="about-me" && <AboutMe activeMenu={activeMenu} />}
              {activeMenu==="resume" && <Resume activeMenu={activeMenu} />}
              {activeMenu==="portfolio" && <Portfolio activeMenu={activeMenu} />}
              {activeMenu==="blog" && <Blog activeMenu={activeMenu} />}
              {activeMenu==="contact" && <Contact activeMenu={activeMenu} />}
            </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
