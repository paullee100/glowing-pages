import React from 'react'
import styles from "./navLink.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    title: string;
    path: string;
}

const NavLink = ({ title, path }: Props) => {

  const pathName = usePathname();

  return (
    <Link href={path} className={`${styles.container} ${pathName === path && styles.active} ${styles.menuButton}`}>
        {title}
    </Link>
  )
}

export default NavLink