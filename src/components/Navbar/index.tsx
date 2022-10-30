import React from "react";
import { useOutsideClickClose, useIsScrolled } from "../../Hooks";
import "./style.scss";

const menu = ["About", "Experience", "Work", "Contact", "Resume"];
const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  useOutsideClickClose(menuRef, () => setOpenMenu(false));

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

  return (
    <nav>
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
              return (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
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
