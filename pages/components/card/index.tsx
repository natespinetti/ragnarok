import { Image, Box, Text, Link, Container, Button } from '@chakra-ui/react'
import type { TypeCard } from '../../api/generated-types';
import { useState } from 'react';
 
export const Card = ({ fields }: TypeCard) => {
  const { link, linkText, ctaTarget, number, image, textOverImage, headline, summary, whichSide } = fields || {};

  const [isVisible, setIsVisible] = useState(false);

  function over(e: any) {
    setIsVisible(true);
  }
  function out(e: any) {
    setIsVisible(false);
  }

  return (
    <Container w={['90%', '80%']} maxW="1200px" p="2rem 0">
      <Box display={{ lg:'block', xl:'grid'}} w="100%" alignItems="center" gridTemplateColumns="1fr 1fr" gridGap="3rem">
          <Box order={whichSide ? "1" : "2"} pos="relative">
            <Link isExternal={ctaTarget} href={link} w="100%" display="flex" justifyContent="center" alignItems="center" onMouseOver={over} onMouseOut={out} mb={{base: '6', xl: '0'}}>
              <Box borderRadius="25px" pos="absolute" display="flex" w="100%" h="100%" transition=".4s ease-in-out" bg="brand.gray" opacity={isVisible ? ".8" : ".5"}></Box>
              <Text lineHeight="1" pos="absolute" fontSize={{ base: "4xl", md: "6xl"}} fontWeight="900" color="brand.white" borderLeftColor="brand.yellow !important" borderLeft="5px solid" pl="5">{textOverImage}</Text>
              <Text lineHeight="1" pos="absolute" transition=".4s ease-in-out" transform={isVisible ? "translateY(-85%)" : "translateY(0)"} visibility={isVisible ? "visible" : "hidden"} fontSize={{ base: "4xl", md: "6xl"}} fontWeight="900" display="flex" color="brand.white" borderLeftColor="brand.yellow !important" borderLeft="5px solid" pl="5">{textOverImage}</Text>
              <Text lineHeight="1" pos="absolute" transition=".4s ease-in-out" transform={isVisible ? "translateY(85%)" : "translateY(0)"} visibility={isVisible ? "visible" : "hidden"} fontSize={{ base: "4xl", md: "6xl"}} fontWeight="900" display="flex" color="brand.white" borderLeftColor="brand.yellow !important" borderLeft="5px solid" pl="5">{textOverImage}</Text>
              <Image src={image?.fields.file.url} alt={image?.fields.title} w="100%" h="100%" borderRadius="25px"/>
            </Link>
          </Box>
          <Box order={whichSide ? "2" : "1"} pos="relative">
            <Text fontSize="4xl" lineHeight="1" mb="1rem" fontWeight="700">{number}</Text>
            <Text fontSize="4xl" fontWeight="700" mb="2">{headline}</Text>
            <Text fontSize="xl" mb="4">{summary}</Text>
            {link ? (
              <Link isExternal={ctaTarget} href={link} w={{base: '100%', xl: 'fit-content'}} display="grid" onMouseOver={over} onMouseOut={out} mb={{base: '6', xl: '0'}}>
                <Button bg={!link ? "brand.grays.500" : "brand.gray"} color="brand.white" _hover={{ bg: "brand.grays.500" }}>{linkText ?? 'View Project'}</Button>
              </Link>
            ) : (
              <Button w={{base: '100%', xl: 'fit-content'}} cursor="not-allowed" isDisabled bg={!link ? "brand.grays.500" : "brand.gray"} color="brand.white" _hover={{ bg: "brand.grays.500" }}>{linkText ?? 'View project'}</Button>
            )}
          </Box>
      </Box>
    </Container>
  );
};

export default Card;