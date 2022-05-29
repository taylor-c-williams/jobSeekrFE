import request from 'superagent'

export async function getUser() {
  const res = await request
    .get('https://polar-reaches-12563.herokuapp.com/api/v1/users/current-user')
    .withCredentials()
  console.log('current user response', res.body)
  return res.body
}
