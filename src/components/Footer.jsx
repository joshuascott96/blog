import { MdOutlineEmail } from 'react-icons/md'
function Footer() {
  return (
    <div className='bg-[#212525] pb-10'>
      <div className='content flex justify-between pt-10 sm:pt-0'>
        <div>
          <h1 className='font-bold text-2xl'>j<span className='font-light text-[#A5C9CA]'>r</span>scott<span className='text-[#A5C9CA]'>.</span></h1>
          <p className='text-sm opacity-50 pt-1'>Thanks for visiting!</p>
          <div className='mt-10'>
            <h3 className='tracking-wide highlight inline text-sm sm:text-base'>Subscribe to my Newsletter</h3>
            <p className='text-xs sm:text-sm opacity-50'>No spam, you have my word!</p>
            <div className='flex items-center border-b-4 border-[#395B64] mt-4'>
              <p className='bg-[#395B64] rounded-t-md p-2'><MdOutlineEmail /></p>
              <input className='pl-2 text-sm w-full bg-[#212525] focus:outline-none' type='text' placeholder='Email'></input>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-x-20'>
          <div className=''>
            <h3 className='uppercase text-xs font-bold tracking-widest'>Links</h3>
            <ul className='text-xs space-y-3 pt-3 opacity-50'>
              <li>Posts</li>
              <li>Contact</li>
              <li>My Portfolio</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className='uppercase text-xs font-bold tracking-widest'>Socials</h3>
            <ul className='text-xs space-y-3 pt-3 opacity-50'>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className='col-span-2 text-[0.6rem] sm:text-xs opacity-50 tracking-wide mt-10'>
            <p>© 2022 jrscott WebDev. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer 