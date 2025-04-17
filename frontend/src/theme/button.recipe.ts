import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    colorPalette: "linkedin.primary", // Updated to use LinkedIn primary blue
  },
  variants: {
    variant: {
      ghost: {
        bg: "transparent",
        _hover: {
          bg: "linkedin.lightGray", // Updated to use LinkedIn light gray
        },
      },
      solid: {
        bg: "linkedin.primary",
        color: "white",
        _hover: {
          bg: "linkedin.dark", // Darker blue on hover
        },
      },
      outline: {
        bg: "transparent",
        borderColor: "linkedin.primary",
        borderWidth: "1px",
        color: "linkedin.primary",
        _hover: {
          bg: "linkedin.lightGray",
        },
      },
    },
  },
})
