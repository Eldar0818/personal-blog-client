import { getTrendings } from '../helpers/apiCall'
import { useEffect, useState } from 'react'

function useTrendings () {

  const [trendings, setTrendings] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true)
      const response = await getTrendings()
      setTrendings(response.data)
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  return {
    loading,
    trendings
  }

}

export default useTrendings