import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserSingupForm } from './UserSingupForm';


const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useSelector(({ user }) => user)

  const handleClick = () => {
    if(!showForm) {
      dispatch(showForm(true))
    }
  }

  return (
    showForm ? <UserSingupForm />
  )
}

export { UserForm }