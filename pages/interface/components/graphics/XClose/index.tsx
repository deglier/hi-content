import { SVGProps } from 'react'

const XClose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M18.696 18.784C14.883 14.838 7.006 6.775 6 6.088"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6.088 18.784C9.9 14.838 17.778 6.775 18.784 6.088"
    />
  </svg>
)

export default XClose
