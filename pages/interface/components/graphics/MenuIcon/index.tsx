import { SVGProps } from 'react'

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 20" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M33 1.89c-9.778-.167-29.867-.4-32 0m32 8.22c-9.778-.166-29.867-.4-32 0m0 8.221c7.333-.166 22.4-.4 24 0"
    />
  </svg>
)

export default MenuIcon
