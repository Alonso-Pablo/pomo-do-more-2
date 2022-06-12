interface GearProps extends React.SVGAttributes<SVGSVGElement> {}

export default function Gear(props: GearProps) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
      <path fill="currentColor" d="M10.6786 0H15.3214L16.25 4.87497H9.75L10.6786 0Z" />
      <path fill="currentColor" d="M15.3214 26L10.6786 26L9.75 21.125L16.25 21.125L15.3214 26Z" />
      <path fill="currentColor" d="M23.6751 20.7097L20.7098 23.675L16.4398 20.5911L20.5912 16.4397L23.6751 20.7097Z" />
      <path fill="currentColor" d="M2.32487 5.29037L5.29016 2.3251L9.56017 5.40898L5.40877 9.56035L2.32487 5.29037Z" />
      <path fill="currentColor" d="M20.7099 2.32511L23.6752 5.29038L20.5913 9.56036L16.4399 5.40899L20.7099 2.32511Z" />
      <path fill="currentColor" d="M5.29012 23.6751L2.32484 20.7098L5.40873 16.4398L9.56013 20.5912L5.29012 23.6751Z" />
      <path fill="currentColor" d="M26 10.6786L26 15.3215L21.125 16.25L21.125 9.75006L26 10.6786Z" />
      <path fill="currentColor" d="M1.21909e-07 15.3214L7.31454e-07 10.6785L4.875 9.74998L4.875 16.2499L1.21909e-07 15.3214Z" />
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M13 22.7499C18.3848 22.7499 22.75 18.3847 22.75 13C22.75 7.61526 18.3848 3.25006 13 3.25006C7.61522 3.25006 3.25 7.61526 3.25 13C3.25 18.3847 7.61522 22.7499 13 22.7499ZM13 17.0624C15.2437 17.0624 17.0625 15.2436 17.0625 12.9999C17.0625 10.7563 15.2437 8.93744 13 8.93744C10.7563 8.93744 8.9375 10.7563 8.9375 12.9999C8.9375 15.2436 10.7563 17.0624 13 17.0624Z" />
    </svg>
  )
}
