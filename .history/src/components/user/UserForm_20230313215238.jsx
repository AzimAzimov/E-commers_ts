import React from 'react'
import { useSelector } from 'react-redux'

import styles from "../../styles/User.module.css"
import { UserSingupForm } from './UserSingupForm';

const UserForm = () => {
  const dispat
  const { showForm } = useSelector(({ user }) => user)

  return ( showForm 
    ? 
      <>
        <div className={styles.overlay}></div>
        <UserSingupForm />
      </>
    : <></>
  )
}

export { UserForm }