import { Box } from '@chakra-ui/react'
import type { TypeSpacer } from '../../api/generated-types';

export const Spacer = ({ fields }: TypeSpacer) => {
  const { spacerHeight } = fields || {};

  return (
      <Box h={spacerHeight}>
      </Box>
  );
};

export default Spacer;