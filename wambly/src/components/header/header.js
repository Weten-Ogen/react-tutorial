export  const Header = () => {
    return(
        <nav className='flex  justify-end  w-[80%] my-2 mx-auto text-center text-red-600'>
          <a className='px-2 text-md' href='/'>Home</a>
          <a className='px-2 text-md' href='/about-us'>About-us</a>
          <a className='px-2 text-md' href='/events'>Events</a>
      </nav>
    )
}
export default Header;