import sendRequest from "../lib/sendRequest"

const BASE_API = 'api/wedding'

const service = {
  createRSVP: async (coming, numberOfPeople, rsvpCode) => await sendRequest({
    method: 'POST',
    endpoint: `${BASE_API}/rsvp`,
    body: { coming, numberOfPeople, rsvpCode },
  })
}

export default service;