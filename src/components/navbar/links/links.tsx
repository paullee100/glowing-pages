"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Anime Watched",
    path: "/anime-watched",
  },
  {
    title: "Anime Currently Watching",
    path: "/anime-watching",
  },
  {
    title: "Recipes",
    path: "/recipes",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.link}>
          {links.map((link) => (
            <NavLink title={link.title} path={link.path} key={link.title} />
          ))}
        </div>
        <Image
          className={styles.menuButton}
          src="/glowing-pages/menu.png"
          alt=""
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
            <div className={styles.mobileLinks} onClick={() => setOpen(false)}>
                {links.map((link) => (
                    <NavLink title={link.title} path={link.path} key={link.title} />
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default Links;
