import Image from 'next/image';

export async function getStaticPaths(){
    const {allEvents} = await import('/data/data.json');
    const allPaths = allEvents.map( path => {
        return{
            params:{
                cat: path.city,
                id: path.id,
            }
        }
    });
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const id = context.params.id;
    const {allEvents} = await import('/data/data.json');
    const evenData = allEvents.find(ev => ev.id === id )
    return {
        props:{
            data:evenData,
        }
    }
}



const EventPage = ({data}) => {
    
    return (
        <div>
            <nav className='w-[80%] my-2 mx-auto text-center'>
                <a className='px-2 text-md' href='/'>Home</a>
                <a className='px-2 text-md' href='/events/:id/about-us'>About- us</a>
                <a className='  px-2 text-md' href='/events'>Events</a>
            </nav>
            <div className='object-contain px-2'>
                <h1 className='underline text-red-600 text-center text-3xl p-2 capitalize'>{data.title}</h1>
                <Image 
                alt={`${data.title}`}
                className="object-cover m-2"
                src={`/${data.image}`}
                height={500}
                width={500}
                />
                <div>
                    <h2 className='text-slate-800 text-bold text-2xl'>{data.city}</h2>
                    <p className='text-xl text-slate-500 '>{data.description}</p>
                </div>
            </div>
        </div>
       
    )
}

export default EventPage;