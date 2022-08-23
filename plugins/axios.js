export default function ({ $axios, store }, inject) {
  const api = $axios.create()

  api.setBaseUrl(process.env.API_URL)

  // const token = store.state.auth.token
  // api.setToken(token, 'Bearer')

  api.onResponse((response) => {
    if (response.status === 404) {
      console.log('Oh no it returned a 404')
    }
  })

  inject('api', api)
}
