import React from 'react'

import styles from "../../styles/Profile.module.css"

const Profile = () => {
  return (
    <div className={styles.profile}>
      {!currentUser 
        ? <span>You need to login</span> 
        : (<form className={styles.form} onSubmit={handleSubmit}>
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
                type="password"
                placeholder="Your password"
                name="password"
                value={values.password}
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

            <div className={styles.link} onClick={() => toggleCurrentFormType("login")}>
              I already have an account
            </div>

            <button type="submit" className={styles.submit}>
              Create an account
            </button>
          </form>
        )
      }
    </div>
  )
}

export { Profile }