import React from "react";
import { motion } from "framer-motion";
import { useOutsideClickClose } from "../../Hooks";
import "./style.scss";

const menu = ["About", "Experience", "Work", "Contact", "Resume"];
const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [menuClicked, setMenuClicked] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  useOutsideClickClose(menuRef, () => setOpenMenu(false));
  const navRef = React.useRef<HTMLElement>(null);
  let lastScrollTop = 0;
  const menuVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const logoItem = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItem = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const controlNavbar = () => {
    let scrollTop = document.documentElement.scrollTop;
    if (!navRef.current) return;
    if (scrollTop > lastScrollTop) {
      navRef.current.style.top = "-100%";
    } else {
      navRef.current.style.top = "0";
      if (window.scrollY > 10) {
        navRef.current.classList.add("active");
      } else {
        navRef.current.classList.remove("active");
      }
    }
    lastScrollTop = scrollTop;
  };
  React.useEffect(() => {
    if (menuClicked) return;
    if (!openMenu) {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("touchstart", controlNavbar);
    }
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("touchstart", controlNavbar);
    };
  });

  React.useEffect(() => {
    const body = document.querySelector("body");
    if (openMenu) {
      if (!body) return;
      body.style.overflow = "hidden";
    } else {
      if (!body) return;
      body.style.overflow = "initial";
    }
  }, [openMenu]);

  React.useEffect(() => {
    if (!navRef.current || !menuClicked) return;
    navRef.current.style.top = "-100%";
    const timeout = setTimeout(() => setMenuClicked(false), 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [menuClicked]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      variants={menuVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="logo" variants={logoItem}>
        <img src="/logo.svg" alt="" />
      </motion.div>
      <div ref={menuRef} className="menubox">
        <div
          className={`ham ${openMenu ? "ham-open" : ""}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <p></p>
          <p></p>
          <p></p>
        </div>
        <ul className={`menu ${openMenu ? "menu-open" : "menu-close"}`}>
          {menu.map((item, i) => {
            if (i < menu.length - 1) {
              const t = item.toLowerCase();
              return (
                <motion.li
                  key={i}
                  onClick={() => setMenuClicked(true)}
                  variants={menuItem}
                >
                  <a
                    href={`#${t}`}
                    onClick={() => openMenu && setOpenMenu(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              );
            } else {
              return (
                <motion.a
                  variants={menuItem}
                  className="resume"
                  key={i}
                  href="https://drive.google.com/file/d/1FwHSuzBDDsySUwMQP1dot7zWtQ7ULEJC/view?usp=sharing"
                  target={"_blank"}
                >
                  {item}
                </motion.a>
              );
            }
          })}
        </ul>
      </div>
      {openMenu && <div className="overlay"></div>}
    </motion.nav>
  );
};

export default Navbar;
