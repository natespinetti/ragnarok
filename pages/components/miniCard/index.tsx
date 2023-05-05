import { Image, Box, Text, Link, Button } from '@chakra-ui/react'
import type { TypeMiniCard } from '../../api/generated-types';
import { useState } from 'react';

export const MiniCard = ({ fields }: TypeMiniCard) => { 
  const { link, linkText, ctaTarget, image, textOverImage, headline, summary } = fields || {};

  const [isVisible, setIsVisible] = useState(false);

  function over(e: any) {
    setIsVisible(true);
  }
  function out(e: any) {
    setIsVisible(false);
  }

  return (
      <Box display="block" w="100%" alignItems="center">
          <Box pos="relative">
            <Link isExternal={ctaTarget} href={link} w="100%" display="flex" justifyContent="center" alignItems="center" onMouseOver={over} onMouseOut={out} mb={{base: '6', xl: '0'}}>
              <Box borderRadius="25px" pos="absolute" display="flex" w="100%" h="100%" transition=".4s ease-in-out" bg="brand.gray" opacity={isVisible ? ".8" : ".5"}></Box>
              <Text lineHeight="1" pos="absolute" fontSize={{ base: "2xl", md: "4xl"}} fontWeight="900" color="brand.white" borderLeftColor="brand.yellow !important" borderLeft="5px solid" pl="5">{textOverImage}</Text>
              <Text lineHeight="1" pos="absolute" transition=".4s ease-in-out" transform={isVisible ? "translateY(-85%)" : "translateY(0)"} visibility={isVisible ? "visible" : "hidden"} fontSize={{ base: "2xl", md: "4xl"}} fontWeight="900" display="flex" color="brand.white" borderLeftColor="brand.yellow !important" borderLeft="5px solid" pl="5">{textOverImage}</Text>
              <Text lineHeight="1" pos="absolute" transition=".4s ease-in-out" transform={isVisible ? "translateY(85%)" : "translateY(0)"} visibility={isVisible ? "visible" : "hidden"} fontSize={{ base: "2xl", md: "4xl"}} fontWeight="900" display="flex" color="brand.white" borderLeftColor="brand.yellow !important" borderLeft="5px solid" pl="5">{textOverImage}</Text>
              <Image src={image?.fields.file.url} alt={image?.fields.title} w="100%" h="100%" borderRadius="25px"/>
            </Link>
          </Box>
          <Box pos="relative" pt="1rem">
            <Text fontSize="3xl" fontWeight="700" mb="2">{headline}</Text>
            <Text fontSize="lg" mb="4">{summary}</Text>
            {link ? (
              <Link isExternal={ctaTarget} href={link} w={{base: '100%', xl: 'fit-content'}} display="grid" onMouseOver={over} onMouseOut={out} mb={{base: '6', xl: '0'}}>
                <Button bg={!link ? "brand.grays.500" : "brand.gray"} color="brand.white" _hover={{ bg: "brand.grays.500" }}>{linkText ?? 'View Project'}</Button>
              </Link>
            ) : (
              <Button w={{base: '100%', xl: 'fit-content'}} cursor="not-allowed" isDisabled bg={!link ? "brand.grays.500" : "brand.gray"} color="brand.white" _hover={{ bg: "brand.grays.500" }}>{linkText ?? 'View project'}</Button>
            )}
        </Box>
      </Box>
  );
};

export default MiniCard;