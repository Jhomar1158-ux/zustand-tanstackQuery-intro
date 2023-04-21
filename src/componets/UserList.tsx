
import {useQuery} from '@tanstack/react-query'
import { Task, User } from '../hooks/types'

const fetchUser = async() =>{
    const res = await fetch('https://dummyjson.com/todos')
    return await res.json()
}

export const UserList = () => {

    const {data, isLoading} = useQuery(['users'], fetchUser);
    const data1: Task[] = data?.todos

    if(isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1>
                UserList
            </h1>
            <ul>
                {data1.map((user) => (
                    <li
                    key={user.id}
                    >
                    {user.todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}
