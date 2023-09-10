import React from 'react'
import { useSelector } from 'react-redux'

import styles from "../../styles/User.module.css"
import { UserSingupForm } from './UserSingupForm';

const UserForm = () => {
  const dispatch = useDis
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