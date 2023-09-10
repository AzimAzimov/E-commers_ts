import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useSelector(({ user }) => user)

  const handleClick = () => {
    if(!showForm) {
      dispatch(showForm(true))
    }
  }

  return (
    showForm ? <UserS
  )
}

export { UserForm }