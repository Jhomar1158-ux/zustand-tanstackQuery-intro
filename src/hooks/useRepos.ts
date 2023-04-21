
import api from '../api/github'
import {useQuery} from '@tanstack/react-query'
import { Root } from './types'

// Para hacer la peticion
async function fetchRepos(){
    const {data} = await api.get<Root>('/users/Jhomar1158-ux/repos')
    return data
}

// Hook de React query
export function useFetchRepositories(){
    // [El nombre de los datos que pedimos], la funcion
    return useQuery(['repos'], fetchRepos)
}