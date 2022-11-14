import { getTrendings } from '../helpers/apiCall'
import { useEffect, useState } from 'react'

function useTrendings () {

  const [trendings, setTrendings] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getTrendings()
      setTrendings(response.data)
    }
    fetchBlogs()
  }, [])

  return {
    trendings
  }

}

export default useTrendings