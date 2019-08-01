import { LocalStorage } from 'quasar'

export const initialisseFavorite = (state) => {
  if (LocalStorage.getItem('favorites')) {
    // Replace the state object with the stored item
    // replaceState(
    //   Object.assign(state, localStorage.getItem('favorites'))
    // )
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
