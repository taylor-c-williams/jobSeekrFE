import request from 'superagent'

// Sign Up
export async function signUp(username, password) {
  const response = await request
    .post('http://localhost:7890/api/v1/users/register')
    .send({ username, password })
  console.log(response.body)
  return response.body
}

// Log In
export async function logIn(username, password) {
  const response = await request
    .post('http://localhost:7890/api/v1/users/login')
    .send({ username, password })
    .withCredentials()
  console.log(response.body)
  return response.body
}

// Log out
export async function logOut() {
  const response = await request
    .delete(`${process.env.MAIN_URL}/users/login`)
    .withCredentials()
  console.log(response.body)
  return response.body
}
