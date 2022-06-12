interface OptionVerticalProps extends React.SVGAttributes<SVGSVGElement> {}

export default function OptionVertical(props: OptionVerticalProps) {
  return (
    <svg
      width="4"
      height="20"
      viewBox="0 0 4 20"
      {...props}
    >
      <rect y="8" width="4" height="4" rx="2"></rect>
      <rect y="8" width="4" height="4" rx="2"></rect>
      <rect y="16" width="4" height="4" rx="2"></rect>
      <rect y="16" width="4" height="4" rx="2"></rect>
      <rect width="4" height="4" rx="2"></rect>
      <rect width="4" height="4" rx="2"></rect>
    </svg>
  );
}
