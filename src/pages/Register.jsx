import React from 'react'
import Add from '../assets/user-add.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat-a-Lot</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='display name' />
                <input type='email' placeholder='email' />
                <input type='password' placeholder='password' />
                <input style={{display: 'none'}} type='file' id='file'/>
                <label htmlFor='file'><img src={Add} alt='' /></label>
                <button>Sign up</button>
            </form>
            <p>Already have an account? </p>
        </div>
    </div>
  )
}

export default Register