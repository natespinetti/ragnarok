import { Image, Box, Text, Link, Container, Button } from '@chakra-ui/react'
import type { TypeImageText } from '../../api/generated-types';
 
export const ImageText = ({ fields }: TypeImageText) => {
  const { link, linkText, ctaTarget, image, headline, summary, whichSide } = fields || {};

  return (
    <Container w={['90%', '80%']} maxW="1200px" p="2rem 0">
      <Box display={{ lg:'block', xl:'grid'}} w="100%" alignItems="center" gridTemplateColumns="1fr 1fr" gridGap="3rem">
          <Box order={whichSide ? "1" : "2"} pos="relative">
              <Image src={image?.fields.file.url} alt={image?.fields.title} w="100%" h="100%" borderRadius="25px"/>
          </Box>
          <Box order={whichSide ? "2" : "1"} pos="relative">
            <Text fontSize="4xl" fontWeight="700" mb="2">{headline}</Text>
            <Text fontSize="xl" mb="4">{summary}</Text>
            {
        link ? (
          <Link href={link} isExternal={ctaTarget}>
            <Button bg="brand.gray" color="brand.white" _hover={{ bg: "brand.grays.500" }}>{linkText ?? 'View Project'}</Button>
          </Link>
        ) : (
          <></>
        )
      }
            </Box>
      </Box>
    </Container>
  );
};

export default ImageText;