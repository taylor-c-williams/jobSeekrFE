import request from 'superagent'

export async function getUser() {
  const res = await request
    .get('http://localhost:7890/api/v1/users/current-user')
    .withCredentials()
  console.log('current user response', res.body)
  return res.body
}
