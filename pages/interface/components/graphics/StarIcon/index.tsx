import { SVGProps } from 'react'

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={3}
      d="M8.438 3.25s-1.266 5.658 0 14.625m-5.496-6.86c4.103-.797 9.133 0 9.133 0m-7.234 4.787C8.217 8.226 16.13 2.118 16.13 2.118M2.063 4.906c3.467 4.736 13.198 12.2 13.198 12.2"
    />
  </svg>
)

export default StarIcon
