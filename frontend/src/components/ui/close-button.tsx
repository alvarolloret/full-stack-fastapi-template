import type { IconButtonProps } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import * as React from "react"
import { LuX } from "react-icons/lu"

export interface CloseButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    const { colorPalette = "linkedin.primary", ...rest } = props
    return (
      <IconButton
        ref={ref}
        aria-label="Close"
        variant="ghost"
        colorPalette={colorPalette}
        {...rest}
      >
        <LuX />
      </IconButton>
    )
  },
)
