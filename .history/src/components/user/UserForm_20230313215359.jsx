import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../../featuries/user/userSlice';

import styles from "../../styles/User.module.css"
import { UserSingupForm } from './UserSingupForm';

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useSelector(({ user }) => user)

  return ( showForm 
    ? 
      <>
        <div 
          className={styles.overlay} 
          onClick={() => dispatch(toggleForm)}
        />
        <UserSingupForm />
      </>
    : <></>
  )
}

export { UserForm }