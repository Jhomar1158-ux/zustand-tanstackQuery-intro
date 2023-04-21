import {Repository} from '../hooks/types'
import { useFavouriteReposStore } from '../store/favoriteRepos'

type CardProps = {
    repository: Repository
    isFavorite: boolean
}

export const Card = ({repository, isFavorite}: CardProps) => {

    const addFavoriteRepo = useFavouriteReposStore(state => state.addFavoriteRepo)
    const removeFavoriteRepo = useFavouriteReposStore(state => state.removeFavoriteRepo)

    const handleLike = () => {
        if (isFavorite){
            removeFavoriteRepo(repository.id)
            return 
        }
        addFavoriteRepo(repository.id)
    }

    return (
        <div>
            <h1>{repository.name}</h1>
            <button onClick={handleLike}>{ isFavorite ? 'dislike' : 'like'}</button>
        </div>
    )
}
