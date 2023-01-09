/* eslint-disable no-console */
import { ComponentContentTypes } from '../api/constants';
import _ from 'lodash';

import { Hero } from './hero';

type BlockRendererProps = {
  block: any;
};

const ContentTypeMap = {
  [ComponentContentTypes.hero]: Hero,
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