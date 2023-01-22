import React from 'react';
import {
  Paragraph,
  Cover,
  Heading,
  UniversalBlock,
  BlockImage,
  EmbedBlock,
  HTML,
  Columns,
  Column,
  PostTitle,
} from '../WP';
// import UniversalBlock from '../WP/UniversalBlock/UniversalBlock';
import { SocialIcon } from 'react-social-icons';
import { tw } from 'twind';
import { theme } from '../../theme';
import Image from 'next/image';




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
      case 'core/social-links': {
        return (
          <div
            key={block.id}
            className={tw(
              `${block.attributes.layout.type} gap-5 p-5 justify-${block.attributes?.layout.justifyContent}`,
            )}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      }
      case 'core/post-author-biography': {
        return null;
      }
      case 'core/social-link': {
        return (
          <div className={tw('transition-transform	 hover:-translate-y-2')} key={block.id}>
            <SocialIcon url={block.attributes.url} />
          </div>
        );
      }

      case 'core/embed': {
        return <EmbedBlock key={block.id} url={block.attributes.url} />;
      }

      case 'core/columns': {
        return (
          <Columns key={block.id} isStackedOnMobile={block.attributes.isStackedOnMobile}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }

      case 'core/column': {
       
        return (
          <Column
            key={block.id}
            className={tw('justify-self-center	')}
            width={block.attributes.width}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case 'core/group':
      case 'core/block': {
        
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }

      case 'core/image': {
     
        const { url, alt, title, rel, style, height, width, anchor, linkTarget, linkClass } = block.attributes || null;
        return (
          // <>
          //   <div>
          //     <Image
          //       key={block.id}
          //       src={block.attributes.url}
          //       width={block?.attributes?.width || 1000}
          //       height={block?.attributes?.height || 300}
          //       alt={block.attributes.alt || ''}
          //       layout="intrinsic"
          //     />
          //   </div>
          //   {block.attributes?.caption ? (
          //     <span className={tw('block text-center text-gray-300	')}>{block.attributes?.caption}</span>
          //   ) : null}
          // </>

          <div className={tw('flex flex-col items-center m-4')} key={block.id}>
            {console.log(block.attributes?.style)}
            <BlockImage
              border={block?.attributes?.style || null}
              key={block.id}
              height={height || 300}
              width={width || 1000}
              Imageurl={url}
              alt={alt || ''}
              caption={block.attributes.caption}
              anchor={block.attributes?.anchor || null}
            />
          </div>
        );
      }
      case 'core/post-title': {
        return <PostTitle key={block.id} level={block.attributes.level} textAlign={block.attributes.textAlign} />;
      }
      case 'core/list-item': {
        return <li key={block.id}>{block.attributes.content}</li>;
      }
      case 'core/list': {
        return block.attributes.ordered ? (
          <ol className={tw('list-decimal')} key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </ol>
        ) : (
          <ul className={tw('list-disc')} key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </ul>
        );
      }
      case 'core/html': {
        return <div key={block.id} dangerouslySetInnerHTML={{ __html: block.attributes.content }}></div>;
      }

      default:
        
        return (
          <div key={block.id}>
            Unsupported block type Call Alexandru for more information <strong> {block.name}</strong>
          </div>
        );
    }
  });
};


export default BlockRenderer;