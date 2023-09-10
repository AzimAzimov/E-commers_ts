import React from 'react'
import { useSelector } from 'react-redux'

import styles from "../../styles/User.module.css"
import { UserSingupForm } from './UserSingupForm';

const UserForm = () => {
  const { showForm } = useSelector(({ user }) => user)

  return (
    <>
      <div className={styles.}></div>
      {showForm ? <UserSingupForm /> : <></>}
    </>
  )
}

export { UserForm }