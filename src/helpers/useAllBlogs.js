import { getAllBlogs } from "./apiCall";
import { useState, useEffect } from 'react'

function useAllBlogs () {

    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {
        const fetchAllBlogs = async () => {
            const response = await getAllBlogs()
            setAllBlogs(response.data)
        }

        fetchAllBlogs()
    }, [])

    return{
        allBlogs
    }
}

export default useAllBlogs