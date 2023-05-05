import { Image, Box, Heading, Text, Link, Container, keyframes, Button } from '@chakra-ui/react'
import type { TypeHero } from '../../api/generated-types';
import { motion } from 'framer-motion';
 
const textFlash1 = keyframes`
  0% { opacity: 0%; }
  9.9% { opacity: 0%; }
  10% { opacity: 100%; }
  69.9% { opacity: 100%; }
  70% { opacity: 0%; }
  100% { opacity: 0%; }
`;

const textFlash2 = keyframes`
  0% { opacity: 0%; }
  19.9% { opacity: 0%; }
  20% { opacity: 100%; }
  79.9% { opacity: 100%; }
  80% { opacity: 0%; }
  100% { opacity: 0%; }
`;

const textFlash3 = keyframes`
  0% { opacity: 0%; }
  29.9% { opacity: 0%; }
  30% { opacity: 100%; }
  89.9% { opacity: 100%; }
  90% { opacity: 0%; }
  100% { opacity: 0%; }
`;

const animation1 = `${textFlash1} 5s infinite`;
const animation2 = `${textFlash2} 5s infinite`;
const animation3 = `${textFlash3} 5s infinite`;

export const Hero = ({ fields }: TypeHero) => {
  const { headline, copy, firstCta, firstCtaLink, firstCtaTarget, secondCta, secondCtaLink, secondCtaTarget, image, decorativeText } = fields || {};

  return (
    <Container p={{base: "7rem 0 3rem", xl: "8rem 0 7rem"}} w={['90%', '80%']} maxW="1200px">
      <Box display={{base:'block', md:'flex'}}>
        <Box flex="1" alignSelf="center" paddingBottom={firstCta ? {base:"2rem", xl:"6rem"} : undefined}>
          <Heading as="h1" color="brand.white" fontSize={{base:'3xl', md:"4xl", lg:'7xl'}} fontWeight="900" w={{base:'100%', xl:'130%'}} pos="relative" zIndex="1" pb={{base:"1rem", md:"0"}} marginBottom={firstCta ? {base:"0", xl:"2rem"} : {base:"0", xl:"6rem"}} >
            {headline}
          </Heading>
          <Text>
            {copy}
          </Text>
          <Box display="flex" gridGap="2rem">
            <Link isExternal={firstCtaTarget} display={[firstCta ?? 'none']} href={firstCtaLink}><Button mt="5" bg="brand.yellow" color="brand.gray" _hover={{ bg: "brand.yellows.500" }}>{firstCta}</Button></Link>
            <Link isExternal={secondCtaTarget} display={[secondCta ?? 'none']} href={secondCtaLink}><Button mt="5" bg="brand.yellow" color="brand.gray" _hover={{ bg: "brand.yellows.500" }}>{secondCta}</Button></Link>
          </Box>
        </Box>
        <Box flex="1" pos="relative">
          <Image src={image?.fields.file.url} alt={image?.fields.title} shadow="md" borderRadius="25px"/>
          <Box pos="absolute" bottom="-140px" right="-120px" textAlign="right" fontSize="5xl" fontWeight="800" display={{base: 'none', xl: 'block'}}>
            <Box color="brand.gray" bg="brand.white" lineHeight="1" mb="2" as={motion.div} animation={animation1}>{decorativeText}</Box>
            <Box color="brand.gray" bg="brand.white" lineHeight="1" mb="2" as={motion.div} animation={animation2}>{decorativeText}</Box>
            <Box color="brand.gray" bg="brand.white" lineHeight="1" as={motion.div} animation={animation3}>{decorativeText}</Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;