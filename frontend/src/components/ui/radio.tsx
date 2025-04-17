import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react"
import * as React from "react"

export interface RadioProps extends ChakraRadioGroup.ItemProps {
  rootRef?: React.Ref<HTMLDivElement>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(props, ref) {
    const { children, inputProps, rootRef, colorPalette = "linkedin.primary", ...rest } = props
    return (
      <ChakraRadioGroup.Item ref={rootRef} colorPalette={colorPalette} {...rest}>
        <ChakraRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
        <ChakraRadioGroup.ItemIndicator />
        {children && (
          <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
        )}
      </ChakraRadioGroup.Item>
    )
  },
)

export const RadioGroup = (props) => {
  const { colorPalette = "linkedin.primary", ...rest } = props;
  return <ChakraRadioGroup.Root colorPalette={colorPalette} {...rest} />;
}
