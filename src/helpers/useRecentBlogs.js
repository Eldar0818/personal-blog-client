import { getRecentBlogs } from "./apiCall";
import { useState, useEffect } from "react";

function useRecentBlogs () {

    const [recentBlogs, setRecentBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const fetchRecentBlogs = async () => {
            setLoading(true)
            const response = await getRecentBlogs()
            setRecentBlogs(response.data)
            setLoading(false)
        }

        fetchRecentBlogs()
    }, [])

    return {
        loading,
        recentBlogs
    }

}

export default useRecentBlogs