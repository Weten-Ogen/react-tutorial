import Image from 'next/image'
import Link from 'next/link';



const EventCatPage = ({data,pageName:id}) => {
    
    return (
        <div>
            <nav className='w-[80%] my-2 mx-auto text-center'>
                <a className='px-2 text-md' href='/'>Home</a>
                <a className='px-2 text-md' href='/about-us'>About- us</a>
                <a className='  px-2 text-md' href='/events'>Events</a>
            </nav>
            <div className="py-3">
            <h1 className='text-red-600 text-4xl text-center underline text-leading capitalize'>Events in { id }</h1>

            {
                data.map(ev => (
                    <Link key={ev.id} className="mx-2 block py-3" href={`/events/${ev.city}/${ev.id}`} passHref>
                     
                    <Image src={`/${ev.image}`} width="312" height={300} className="object-cover "/>
                    <h2 className='text-bold text-3xl underline text-blue-600'>{ev.title}</h2>
                    <p className='text-lg text-slate-700'>{ev.description}</p>
                        
                    </Link>
                    
                ))
                }
            </div>
        </div>
    )
}

export default EventCatPage;

export async function getStaticProps(context){
    const id = context?.params.cat;
    const {allEvents} = await import('/data/data.json')

    const data = allEvents.filter(ev => ev.city === id)

    return {
         props:{
             data:data,
             pageName: id
            }
    };
}

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json')
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat:ev.id.toString(),
            },
        };
    });
    console.log(allPaths)
    return {
        paths: allPaths,
        fallback: false,
    };
};