import { marked } from 'marked'
import { ElementType } from 'react'

type MakeHTmlProps = {
  source: string
  as: ElementType
  inline?: boolean
  className?: string
  id?: string
}

export default function MakeHTML({ source, as, inline = false, ...props }: MakeHTmlProps) {
  const Comp = as

  return (
    <Comp
      dangerouslySetInnerHTML={{
        __html: inline ? marked.parseInline(source) : marked.parse(source),
      }}
      {...props}
    />
  )
}
