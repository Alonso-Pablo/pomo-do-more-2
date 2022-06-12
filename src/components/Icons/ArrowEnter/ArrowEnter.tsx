interface ArrowEnterProps extends React.SVGAttributes<SVGSVGElement> {}

export default function ArrowEnter(props: ArrowEnterProps) {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      {...props}
    >
      <path
        d="M8.99997 1C8.99997 0.447715 9.44768 0 9.99997 0C10.5523 0 11 0.447715 11 1V9C11 9.55228 10.5523 10 9.99997 10C9.44768 10 8.99997 9.55229 8.99997 9V1Z"
        fill="currentColor"
      ></path>
      <path
        d="M9.99997 8C10.5523 8 11 8.44772 11 9C11 9.55229 10.5523 10 9.99997 10L1.99997 10C1.44769 10 0.999969 9.55228 0.999969 9C0.999969 8.44771 1.44769 8 1.99997 8L9.99997 8Z"
        fill="currentColor"
      ></path>
      <rect
        x="2"
        y="10.4"
        width="2"
        height="4"
        rx="1"
        transform="rotate(-135 2 10.4)"
        fill="currentColor"
      ></rect>
      <rect
        x="0.600006"
        y="9"
        width="2"
        height="4"
        rx="1"
        transform="rotate(-45 0.600006 9)"
        fill="currentColor"
      ></rect>
    </svg>
  )
}
