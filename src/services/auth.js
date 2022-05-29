import request from 'superagent'

// Sign Up
export async function signUp(username, password) {
  const response = await request
    .post('https://polar-reaches-12563.herokuapp.com/api/v1/users/register')
    .send({ username, password })
  console.log(response.body)
  return response.body
}

// Log In
export async function logIn(username, password) {
  const response = await request
    .post('https://polar-reaches-12563.herokuapp.com/api/v1/users/login')
    .send({ username, password })
    .withCredentials()
  if ((response.body = '401')) console.log(response.body)
  return response.body
}

// Log out
export async function logOut() {
  const response = await request
    .delete('https://polar-reaches-12563.herokuapp.com/api/v1/users/login')
    .withCredentials()
  console.log(response.body)
  return response.body
}
