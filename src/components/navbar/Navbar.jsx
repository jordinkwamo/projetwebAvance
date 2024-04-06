import React from 'react'
import styles from './navbar.module.css'
import Links from './links/Links'
import ToggleTheme from "../toggleTheme/ToggleTheme";


const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>MultiSport Arena</div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
				<ToggleTheme />
				<Links />
			</div>
    </div>
    
  )
}

export default Navbar