import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaHamburger, FaMoon, FaTimes} from 'react-icons/fa'

function Navbar() {
    
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <>
        <div className='fixed w-full bg-[#212525] py-10 z-10'>
            <div className='content flex justify-between items-center'>
                <div>
                    <Link to='/'><h1 className='font-bold text-2xl relative z-10'>j<span className='font-light text-[#A5C9CA]'>r</span>scott<span className='text-[#A5C9CA]'>.</span></h1></Link>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex space-x-6 tracking-widest font-bold text-[0.7rem] cursor-pointer uppercase'>
                        <NavLink to='/' className={({isActive}) => (isActive ? 'nav-animate-active' : 'nav-animate')}><li>Home</li></NavLink>
                        <NavLink to='/posts' className={({isActive}) => (isActive ? 'nav-animate-active' : 'nav-animate')}><li>Posts</li></NavLink>
                        <NavLink to='/socials' className={({isActive}) => (isActive ? 'nav-animate-active' : 'nav-animate')}><li>Socials</li></NavLink>
                        <NavLink to='/contact' className={({isActive}) => (isActive ? 'nav-animate-active' : 'nav-animate')}><li>Contact</li></NavLink>
                    </ul>
                </div>
                <div>
                    <div className='hidden md:flex'>
                        <button className='text-[#A5C9CA]'><FaMoon /></button>
                    </div>
                    
                    <div onClick={handleClick} className='md:hidden relative z-10'>
                        <div className='text-[#A5C9CA] cursor-pointer'>
                        {!nav ? <FaHamburger size={25} /> : <FaTimes size={25}/>}
                        </div>
                    </div>
                    <div>
                        <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen blur-overlay flex flex-col justify-center items-center uppercase font-bold text-xl tracking-wider space-y-6'}>
                        <NavLink to='/' className={({isActive}) => (isActive ? 'nav-animate-active' : 'nav-animate')}><li>Home</li></NavLink>
                        <NavLink to='/posts' className={({isActive}) => (isActive ? 'nav-animate-active' : 'nav-animate')}><li>Posts</li></NavLink>
                        <NavLink to='/socials' className={({isActive}) => (isActive ? 'nav-animate-active' : 'nav-animate')}><li>Socials</li></NavLink>
                            <NavLink to='/contact' className={({isActive}) => (isActive ? 'nav-animate-active' : 'nav-animate')}><li className='px-3 py-2'>Contact</li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='pb-20'></div>
        </>
    )
}

export default Navbar