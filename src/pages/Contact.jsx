import Waves from '../components/Waves'

function Contact() {
  return (
    <>
      <div className='bg-[#212525]'>
          <div className='content pt-16'>
              <div className='sm:mb-0 text-center'>
                  <h1 className='rubik pt-3 text-5xl font-bold'>Contact Me</h1>
                  <p className='pt-3 opacity-50 text-lg'>Use the link or form below to send me an email, I'll get back to you in due course.</p>
              </div>
          </div>
          <Waves />
      </div>
      <div className='content max-w-2xl mt-10 mb-10 sm:mb-0'>
        <div className='rounded-xl bg-[#212525] text-center shadow-xl p-10'>
          <p className='pt-4 sm:pt-0'>You can email me directly by clicking <span className='font-bold opacity-100 underline'>Here</span>.</p>
          <p className='text-xs pt-2 italic opacity-50'>This will open your default mailing application</p>
          <p className='text-sm pt-10'>Alternatively, you can fill out the form below, please dont skimp on the details!</p>
        </div>
      </div>
      <div className='content max-w-2xl mt-8 mb-10 sm:mb-0'>
        <div className='rounded-xl bg-[#212525] shadow-xl p-10'>
            <form method='POST' action='https://getform.io/f/170646d7-cd35-48b0-8cb2-dd4d0561771c' className='flex flex-col'>
                <label className='text-xs font-bold py-2 text-[#A5C9CA]'>Name</label>
                <input type='text' placeholder='Name' name='name' className='p-3 border-b-4 border-[#395B64] bg-[#212525] focus:outline-none'/>
                <label className='text-xs font-bold mt-3 py-2 text-[#A5C9CA]'>Contact Email</label>
                <input type='email' placeholder='Email' name='email' className='p-3 border-b-4 border-[#395B64] bg-[#212525] focus:outline-none'/>
                <label className='text-xs font-bold mt-3 py-2 text-[#A5C9CA]'>What do you want to talk about?</label>
                <textarea name='message' rows='3' placeholder='Message' className='p-3 border-b-4 border-[#395B64] bg-[#212525] focus:outline-none'></textarea>
                <div className='mt-10 flex justify-end'>
                  <button className='w-64 bg-[#395B64] py-4 rounded-lg shadow-lg font-bold hover:bg-[#304c53] duration-300'>Let's Collaborate</button>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact