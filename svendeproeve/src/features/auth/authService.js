import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users/'

const getUserFromId = async (id) => {
    const response = await axios.get(API_URL + 'getuser/' + id)

    return response.data
}

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL,userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL+'login',userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = async() => {
    localStorage.removeItem('user')
}

const authService = {
    register, logout, login, getUserFromId
}

export default authService