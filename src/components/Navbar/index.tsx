import React from "react";
import { useOutsideClickClose, useIsScrolled } from "../../Hooks";
import "./style.scss";

const menu = ["About", "Experience", "Work", "Contact", "Resume"];
const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [menuClicked, setMenuClicked] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  useOutsideClickClose(menuRef, () => setOpenMenu(false));
  const navRef = React.useRef<HTMLElement>(null);
  let lastScrollTop = 0;

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
    const timeout = setTimeout(() => setMenuClicked(false), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [menuClicked]);

  return (
    <nav ref={navRef}>
      <div className="logo">
        <img src="/logo.svg" alt="" />
      </div>
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
                <li key={i} onClick={() => setMenuClicked(true)}>
                  <a
                    href={`#${t}`}
                    onClick={() => openMenu && setOpenMenu(false)}
                  >
                    {item}
                  </a>
                </li>
              );
            } else {
              return (
                <a
                  className="resume"
                  key={i}
                  href="https://drive.google.com/file/d/1FwHSuzBDDsySUwMQP1dot7zWtQ7ULEJC/view?usp=sharing"
                  target={"_blank"}
                >
                  {item}
                </a>
              );
            }
          })}
        </ul>
      </div>
      {openMenu && <div className="overlay"></div>}
    </nav>
  );
};

export default Navbar;
