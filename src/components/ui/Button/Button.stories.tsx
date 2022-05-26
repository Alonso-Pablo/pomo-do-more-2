import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => (
  <Button
    className="bg-tomato-regular"
    variant="text"
  >
    <p className="text-white text-3xl font-bold">Texto de ejemplo</p>
  </Button>
)

export const Contained = () => (
  <Button
    frontClassName="bg-tomato-regular"
    backClassName="bg-tomato-dark"
  >
    <p className="text-white text-3xl font-bold">Texto de ejemplo</p>
  </Button>
)

export const Outlined = () => (
  <Button
    variant="outlined"
  >
    <p className="text-tomato-regular text-3xl font-bold">Texto de ejemplo</p>
  </Button>
)