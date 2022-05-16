import request from 'superagent'

export async function getUser() {
  const res = await request.get(`${process.env.MAIN_URL}/users/current-user`).withCredentials()
  console.log("current user response", res.body)
  return res.body
}