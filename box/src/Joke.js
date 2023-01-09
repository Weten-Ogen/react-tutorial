import { useState } from 'react'

const Joke = () => {
    const [messages , setMessages] = useState(['a','b'])
    

    
  return (
    <div>
        {
            messages.length > 0 ? <h1>You have {messages.length} unread message{messages.length > 1 ? 's' : ''}</h1>: <h1>You are all caught up</h1>
        }
    </div>
  )
}

export default Joke
