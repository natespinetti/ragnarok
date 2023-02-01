import { Box, Container } from '@chakra-ui/react'
import type { TypeMiniCardGroup } from '../../api/generated-types';
import { MiniCard } from '../miniCard';

export const MiniCardGroup = ({ fields }: TypeMiniCardGroup) => {
  const { group } = fields;
 
  return (
    <>
    <Container w={['90%', '80%']} maxW="1200px" p="2rem 0">
      <Box display="grid" gridGap="3rem" gridTemplateColumns={{ lg:'1fr 1fr', xl:'1fr 1fr 1fr'}}>
        {group?.map((card) => (
           <MiniCard
            key={card.sys.id}
            fields={card.fields}
            sys={card.sys}
            metadata={card.metadata}
            toPlainObject={card.toPlainObject}
            update={card.update}
           />
        ))}
      </Box>
    </Container>
    </>
  );
};

export default MiniCardGroup;