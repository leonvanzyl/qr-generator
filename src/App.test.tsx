import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '@/App'

describe('App', () => {
  it('renders the QRDen heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'QRDen' }),
    ).toBeInTheDocument()
  })

  it('renders the placeholder area for the generator', () => {
    render(<App />)

    expect(
      screen.getByRole('region', { name: 'QR code generator' }),
    ).toBeInTheDocument()
  })
})
