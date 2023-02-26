export const EventsPage = () => {
    return (
        <div>
            <nav className='w-[80%] my-2 mx-auto text-center'>
                <a className='px-2 text-md' href='/'>Home</a>
                <a className='px-2 text-md' href='/about-us'>About- us</a>
                <a className='  px-2 text-md' href='/events'>Events</a>
            </nav>
            <div>
                <a href='' className='w-full text-leading '>
                 <h2 className='font-bold text-2xl py-2'>Events in Lodon</h2>
                </a>
                <a href='' className='w-full text-leading '>
                 <h2 className='font-bold text-2xl py-2'>Events in San Francisco</h2>
                </a>
                <a href='' className='w-full text-leading '>
                 <h2 className='font-bold text-2xl py-2'>Events in Barcelona</h2>
                </a>
            </div>
        </div>
    )
}

export default EventsPage;