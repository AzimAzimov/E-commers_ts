import React from 'react'
import { useSelector } from 'react-redux'


const UserForm = () => {
  const {  } = useSelector(({ user }) => user)

  return (
    <div>UserForm</div>
  )
}

export { UserForm }