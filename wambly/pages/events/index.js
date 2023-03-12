import Image from 'next/image'
import Header from '@/src/components/header/header';
import Footer from '@/src/components/footer/footer';

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
           <Header/>
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
            <Footer/>
        </div>
    )
}

export default EventsPage;