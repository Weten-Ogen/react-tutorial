const EventCatPage = () => {
    return (
        <div>
            <nav className='w-[80%] my-2 mx-auto text-center'>
                <a className='px-2 text-md' href='/'>Home</a>
                <a className='px-2 text-md' href='/about-us'>About- us</a>
                <a className='  px-2 text-md' href='/events'>Events</a>
            </nav>
            <div className="mx-4">
                <h1 className="font-bold text-3xl ">Our Events in London</h1>
                <a className="block py-2 font-semibold" href="/events/1">Event 1</a>
                <a className="block py-2 font-semibold" href="/events/2">Event 2</a>
                <a className="block py-2 font-semibold" href="/event/3">Event 3</a>
                <a className="block py-2 font-semibold" href="/event/4">Event 4</a>
                <a className="block py-2 font-semibold" href="/event/5">Event 5</a>
                <a className="block py-2 font-semibold" href="/event/6">Event 6</a>

            </div>
        </div>
    )
}

export default EventCatPage;