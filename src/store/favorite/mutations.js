export const addEventToFavorite = (state, id) => {
  state.favorites.push(id)
}

export const removeEventToFavorite = (state, id) => {
  const index = state.favorites.indexOf(id)
  if (index > -1) state.favorites.splice(index, 1)
}
