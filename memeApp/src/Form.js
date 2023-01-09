

const Form = ({handleChange, form}) => {
 
  return (
    <main>
      <form >
        <input 
        type='text' 
        placeholder="Fullname"
        className="one"
        name='fullname'
        value={form.fullname}
        onChange={handleChange}
         />
        <input 
        type='password'
        name='password'
        value={form.password}
        placeholder='Password'
        onChange={handleChange}
        />
        <input 
        type='password'
        name='confirm'
        value={form.confirm}
        placeholder='Password'
        onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </main>
  )
}

export default Form
