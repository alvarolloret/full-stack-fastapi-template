import { createSystem, defaultConfig } from "@chakra-ui/react"
import { buttonRecipe } from "./theme/button.recipe"

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      fontSize: "16px",
    },
    body: {
      fontSize: "0.875rem",
      margin: 0,
      padding: 0,
    },
    ".main-link": {
      color: "ui.main",
      fontWeight: "bold",
    },
  },
  theme: {
    tokens: {
      colors: {
        linkedin: {
          primary: { value: "#0A66C2" },
          light: { value: "#70B5F9" },
          green: { value: "#057642" },
          orange: { value: "#E7A33E" },
          dark: { value: "#004182" },
          black: { value: "#000000" },
          white: { value: "#FFFFFF" },
          darkGray: { value: "#333333" },
          mediumGray: { value: "#86888A" },
          lightGray: { value: "#F3F2EF" },
        },
        ui: {
          main: { value: "#0A66C2" }, // Changed from #009688 to LinkedIn primary blue
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
})
