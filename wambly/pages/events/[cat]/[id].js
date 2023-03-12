import Header from '@/src/components/header/header';
import Footer from '@/src/components/footer/footer';
import SingleEvent from '@/src/components/events/single_event';


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
        <>

            <Header/>
            <SingleEvent data={data}/>
            <Footer/>
        </>
       
    )
}

export default EventPage;