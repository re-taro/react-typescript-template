/* eslint-disable init-declarations */

import 'twin.macro'
import { css as cssImport } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'
import styledImport from '@emotion/styled'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSInterpolation
    tw?: string
  }
  // The inline svg css prop
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore, from the official exmaple
  // eslint-disable-next-line unicorn/prevent-abbreviations, @typescript-eslint/no-unused-vars
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSInterpolation
    tw?: string
  }
}

/* eslint-enable */
