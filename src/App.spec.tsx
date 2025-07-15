import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

it('should render navigation', () => {
  render(<App />)

  expect(screen.getByText('Overview')).toBeInTheDocument()
})
