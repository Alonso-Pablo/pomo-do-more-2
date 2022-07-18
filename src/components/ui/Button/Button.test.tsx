import { render, screen } from '@testing-library/react'
import Button from './Button'
import clsx from 'clsx'

jest.mock('clsx', (...className) => className)

describe('<Button />', () => {
  
  it('should render Button', () => {
    const { container } = render(<Button />)
    expect(screen.getByRole('button'))
  })
})