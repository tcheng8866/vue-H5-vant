const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    Object.keys(state).forEach((item, index) => {
      window.localStorage.setItem(item, JSON.stringify(state[item]))
    })
  })
}

export default [localStoragePlugin]
