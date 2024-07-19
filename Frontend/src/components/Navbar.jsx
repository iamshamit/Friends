import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue, } from "@chakra-ui/react"
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "./CreateUserModal";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW={"900px"}>
      <Box 
        px={4}
        my={4}
        borderRadius={5}
        background={useColorModeValue("gray.200","gray.700")}
      >
        <Flex 
          h="16"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* Left Side */}
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={3}
            display={{ base:"none", sm:"flex"}}
          >
            <img src="/react.png" alt="react logo" width={45} height={45}/>
            <Text
              fontSize={"40px"}
            >+</Text>
            <img src="/python.png" alt="python logo" width={45} height={45}/>
            <Text
              fontSize={"40px"}
            >=</Text>
            <img src="/explode.png" alt="head expload emoji logo" width={40} height={40}/>
          </Flex>
          {/* Right Side */}
          <Flex
            gap={3}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
              <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{base:"none", md:"block"}}>
                BFFship 🔥
              </Text>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
              </Button>
              <CreateUserModal />
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

export default Navbar
