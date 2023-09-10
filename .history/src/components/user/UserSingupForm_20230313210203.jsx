import React from 'react'

import styles from "../../styles/User.module.css"

const UserSingupForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>
      </div>
    </div>
  )
}

export { UserSingupForm }