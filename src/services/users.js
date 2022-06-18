import request from 'superagent'

export async function getUser() {
  const res = await request
    .get('https://polar-reaches-12563.herokuapp.com/api/v1/users/current-user')
    .withCredentials()
  console.log('current user response', res.body)
  return res.body
}

export async function postJob(job) {
  const response = await request
    .post(`https://polar-reaches-12563.herokuapp.com/api/v1/jobs`)
    .send(job)
    .withCredentials()
  return response.body
}

export async function getAllUserJobs(userId) {
  const response = await request
    .get(`https://polar-reaches-12563.herokuapp.com/api/v1/jobs`)
    .withCredentials()
  return response.body
}

export async function getAllUserWishlistJobs(userId) {
  const response = await request
    .get(`https://polar-reaches-12563.herokuapp.com/api/v1/jobs/wishlist`)
    .withCredentials()
  return response.body
}

export async function getAllUserAppliedJobs(userId) {
  const response = await request
    .get(`https://polar-reaches-12563.herokuapp.com/api/v1/jobs/applied`)
    .withCredentials()
  return response.body
}
