import { LocalStorage } from 'quasar'

export const initialisseFavorite = (state) => {
  if (LocalStorage.getItem('favorites')) {
    // Replace the state object with the stored item
    state.favorites = JSON.parse(localStorage.getItem('favorites').replace('__q_strn|', ''))
  }
}

export const addEventToFavorite = (state, id) => {
  state.favorites.push(id)
  LocalStorage.set('favorites', JSON.stringify(state.favorites))
}

export const removeEventToFavorite = (state, id) => {
  const index = state.favorites.indexOf(id)
  if (index > -1) state.favorites.splice(index, 1)

  LocalStorage.set('favorites', JSON.stringify(state.favorites))
}
