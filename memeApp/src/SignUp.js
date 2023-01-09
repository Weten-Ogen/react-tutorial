import React from 'react'
import { formatWithOptions } from 'util'

const SignUp = ({form, handleChange}) => {
  return (
    <div>
      <form id='signup'>
        <label htmlFor='name'>Name</label>
        <input 
        id='name'
        type='text'
        name='name'
        value={form.name}
        onChange={handleChange}
        />
        <br/>
        <label htmlFor='password'>Password</label>
        <input 
        id='password'
        type='password'
        name='password'
        value={form.password}
        onChange={handleChange}
        />
        <br/>
        <label htmlFor='confirm'>Password</label>
        <input
        id='confirm'
        type='password'
        name='confirm'
        value={form.confirm}
        onChange={handleChange}
        />
        <br/>
        
        <input 
        id='joinedNews'
        type="checkbox"
        name='joinedNews'
        checked={form.joinedNews}
        />
        <label htmlFor='joinedNews'></label>
        <br/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default SignUp
