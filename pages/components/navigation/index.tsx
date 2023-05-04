import { Flex, Box, Link, Image, MenuItem, MenuGroup, Menu, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Menu>
      <Box zIndex="100" bg="brand.grays.800" w="100vw" pos="fixed">
        <Box justifyContent="space-between" w="90vw" m="auto"  p="1rem" maxW="1400px" display={{base:"none", md:"flex"}}>
        <Link href="/"><Image src={`NSLogo.svg`} w="65px" h="65px" alt="Nathan Spinetti Logo" bg="brand.white" transition=".1s ease-in-out" borderRadius="15px" p=".5rem" _hover={{shadow: "md"}}/></Link>
          <Flex>
            <MenuItem fontSize="lg" w="fit-content" m="0 1rem" borderRadius="15px" transition=".1s ease-in-out" color="brand.white" fontWeight="600" _hover={{ bg: "rgba(188, 189, 192, .2)"}} as={Link} href="/projects/">Projects</MenuItem>
            <MenuItem fontSize="lg" w="fit-content" m="0 1rem" borderRadius="15px" transition=".1s ease-in-out" color="brand.white" fontWeight="600" _hover={{ bg: "rgba(188, 189, 192, .2)"}} as={Link} href="/about/">About</MenuItem>
            <MenuItem fontSize="lg" w="fit-content" m="0 1rem" borderRadius="15px" transition=".1s ease-in-out" color="brand.white" fontWeight="600" _hover={{ bg: "rgba(188, 189, 192, .2)"}} as={Link} href="/blog/">Blog</MenuItem>
          </Flex>
        </Box>

        <Box display={{base:"flex", md:"none"}} justifyContent="space-between" w="90vw" m="auto"  p="1rem">
        <Link href="/"><Image src={`../NSLogo.svg`} w="50px" h="50px" alt="Nathan Spinetti Logo" bg="brand.white" transition=".1s ease-in-out" borderRadius="15px" p=".5rem" _hover={{shadow: "md"}}/></Link>
        <IconButton onClick={onOpen} colorScheme="transparent" h="50px" w="50px"
              icon={<HamburgerIcon w="30px" h="30px" />}
              aria-label={'Toggle Navigation'}
            />
            
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="brand.gray" pr="2rem" pt=".4rem">
            <DrawerBody pt="1rem">
            <IconButton onClick={onClose} colorScheme="transparent" w="100%" justifyContent="end"
              icon={<CloseIcon w="20px" h="20px" mr=".5rem" />}
              aria-label={'Toggle Navigation'}
            />
            <Box>
              <MenuItem fontSize="lg" w="fit-content" mb="1rem" color="brand.white" fontWeight="600" as={Link} href="/projects/">Projects</MenuItem>
              <MenuItem fontSize="lg" w="fit-content" mb="1rem" color="brand.white" fontWeight="600" as={Link} href="/about/">About</MenuItem>
              <MenuItem fontSize="lg" w="fit-content" mb="1rem" color="brand.white" fontWeight="600" as={Link} href="/blog/">Blog</MenuItem>
            </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        </Box>

      </Box>
    </Menu>
  );
};

export default Navigation;