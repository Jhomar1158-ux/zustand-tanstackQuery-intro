import { create } from "zustand";
import { persist } from 'zustand/middleware'

type favoriteReposState = {
    favoriteRepoIds: number[]
    addFavoriteRepo: (id:number) => void
    removeFavoriteRepo: (id: number) => void
}

export const useFavouriteReposStore = create(persist<favoriteReposState>((set)=> ({
    favoriteRepoIds:[],
    addFavoriteRepo: (id: number) => {
        set((state) => ({
            favoriteRepoIds: [...state.favoriteRepoIds, id]
        }))
    },
    removeFavoriteRepo: (id: number) => set(state => ({
        favoriteRepoIds: state.favoriteRepoIds.filter(repoId => repoId !== id)
    })),
    }),
    {
        name:'reposUnique',
        getStorage: () => sessionStorage,
    }
))