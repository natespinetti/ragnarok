import { Image, Box, Text, Link, Button } from '@chakra-ui/react'
import type { TypeMiniCard } from '../../api/generated-types';
import { useState } from 'react';

export const MiniCard = ({ fields }: TypeMiniCard) => { 
  const { link, linkText, image, textOverImage, headline, summary } = fields || {};

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
            <Link href={link} w="100%" display="grid" onMouseOver={over} onMouseOut={out} mb={{base: '6', xl: '0'}}>
              <Box borderRadius="25px" pos="absolute" display="flex" w="100%" h="100%" transition=".4s ease-in-out" bg="brand.gray" opacity={isVisible ? ".8" : ".5"}></Box>
              <Text lineHeight="1" pos="absolute" display="flex" justifySelf="center" alignSelf="center" justifyContent="center" alignItems="center" fontSize={{ base: "2xl", md: "4xl"}} fontWeight="900" color="brand.white" borderLeftColor="brand.yellow !important" borderLeft="5px solid" pl="5">{textOverImage}</Text>
              <Text lineHeight="1" pos="absolute" justifySelf="center" alignSelf="center" transition=".4s ease-in-out" transform={isVisible ? "translateY(-85%)" : "translateY(0)"} visibility={isVisible ? "visible" : "hidden"} justifyContent="center" alignItems="center" fontSize={{ base: "2xl", md: "4xl"}} fontWeight="900" display="flex" color="brand.white" borderLeftColor="brand.yellow !important" borderLeft="5px solid" pl="5">{textOverImage}</Text>
              <Text lineHeight="1" pos="absolute" justifySelf="center" alignSelf="center" transition=".4s ease-in-out" transform={isVisible ? "translateY(85%)" : "translateY(0)"} visibility={isVisible ? "visible" : "hidden"} justifyContent="center" alignItems="center" fontSize={{ base: "2xl", md: "4xl"}} fontWeight="900" display="flex" color="brand.white" borderLeftColor="brand.yellow !important" borderLeft="5px solid" pl="5">{textOverImage}</Text>
              <Image src={image?.fields.file.url} alt={image?.fields.title} w="100%" h="100%" borderRadius="25px"/>
            </Link>
          </Box>
          <Box pos="relative" pt="1rem">
            <Text fontSize="3xl" fontWeight="700" mb="2">{headline}</Text>
            <Text fontSize="lg" mb="4">{summary}</Text>
            <Link href={link}><Button bg="brand.gray" color="brand.white" _hover={{ bg: "brand.grays.500" }}>{linkText ?? 'View Project'}</Button></Link>
          </Box>
      </Box>
  );
};

export default MiniCard;