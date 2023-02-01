import { Box } from '@chakra-ui/react'
import type { TypeBackground } from '../../api/generated-types';
import { getTheme } from '../../../theme/themeset';

export const Background = ({ fields }: TypeBackground) => {
  const { theme } = fields;

  return (
      <Box 
      bg={getTheme[theme ?? 'default'][0]}
      h="100%" w="100%" pos="absolute" zIndex="-10" pt="40rem">
        <Box bg={getTheme[theme ?? 'default'][1]} h="98%" w={{base: '100%', md: '90%', '3xl': '70%'}} m="auto">
        </Box>
      </Box>
  );
};

export default Background;