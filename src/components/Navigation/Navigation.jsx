import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  console.log(styles)

  return (
    <nav className= {`${styles.navigation} ${styles.logo} container`} >
      <div className="logo">
        <img src="public\images\logo (2).png" alt="logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
