import axios from 'axios'
import { User, UserDTO } from '../store/User/types'
import { env } from '../env/env'
import { getWebServiceURL } from './utils/getURL'


export async function loginService(userDTO: UserDTO): Promise<User> {
    const URL = getWebServiceURL('/user/login')
    const response: User = await axios.post(URL, userDTO)

    return response
}

export async function fetchUsersList(): Promise<User[]> {
    const URL = getWebServiceURL('/user/list')
    const response: User[] = await axios.get(URL)

    return response
}
