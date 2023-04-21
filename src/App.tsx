import { Card } from './componets/Card'
import { UserList } from './componets/UserList'
import {useFetchRepositories} from './hooks/useRepos'
import { useFavouriteReposStore } from './store/favoriteRepos'


export const App = () => {

  return (
    <div>
      <UserList/>
    </div>
  )
}
// {data?.map(repo => (
//   <Card
//     key={repo.id}
//     repository={repo}
//     isFavorite={favoriteRepoIds.includes(repo.id)}
//   />
// ))}