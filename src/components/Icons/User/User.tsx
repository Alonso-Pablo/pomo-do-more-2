type UserProps = React.SVGAttributes<SVGSVGElement>;

export default function User(props: UserProps) {
  return (
    <svg width="18" height="25" viewBox="0 0 18 25" fill="none" {...props}>
      <path
        fill="currentColor"
        d="M18 20.3683C18 25.3181 13.9706 24.8495 9 24.8495C4.02944 24.8495 0 25.3181 0 20.3683C0 15.4185 4.02944 13.3975 9 13.3975C13.9706 13.3975 18 15.4185 18 20.3683Z"
      />
      <ellipse fill="currentColor" cx="9" cy="6.10238" rx="5" ry="5.21084" />
    </svg>
  );
}
