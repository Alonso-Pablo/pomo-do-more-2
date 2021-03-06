interface PomoTargetedProps extends React.SVGAttributes<SVGSVGElement> {}

export default function PomoTargeted(props: PomoTargetedProps) {
  return (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path d="M16.5081 9.97686C16.5081 13.7944 13.0365 16.8892 8.75403 16.8892C4.4716 16.8892 1 13.7944 1 9.97686C1 6.1593 4.4716 5 8.75403 5C13.0365 5 16.5081 6.1593 16.5081 9.97686Z" fill="#FF6347"/>
    <ellipse cx="12.2998" cy="11.6815" rx="1.29981" ry="0.808823" fill="#FF8873"/>
    <rect width="5.13446" height="1.02689" transform="matrix(0.706211 -0.708001 0.706211 0.708001 7.64886 9.50788)" fill="#D35A44"/>
    <rect width="2.46454" height="0.973394" transform="matrix(0.706211 0.708001 -0.706211 0.708001 6.6875 7.16666)" fill="#D35A44"/>
    <path d="M9.70532 8.8808C7.95375 8.72638 6.50532 10.811 6.00006 11.8727C6.6176 11.5188 8.13901 10.6759 9.28427 10.1355C10.4295 9.59499 12.9053 9.91026 14.0001 10.1355C13.2983 9.78158 11.4569 9.03522 9.70532 8.8808Z" fill="#D35A44"/>
    <path d="M7.22111 8.87809C8.5348 8.77515 8.62111 9.16492 9.00006 9.87267C8.5369 9.63676 8.39585 10.0748 7.5369 9.71453C6.67796 9.35422 4.82111 9.5644 4.00006 9.71453C4.52638 9.47861 5.90743 8.98104 7.22111 8.87809Z" fill="#D35A44"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16ZM9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14Z" fill="#41E5A0"/>
    <rect x="8" width="2" height="6" fill="#41E5A0"/>
    <rect x="8" y="12" width="2" height="6" fill="#41E5A0"/>
    <rect x="12" y="10" width="2" height="6" transform="rotate(-90 12 10)" fill="#41E5A0"/>
    <rect y="10" width="2" height="6" transform="rotate(-90 0 10)" fill="#41E5A0"/>
  </svg>
  )
}
