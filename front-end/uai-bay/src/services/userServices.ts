import axios from 'axios'
import { User, UserDTO } from '../store/User/types'
import { getWebServiceURL } from './utils/getURL'


export async function loginService(user: User): Promise<User> {
    const URL = getWebServiceURL('/user/login')
    console.log(user)
    const response = await axios.post(URL, user)

    return response.data as User
}

export async function fetchUsersList(): Promise<User[]> {
    const URL = getWebServiceURL('/user/list')
    const response = await axios.post(URL)

    return response.data.map((el: User) => ({
        ...el,
        id: el.id,
        name: el.name,
        email: el.email,
        password: el.password,
        telephone: el.telephone,
        isAdmin: el.isAdmin,
        exclude: el.exclude,
        logged: el.logged
    }))
}
