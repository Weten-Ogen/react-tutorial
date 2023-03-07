import Image from 'next/image'

export async function getStaticProps() {
    const {events_categories} = await import('/data/data.json')
    return {
        props:{
            data:events_categories, 
        }
    }
}

export const EventsPage = ({data}) => {
    
    return (
        <div>
            <nav className='w-[80%] my-2 mx-auto text-center'>
                <a className='px-2 text-md' href='/'>Home</a>
                <a className='px-2 text-md' href='/about-us'>About- us</a>
                <a className='  px-2 text-md' href='/events'>Events</a>
            </nav>
            <div>
                {
                    data.map(ev =>( 
                        <a  className='m-2 block' href={`/events/${ev.id}`}>
                        <Image src={`/${ev.image}`} width="400" height="200" className='object-cover  h-300' alt={ev.id}/>
                        <h2 className='text-3xl text-blue-600 underline py-2' >{ev.title}</h2>
                        </a>
                    ))
                }
               
            </div>
        </div>
    )
}

export default EventsPage;