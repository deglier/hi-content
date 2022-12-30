import { SVGProps } from 'react'

const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={3}
      d="M2.333 5.372c1.111 1.062 3.467 3.436 4 4.427C7 11.04 10.5 7.143 11.667 5.372"
    />
  </svg>
)

export default ChevronDown
