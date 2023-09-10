import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useSelector(({ user }) => user)

  const handleClick = () => {
    if()
  }

  return (
    <div>UserForm</div>
  )
}

export { UserForm }