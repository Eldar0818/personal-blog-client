import { getAllBlogs } from "./apiCall";
import { useState, useEffect } from 'react'

function useAllBlogs () {

    const [allBlogs, setAllBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchAllBlogs = async () => {
            setLoading(true)
            const response = await getAllBlogs()
            setAllBlogs(response.data)
            setLoading(false)
        }

        fetchAllBlogs()
    }, [])

    return{
        loading,
        allBlogs
    }
}

export default useAllBlogs