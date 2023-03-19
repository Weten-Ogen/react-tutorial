import Link from "next/link";
import Image from "next/image";

export const HomePage = ({data}) => {
    return ( 
    <main className='my-5 px-3'>
      {
        data.map(ev => 
          <a
           key={ev.id} 
           href={`/events/${ev.id}`}
           >
            <Image 
            src={`/${ev.image}`} 
            alt={ev.id}
            width={700}
            height={200}
            className='py-5  object-cover h-[500px] rounded-md'
            />

            <h2 className='text-2xl px-3 font-bold text-leading underline text-[blue]'>{ev.title}</h2>
            <p className='max-w-[500px] '>{ev.description}</p>
          </a>
        )
      }
    </main>)
}

export default HomePage;