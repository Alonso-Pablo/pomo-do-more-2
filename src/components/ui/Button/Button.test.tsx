import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  
  it('should render Button component', () => {
    render(<Button />)
    expect(screen.getByRole('button'))
  })

  it('should call onClick function', () => {
    const mockFn = jest.fn()

    render(<Button onClick={mockFn}/>)
    fireEvent.click(screen.getByRole('button'))
    debugger
    expect(mockFn).toHaveBeenCalled()
  })
})
