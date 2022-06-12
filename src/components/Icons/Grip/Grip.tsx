interface GripProps extends React.SVGAttributes<SVGSVGElement> {
}

export default function Grip(props: GripProps) {
  return (
    <svg
      width="10"
      height="20"
      viewBox="0 0 10 20"
      {...props}
    >
      <rect y="8" width="4" height="4" rx="2"></rect>
      <rect y="16" width="4" height="4" rx="2"></rect>
      <rect width="4" height="4" rx="2"></rect>
      <rect x="6" y="8" width="4" height="4" rx="2"></rect>
      <rect x="6" y="16" width="4" height="4" rx="2"></rect>
      <rect x="6" width="4" height="4" rx="2"></rect>
    </svg>
  );
}
