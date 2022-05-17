import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Main from './Main'

it('renders the Main view & login component accurately', async () => {
  const { container } = render(
    <MemoryRouter>
      <Main login={true} />
    </MemoryRouter>
  )
  const text = await screen.findByText("Don't have an account?")
  expect(container).toMatchSnapshot()
  expect(text).toBeInTheDocument()
})

it('renders the Main view & sign up component accurately', async () => {
  const { container } = render(
    <MemoryRouter>
      <Main login={false} />
    </MemoryRouter>
  )
  const text = await screen.findByText('Already have an account?')
  expect(container).toMatchSnapshot()
  expect(text).toBeInTheDocument()
})
