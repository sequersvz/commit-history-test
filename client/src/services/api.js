import axios from "axios"

const API_URL = "http://localhost:4000"

export const getCommits = (page = 1, perPage = 10) => {
    return axios.get(`${API_URL}/github/commits?page=${page}&per_page=${perPage}`)
}