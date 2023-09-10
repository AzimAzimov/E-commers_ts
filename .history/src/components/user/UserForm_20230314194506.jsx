import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm, toggleFormType } from '../../featuries/user/userSlice';

import styles from "../../styles/User.module.css"
import { UserLoginForm } from './UserLoginForm';
import { UserSignupForm } from './UserSignupForm';

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user)

  const toggleCurrentFormType = () => {
    dispatch(toggleFormType(false))
  }

  const toggleForm = () => {
    dispatch(toggleForm(false))
  }

  const singUp = 'singup'

  return ( showForm 
    ? 
      <>
        <div 
          className={styles.overlay} 
          onClick={closeForm}
        />
        {formType === singUp 
          ? <UserSignupForm closeForm={closeForm} /> 
          : <UserLoginForm closeForm={closeForm} />
        }
      </>
    : <></>
  )
}

export { UserForm }