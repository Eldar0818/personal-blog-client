import { getRecentBlogs } from "./apiCall";
import { useState, useEffect } from "react";

function useRecentBlogs () {

    const [recentBlogs, setRecentBlogs] = useState([])

    useEffect(()=> {
        const fetchRecentBlogs = async () => {
            const response = await getRecentBlogs()
            setRecentBlogs(response.data)
        }

        fetchRecentBlogs()
    }, [])

    return {
        recentBlogs
    }

}

export default useRecentBlogs