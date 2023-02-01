import { Box, Container, Text } from '@chakra-ui/react'
import type { TypeHeadline } from '../../api/generated-types';

export const Headline = ({ fields }: TypeHeadline) => {
  const { headline } = fields || {};
 
  return (
    <Container w={['90%', '80%']} maxW="1200px" p="2rem 0">
      <Box display="block" w="100%" textAlign="left">
      <Text fontSize="5xl" lineHeight="1" mb="1rem" fontWeight="700" borderLeftColor="brand.gray !important" borderLeft="5px solid" pl="5">{headline}</Text>
      </Box>
    </Container>
  );
};

export default Headline;