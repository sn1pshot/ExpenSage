"use client"
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Dashboard", 
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>ExpenSage</Link>
      <div className={styles.links}>
        {Links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}
        onClick={() => {console.log("logged out")}}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
