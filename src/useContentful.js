import { createClient } from 'contentful'

const useContentful = () => {
    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN
    })

    const getAuthors = async () => {
        try {
            const entries = await client.getEntries({})
            const sanitizedEntries = entries.items.map((item) => {
                const blogContent = item.fields.content 
                const title = item.fields.title
                const date = item.fields.postDate
                const tagOne = item.fields.tagOne
                const tagTwo = item.fields.tagTwo
                const tagThree = item.fields.tagThree
                const duration = item.fields.readDuration
                
                return {
                    ...item.fields, blogContent, title, date, tagOne, tagTwo, tagThree, duration
                }
            })
            return sanitizedEntries
        } catch (error) {
            console.log(error)
        }
    }
    return { getAuthors }
}

export default useContentful;