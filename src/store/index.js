import Vue from 'vue'
import Vuex from 'vuex'

// we first import the module
import siteInfo from './siteInfo'
import events from './events'
import speaker from './speaker'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // then we reference it
      siteInfo,
      events,
      speaker
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  /*
    if we want some HMR magic for it, we handle
    the hot update like below. Notice we guard this
    code with "process.env.DEV" -- so this doesn't
    get into our production build (and it shouldn't).
  */

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./siteInfo'], () => {
      const newSiteInfo = require('./siteInfo').default
      Store.hotUpdate({ modules: { siteInfo: newSiteInfo } })
    })
    module.hot.accept(['./events'], () => {
      const newEvents = require('./events').default
      Store.hotUpdate({ modules: { events: newEvents } })
    })
    module.hot.accept(['./speaker'], () => {
      const newSpeaker = require('./speaker').default
      Store.hotUpdate({ modules: { speaker: newSpeaker } })
    })
  }

  return Store
}
