import { Card } from './componets/Card'
import {useFetchRepositories} from './hooks/useRepos'
import { useFavouriteReposStore } from './store/favoriteRepos'


export const App = () => {
  
  const {data, isLoading} = useFetchRepositories()

  const {favoriteRepoIds, addFavoriteRepo, removeFavoriteRepo} = useFavouriteReposStore()

  if(isLoading) return <div>Loading...</div>

  return (
    <div>
      {data?.map(repo => (
        <Card
          key={repo.id}
          repository={repo}
          isFavorite={favoriteRepoIds.includes(repo.id)}
        />
      ))}
    </div>
  )
}
