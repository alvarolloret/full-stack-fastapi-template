import type { BoxProps, InputElementProps } from "@chakra-ui/react"
import { Group, InputElement } from "@chakra-ui/react"
import * as React from "react"

export interface InputGroupProps extends BoxProps {
  startElementProps?: InputElementProps
  endElementProps?: InputElementProps
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  children: React.ReactElement<InputElementProps>
  startOffset?: InputElementProps["paddingStart"]
  endOffset?: InputElementProps["paddingEnd"]
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const {
      startElement,
      startElementProps,
      endElement,
      endElementProps,
      children,
      startOffset = "6px",
      endOffset = "6px",
      colorPalette = "linkedin.primary",
      ...rest
    } = props

    const child =
      React.Children.only<React.ReactElement<InputElementProps>>(children)

    return (
      <Group ref={ref} colorPalette={colorPalette} {...rest}>
        {startElement && (
          <InputElement pointerEvents="none" colorPalette={colorPalette} {...startElementProps}>
            {startElement}
          </InputElement>
        )}
        {React.cloneElement(child, {
          ...(startElement && {
            ps: `calc(var(--input-height) - ${startOffset})`,
          }),
          ...(endElement && { pe: `calc(var(--input-height) - ${endOffset})` }),
          colorPalette: colorPalette,
          ...children.props,
        })}
        {endElement && (
          <InputElement placement="end" colorPalette={colorPalette} {...endElementProps}>
            {endElement}
          </InputElement>
        )}
      </Group>
    )
  },
)
