import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"
import { FaUserAstronaut } from "react-icons/fa"
import { FiLogOut, FiUser } from "react-icons/fi"

import useAuth from "@/hooks/useAuth"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu"

const UserMenu = () => {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    logout()
  }

  return (
    <>
      {/* Desktop */}
      <Flex>
        <MenuRoot>
          <MenuTrigger asChild p={2}>
            <Button 
              data-testid="user-menu" 
              variant="solid" 
              maxW="sm" 
              truncate
              colorPalette="linkedin.dark"
              bg="white"
              color="linkedin.dark"
              borderWidth="1px"
              borderColor="white"
              _hover={{
                bg: "linkedin.lightGray"
              }}
            >
              <FaUserAstronaut fontSize="18" color="#004182" />
              <Text ml={2}>{user?.full_name || "User"}</Text>
            </Button>
          </MenuTrigger>

          <MenuContent>
            <Link to="settings">
              <MenuItem
                closeOnSelect
                value="user-settings"
                gap={2}
                py={2}
                style={{ cursor: "pointer" }}
                _hover={{
                  bg: "linkedin.lightGray"
                }}
              >
                <FiUser fontSize="18px" color="#0A66C2" />
                <Box flex="1">My Profile</Box>
              </MenuItem>
            </Link>

            <MenuItem
              value="logout"
              gap={2}
              py={2}
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
              _hover={{
                bg: "linkedin.lightGray"
              }}
            >
              <FiLogOut color="#0A66C2" />
              Log Out
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </Flex>
    </>
  )
}

export default UserMenu
