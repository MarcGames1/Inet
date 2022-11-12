import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  UsersIcon,
} from "../icons";
import React, { useState } from "react";
import Link from "next/link";
import styles from './sidebar.module.css'
import { tw } from "twind";
const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "Manage Posts", icon: ArticleIcon, link: "/admin/posts" },
  { id: 2, label: "Create Posts", icon: ArticleIcon, link: "/admin/posts/create-post" },
  { id: 3, label: "Manage Users", icon: UsersIcon, link: "/admin/users" },
  { id: 3, label: "Add Users", icon: UsersIcon, link: "/admin/users/create-user" },
  // { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
];
// de modificat

const AdminSidebar = () => {
  const [hidden, setHidden] = useState(false);

  const handleClick = e => {
    setHidden(!hidden)
  }

  if (hidden) {
    return (
      <button onClick={handleClick} className={styles.button}><CollapsIcon fill="#ffff" /></button>
    )
  }

  return (
    <nav className={`${styles.wrapper}` + " " + tw('justify-between')}>

      {menuItems.map(({ icon: Icon, ...menu }) => {
        return (
          <div className={styles.item}>
            <Link href={menu.link}>
              <a className="flex py-4 px-3 items-center w-full h-full">
                <div style={{ width: "2.5rem" }}>
                  <Icon fill="#4f46e5" stroke="inherit" />
                </div>
                {menu.label}
              </a>
            </Link>
          </div>
        );

      })}
      <button onClick={handleClick} className={styles.button}><CollapsIcon fill="#ffff" /></button>
    </nav>
  )

}

export default AdminSidebar