import React from 'react'

function Post({ articles }) {

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...' ;
        } else {
            return str
        }
    };
    return (
        <>
            <div className='mb-8 p-6 rounded-xl bg-[#212525] shadow-lg card'>
                <div className='flex justify-between items-center'>
                    <h2 className='tracking-wide font-bold text-xl'>{articles?.title}</h2>
                    <div className='flex space-x-3 items-center'>
                        <div className='flex space-x-1'>
                            {articles?.tagOne? <p className='tag'>{articles?.tagOne}</p> : null }
                            {articles?.tagTwo? <p className='tag'>{articles?.tagTwo}</p> : null }
                            {articles?.tagThree? <p className='tag'>{articles?.tagThree}</p> : null }
                        </div>
                        <p className='text-xs opacity-50'>{articles?.date}</p>
                    </div>
                </div>
                <p className='pt-4 opacity-80 tracking-wide'>{truncateString(articles?.blogContent, 300)}</p>
                <div className='flex justify-between items-center pt-2'>
                    <p className='text-xs opacity-50'>Approx. {articles?.duration} min read</p>
                    <button className='text-sm font-bold'>Read More</button>
                </div>
            </div>
        </>
    )
}

export default Post