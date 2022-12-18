import {Paragraph, Cover, Heading} from '../WP'
import { SocialIcon } from 'react-social-icons';
import { tw } from 'twind';
import { theme } from '../../theme';

 const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/paragraph': {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
            content={block.attributes.content}
            fontSize={block.attributes.fontSize}
          />
        );
      }
      case 'core/heading': {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.align}
            fontSize={block.attributes?.fontSize}
          />
        );
      }
      case 'core/cover': {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case 'core/social-links' :{
        return (
          <div key={block.id} className={tw(`${block.attributes.layout.type} gap-5 p-5 justify-${block.attributes?.layout.justifyContent}`)}>
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      }
      case'core/post-author-biography': {
        return(
            null
        )
      }
      case 'core/social-link' :{
        return (
          <div className={tw('transition-transform	 hover:-translate-y-2')} key={block.id}>
            <SocialIcon url={block.attributes.url} />
          </div>
        );
      }
      default:
        return <>unsupported block</>;
    }
  });
};


export default BlockRenderer;