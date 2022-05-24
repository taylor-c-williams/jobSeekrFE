import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { UserProvider } from '../../context/UserContext'
import Main from './Main'

it.skip('renders the Main view & login component accurately', async () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <Main login={true} />
      </UserProvider>
    </MemoryRouter>
  )
  const text = await screen.findByText("Don't have an account?")
  expect(container).toMatchSnapshot()
  expect(text).toBeInTheDocument()
})

it.skip('renders the Main view & sign up component accurately', async () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <Main login={false} />
      </UserProvider>
    </MemoryRouter>
  )
  const text = await screen.findByText('Already have an account?')
  expect(container).toMatchSnapshot()
  expect(text).toBeInTheDocument()
})
