import Image from 'next/image'

export async function getStaticProps(context){
    const id = context?.params.cat;
    const {allEvents} = await import('/data/data.json')

    const data = allEvents.filter(ev => ev.city === id)

    return { props:{ data}};
}

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json')
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat:ev.id.toString(),
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false,
    }
}


const EventCatPage = ({data}) => {
    return (
        <div>
            <nav className='w-[80%] my-2 mx-auto text-center'>
                <a className='px-2 text-md' href='/'>Home</a>
                <a className='px-2 text-md' href='/about-us'>About- us</a>
                <a className='  px-2 text-md' href='/events'>Events</a>
            </nav>
            <div className="py-3">
                {
                    data.map(ev => {
                        <a key={ev.id} className='block' href={`/events/${ev.city}/${ev.id}`}>
                            <Image src={`/${ev.image}`} alt={`${ev.title}`} height="400" width="500"/>
                            <h2>{ev.title}</h2>
                            <p>{ev.description}</p>
                        </a>
                    })
                }
            </div>
        </div>
    )
}

export default EventCatPage;

