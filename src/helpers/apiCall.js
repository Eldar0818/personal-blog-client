import axios from 'axios'

let apiUrl = axios.create({
    baseURL: 'https://sirdash-blog.cyclic.app/api'
})

export const getTrendings = async() => {
    return await apiUrl.get('/trendings')
}

export const getRecentBlogs = async() => {
    return await apiUrl.get('/resent-blogs')
}

export const getAllBlogs = async() => {
    return await apiUrl.get('/all-blogs')
}