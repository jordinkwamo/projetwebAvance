"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";

const tab = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "football",
    path: "/football",
  },
  {
    title: "basketball",
    path: "/basketball",
  },
  {
    title: "handball",
    path: "/handball",
  },

  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.LinksContainer}>
          {tab.map((item, index) => (
            <div key={index}>
              <Link
                className={pathName === item.path && styles.active}
                href={item.path}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <button
            className={styles.mobileButton}
            style={{ backgroundColor: "fuchsia" }}
            onClick={onClickHandler}
          >
            Menu Mobile
          </button>
          {open && (
            <div className={styles.mobileLinks}>
              {tab.map((item, index) => (
                <div key={index}>
                  <Link
                    className={pathName === item.path && styles.active}
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Links;
