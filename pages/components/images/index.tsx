import { Image, Box, Link, Container } from '@chakra-ui/react';
import type { TypeImages } from '../../api/generated-types';
 
export const Images = ({ fields }: TypeImages) => {
  const { link, image, alttext } = fields || {};

  const imageUrl = image?.fields.file.url ?? '';

  return (
    <Container w={['90%', '80%']} maxW="1200px" p="2rem 0">
      <Box display={{ lg:'block', xl:'grid'}} w="100%" alignItems="center" gridTemplateColumns="1fr" gridGap="3rem">
        {link ? (
          <Box pos="relative">
            <Link href={link} w="100%" display="grid" mb={{base: '6', xl: '0'}}>
              <Image src={imageUrl} alt={alttext} w="100%" h="100%" borderRadius="25px"/>
            </Link>
          </Box>
        ) : (
          <Box pos="relative" w="100%" display="grid" mb={{base: '6', xl: '0'}}>
            <Image src={imageUrl} alt={alttext} w="100%" h="100%" borderRadius="25px"/>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Images;