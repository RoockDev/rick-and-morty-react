import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders Vite + React heading', () => {
    render(<App />)
    expect(screen.getByText(/vite \+ react/i)).toBeTruthy()
  })
})
