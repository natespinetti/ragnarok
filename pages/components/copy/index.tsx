import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import type { TypeCopy } from '../../api/generated-types'

export const Copy = ({ fields }: TypeCopy) => {
  const { text } = fields || {}

  const contentWithLineBreaks = text
    .split('\n')
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))

  return (
    <Container w={['90%', '80%']} maxW="1200px" p="2rem 0">
      <Box display="block" w="100%" textAlign="left">
        <Text
          fontSize="2xl"
          lineHeight="1.25"
          mb="1rem"
          fontWeight="400"
        >
          {contentWithLineBreaks}
        </Text>
      </Box>
    </Container>
  )
}

export default Copy
