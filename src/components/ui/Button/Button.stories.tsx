import Button from './Button';

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => (
  <Button
    className="bg-tomato-normal"
    variant="text"
  >
    <p className="text-3xl font-bold text-white">Texto de ejemplo</p>
  </Button>
)

export const Contained = () => (
  <Button
    frontClassName="bg-tomato-normal"
    backClassName="bg-tomato-dark"
  >
    <p className="text-3xl font-bold text-white">Texto de ejemplo</p>
  </Button>
)

export const Outlined = () => (
  <Button
    variant="outlined"
  >
    <p className="text-3xl font-bold text-tomato-normal">Texto de ejemplo</p>
  </Button>
)