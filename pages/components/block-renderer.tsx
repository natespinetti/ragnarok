/* eslint-disable no-console */
import { ComponentContentTypes } from '../api/constants';
import _ from 'lodash';

import { Hero } from './hero';
import { Background } from './background';
import { Card } from './card';
import { ImageText } from './imageText';
import { MiniCard } from './miniCard';
import { Navigation } from './navigation';
import { Headline } from './headline';
import { MiniCardGroup } from './miniCardGroup';
import { Spacer } from './spacer';
import { Images } from './images';
import { Copy } from './copy';
 
type BlockRendererProps = {
  block: any;
};

const ContentTypeMap = {
  [ComponentContentTypes.hero]: Hero,
  [ComponentContentTypes.background]: Background,
  [ComponentContentTypes.card]: Card,
  [ComponentContentTypes.MiniCard]: MiniCard,
  [ComponentContentTypes.miniCardGroup]: MiniCardGroup,
  [ComponentContentTypes.navigation]: Navigation,
  [ComponentContentTypes.headline]: Headline,
  [ComponentContentTypes.spacer]: Spacer,
  [ComponentContentTypes.images]: Images,
  [ComponentContentTypes.copy]: Copy,
  [ComponentContentTypes.imageText]: ImageText,
};

const BlockRenderer = ({ block }: BlockRendererProps) => {
  console.log('block', block);
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b.sys.id}`} block={b} />
        ))}
      </>
    );
  }

  const contentTypeId = _.get(block, 'sys.contentType.sys.id');
  // console.log(contentTypeId);
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  const componentProps = {
    ...block,
    parent: block.parent,
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

export { BlockRenderer };
export default BlockRenderer;