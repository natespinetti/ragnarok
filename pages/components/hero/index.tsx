import { Flex, Image, Box, Heading, Text, Link, Container } from '@chakra-ui/react'
import type { TypeHero } from '../../api/generated-types';
import { colors } from '../../theme/colors'

export const Hero = ({ fields }: TypeHero) => {
  const { headline, copy, arrowButtonCopy, arrowButtonLink, image, decorativeText } = fields;

  return (
    <Container w={['90%', '80%']} maxW="1200px">
      <Flex align="center" justify="center" direction={{ xs: 'column', md: 'row' }}>
        <Box flex="1">
          <Heading as="h1" color={colors.brand.yellow} fontSize="hl">
            {headline}
          </Heading>
          <Text>
            {copy}
          </Text>
          <Link href={arrowButtonLink}>
            {arrowButtonCopy}
          </Link>
        </Box>
        <Box flex="1">
          <Image src={image?.fields.file.url} alt={image?.fields.title}/>
          <Text>
              {decorativeText}
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};