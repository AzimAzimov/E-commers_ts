import React from 'react'

import styles from "../../styles/User.module.css"

const UserSingupForm = () => {

  const [values, setValues] = useState({
    name: "",
    email: ""
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>Sing Up</div>
      <form className={styles.form}>
        <div className={styles.group}>
          <input 
            type="email" 
            name='email'
            placeholder='Your email'
            value=''
            autoComplete='off'
            onChange={() => {}}
            required
          />
        </div>
        <div className={styles.group}>
          <input 
            type="name" 
            name='name'
            placeholder='Your name'
            value=''
            autoComplete='off'
            onChange={() => {}}
            required
          />
        </div>
        <div className={styles.group}>
          <input 
            type="password" 
            name='password'
            placeholder='Your password'
            value=''
            autoComplete='off'
            onChange={() => {}}
            required
          />
        </div>
        <div className={styles.group}>
          <input 
            type="avatar" 
            name='avatar'
            placeholder='Your avatar'
            value=''
            autoComplete='off'
            onChange={() => {}}
            required
          />
        </div>
        <div className={styles.link}>I already have an account</div>
        <button type='submit' className={styles.submit}>Create an account</button>
      </form>
    </div>
  )
}

export { UserSingupForm }