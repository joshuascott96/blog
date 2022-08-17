import { Link } from 'react-router-dom'
import Post from '../components/Post'
import Hero from '../components/Hero'

function Home({ articles }) {
    return (
        <>
            <Hero />
            <div className='content pt-10'>
                <div>
                    <h3 className='font-bold uppercase text-sm tracking-widest px-2 py-1 mb-6 text-[#A5C9CA]'>Recently Published</h3> 
                    <Link to='/post/:postId'>
                        {articles.slice(0,2).map((articles, id) => (
                            <Post key={id} articles={articles} />
                        ))}
                    </Link>
                </div>
                <h3 className='font-bold uppercase text-sm tracking-widest px-2 py-1 mb-6 text-[#A5C9CA]'>All Articles</h3> 
                        {articles.map((articles, id) => (
                            <Link to='/post/:postId'>
                                <Post key={id} articles={articles} />
                            </Link>
                        ))}
                <p className='text-center font-bold text-[#A5C9CA] mt-4'>Show More Articles</p>
            </div>
        </>
    )
}

export default Home