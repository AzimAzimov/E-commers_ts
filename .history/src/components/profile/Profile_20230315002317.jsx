import React from 'react'

import styles from "../../styles/Profile.module.css"

const Profile = () => {
  return (
    <div className={styles.profile}>
      {!currentUser ? <span>You need </span>}
    </div>
  )
}

export { Profile }