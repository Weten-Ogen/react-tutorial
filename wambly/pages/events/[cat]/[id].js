const EventPage = () => {
    return (
        <div>
            <nav className='w-[80%] my-2 mx-auto text-center'>
                <a className='px-2 text-md' href='/'>Home</a>
                <a className='px-2 text-md' href='/events/:id/about-us'>About- us</a>
                <a className='  px-2 text-md' href='/events'>Events</a>
            </nav>
            <h1>Our Single Event</h1>
        </div>
    )
}

export default EventPage;