import { AiOutlineHome } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { SlGraduation } from "react-icons/sl";
import { TfiBag } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu } from "../../../features/menu/menuSlice";

const MainNav = () => {
  const { activeMenu } = useSelector((state) => state.menu) || {};
  const dispatch = useDispatch()
    return (
        <ul className="main-menu">
            <li className={`${activeMenu==="home" ? "active" : ""}`}>
              <a className={`${(activeMenu==="home" || activeMenu==="") ? "nav-anim active" : "nav-anim"}`} onClick={(event)=>{event.preventDefault();dispatch(setActiveMenu("home"))}}>
              <AiOutlineHome className="icon-large" />
                <span className="link-text">Home</span>
              </a>
            </li>
            <li className={`${activeMenu==="about-me" ? "active" : ""}`}>
              <a
                href=""
                className="nav-anim"
                onClick={(event)=>{event.preventDefault();dispatch(setActiveMenu("about-me"))}}
              >
                <HiOutlineUser className="icon-large" />
                <span className="menu-icon lnr lnr-user"></span>
                <span className="link-text">About Me</span>
              </a>
            </li>
            <li className={`${activeMenu==="resume" ? "active" : ""}`}>
              <a
                href=""
                className="nav-anim"
                onClick={(event)=>{event.preventDefault();dispatch(setActiveMenu("resume"))}}
              >
                <SlGraduation className="icon-large" />
                <span className="menu-icon lnr lnr-graduation-hat"></span>
                <span className="link-text">Resume</span>
              </a>
            </li>
            <li className={`${activeMenu==="portfolio" ? "active" : ""}`}>
              <a
                href=""
                className="nav-anim"
                onClick={(event)=>{event.preventDefault();dispatch(setActiveMenu("portfolio"))}}
              >
                <TfiBag className="icon-large" />
                <span className="menu-icon lnr lnr-briefcase"></span>
                <span className="link-text">Portfolio</span>
              </a>
            </li>
            <li className={`${activeMenu==="blog" ? "active" : ""}`}>
              <a
                href=""
                className="nav-anim"
                onClick={(event)=>{event.preventDefault();dispatch(setActiveMenu("blog"))}}
              >
                <BiBookAlt className="icon-large" />
                <span className="menu-icon lnr lnr-book"></span>
                <span className="link-text">Blog</span>
              </a>
            </li>
            <li className={`${activeMenu==="contact" ? "active" : ""}`}>
              <a
                href=""
                className="nav-anim"
                onClick={(event)=>{event.preventDefault();dispatch(setActiveMenu("contact"))}}
              >
                <HiOutlineMail className="icon-large" />
                <span className="menu-icon lnr lnr-envelope"></span>
                <span className="link-text">Contact</span>
              </a>
            </li>
          </ul>
    );
};

export default MainNav;