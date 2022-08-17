
import Waves from './Waves'

function Hero() {
  return (
    <div className='bg-[#212525]'>
        <div className='content flex text-center'>
            <div className='mt-16 sm:mb-0 rubik mx-auto max-w-xl'>
                <p className='pt-2 text-base opacity-50'>Hello there,</p>
                <h1 className='text-4xl sm:text-6xl font-bold'> Welcome to my Web Development Blog</h1>
            </div>
        </div>
        <Waves />
    </div>
  )
}

export default Hero