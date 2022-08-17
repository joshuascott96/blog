import Waves from '../components/Waves'

function BlogPost({articles}) {
  return (
    <>
        <div className='bg-[#212525]'>
            <div className='content md:flex md:justify-between pt-16'>
                <div className='sm:mb-0'>
                    <div className='space-x-1.5'>
                        <p className='text-sm uppercase tracking-wide font-bold text-[#A5C9CA]'>{articles.tagOne}</p>
                    </div>
                    <h1 className='rubik pt-3 text-5xl font-bold'>The future of the web</h1>
                    <p className='pt-3 opacity-50 text-lg'>How Blockchain Technology can revolutionalise everything</p>
                </div>
                <div className='pt-10 space-y-2 md:pt-0'>
                    <p className='md:text-right opacity-50 text-xs'>22 July 2022</p>
                    <p className='md:text-right opacity-50 text-xs'>4 min read</p>
                    <div className='md:pt-12'>
                        <p className='inline md:text-right text-xs tag'>2,549 Views</p>
                    </div>
                </div>
            </div>
            <Waves />
        </div>
        <div className='content-blog pt-10 text-lg tracking-wide text-[#d1d1d1]'>
            <h3 className='text-3xl text-[#A5C9CA] rubik pb-4'>Blog Title</h3>
            <div className='space-y-10'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod fugit sunt fuga dolorum earum molestias enim architecto, maxime suscipit atque voluptatum inventore sed consequatur ratione, beatae nesciunt in. Hic!
                Laudantium suscipit earum eveniet est dignissimos natus fugiat?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod fugit sunt fuga dolorum earum molestias enim architecto, maxime suscipit atque voluptatum inventore sed consequatur ratione, beatae nesciunt in. Hic!
                Laudantium suscipit earum eveniet est dignissimos natus fugiat?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod fugit sunt fuga dolorum earum molestias enim architecto, maxime suscipit atque voluptatum inventore sed consequatur ratione, beatae nesciunt in. Hic!
                Laudantium suscipit earum eveniet est dignissimos natus fugiat?
                </p>
            </div>
            <h3 className='mt-10 text-3xl text-[#A5C9CA] rubik pb-4'>Another Blog Title</h3>
            <div className='space-y-10'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod fugit sunt fuga dolorum earum molestias enim architecto, maxime suscipit atque voluptatum inventore sed consequatur ratione, beatae nesciunt in. Hic!
                Laudantium suscipit earum eveniet est dignissimos natus fugiat?
                </p>
            </div>
            <h3 className='mt-10 text-3xl text-[#A5C9CA] rubik pb-4'>One last title</h3>
            <div className='space-y-10'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod fugit sunt fuga dolorum earum molestias enim architecto, maxime suscipit atque voluptatum inventore sed consequatur ratione, beatae nesciunt in. Hic!
                Laudantium suscipit earum eveniet est dignissimos natus fugiat?
                </p>
            </div>
            <p className='text-center font-bold text-[#A5C9CA] mt-10'>Back to articles</p>
  
        </div>
    </>
  )
}

export default BlogPost