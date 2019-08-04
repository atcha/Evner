import { register } from 'register-service-worker'
import { Notify } from 'quasar'

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready () {
    console.log('App is being served from cache by a service worker.')
  },

  registered (registration) {
    console.log('Service worker has been registered.')
  },

  cached (registration) {
    console.log('Content has been cached for offline use.')
  },

  updatefound (registration) {
    Notify.create({
      message: 'Une nouvelle mise à jour a été trouvée, pour la télécharger cliquez sur le bouton',
      actions: [
        {
          label: 'Mettre à jour',
          color: 'white',
          timeout: 10000,
          handler: () => {
            window.location.reload(true)
          }
        }
      ]
    })
    console.log('New content is downloading.', registration)
  },

  updated (registration) {
    console.log('New content is available; please refresh.')
  },

  offline () {
    console.log('No internet connection found. App is running in offline mode.')
  },

  error (err) {
    console.error('Error during service worker registration:', err)
  }
})
