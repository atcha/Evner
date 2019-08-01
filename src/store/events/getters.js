export function getByHours (state) {
  return state.events.reduce((h, event) => Object.assign(h, { [event.hour]: (h[event.hour] || []).concat({ id: event.id, title: event.title, resume: event.resume, content: event.content, speaker: event.speaker, room: event.room, type: event.type }) }), {})
}

export function getByDayByHours (state) {
  return day => state.events.filter((event) => event.day === day).reduce((h, event) => Object.assign(h, { [event.hour]: (h[event.hour] || []).concat({ id: event.id, title: event.title, resume: event.resume, content: event.content, speaker: event.speaker, room: event.room, type: event.type }) }), {})
}

export function getBySpeaker (state) {
  return speaker => state.events.filter((event) => event.speaker === speaker)
}

export function getByids (state) {
  return ids => state.events.filter((event) => {
    return ids.find(id => event.id === id)
  })
}
