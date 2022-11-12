type PlusProps = React.SVGAttributes<SVGSVGElement>;

export default function Plus(props: PlusProps) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <rect x="4" width="2" height="10" rx="1" fill="currentColor"></rect>
      <rect x="10" y="4" width="2" height="10" rx="1" transform="rotate(90 10 4)" fill="currentColor"></rect>
    </svg>
  );
}
