export function getByHours (state) {
  return state.events.reduce((h, event) => Object.assign(h, { [event.hour]: (h[event.hour] || []).concat({ id: event.id, title: event.title, resume: event.resume, content: event.content, speaker: event.speaker, room: event.room, type: event.type }) }), {})
}
