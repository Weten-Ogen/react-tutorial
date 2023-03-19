import Image from 'next/image';


export const  SingleEvent = ({data}) =>{
    return (
        <div className='object-contain px-2 h-[100vh]'>
                <h1 className='underline text-green-600 text-center text-3xl p-2 capitalize'>{data.title}</h1>
                <Image 
                alt={`${data.title}`}
                className="object-cover m-2 w-[50%] h-[50vh]"
                src={`/${data.image}`}
                height={500}
                width={500}
                />
                <div>
                    <h2 className='text-slate-800 text-bold text-2xl'>{data.city}</h2>
                    <p className='text-xl text-slate-500 '>{data.description}</p>
                </div>
                <div className='mt-5'>
                    <label className='text-slate-400 '>Get Registered for this event</label>
                    <input 
                    className='text-[24px] border py-[8px] px-[16px] outline-none rounded-md  hover:ring-slate-200 hover:ring-1 mx-2 text-sm'
                    type='email'
                    id='email' 
                    placeholder=' please enter your email here'/>
                    <button 
                    className='btn m-1 px-[16px] text-[24px] py-[8px] text-red-600 bg-slate-200 rounded-md border outline-none  hover:text-slate-200 hover:bg-red-600 normal-case tracking-wide' type='submit'>
                    Submit
                    </button>
                </div>
            </div>
    )
}

export default SingleEvent;