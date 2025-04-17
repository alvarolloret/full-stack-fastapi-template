"use client"

import type { HTMLChakraProps, RecipeProps } from "@chakra-ui/react"
import { createRecipeContext } from "@chakra-ui/react"

export interface LinkButtonProps
  extends HTMLChakraProps<"a", RecipeProps<"button">> {
  colorPalette?: string;
}

const { withContext } = createRecipeContext({ 
  key: "button",
  defaultProps: {
    colorPalette: "linkedin.primary"
  }
})

// Replace "a" with your framework's link component
export const LinkButton = withContext<HTMLAnchorElement, LinkButtonProps>("a")
