import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../featuries/user/userSlice';
import styles from "../../styles/Profile.module.css"


const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user)

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(updateUser(values));
  };

  return (
    <section className={styles.profile}>
      {!currentUser 
        ? <span>You need to login</span> 
        : <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                value={values.email}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.group}>
              <input
                type="name"
                placeholder="Your name"
                name="name"
                value={values.name}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.group}>
              <input
                type="avatar"
                placeholder="Your avatar"
                name="avatar"
                value={values.avatar}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
             <button type="submit" className={styles.submit}>
          Create an account
        </button>
          </form>
      }
    </section>
  )
}

export { Profile }