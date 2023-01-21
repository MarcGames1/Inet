import React from 'react'
import { tw } from 'twind';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';


const Button = dynamic(() => import('@/components/button'));

// /post.node.uri = url
// post.node.title = title
// post.node?.featuredImage?.node?.alt = alt
// post.node.excerpt = excerpt;

const BlogCardComponent = ({ url, title, alt, excerpt, imageUrl }) => {
  return (
    <div className={tw('grid')}>
      <div className={tw('justify-self-start row-span-2 p-3 self-start')}>
        <Link href={`/blog${url}`}>
          <a>
            <Image
              layout="intrinsic"
              width={1200}
              height={600}
              objectFit="cover"
              src={imageUrl || null}
              alt={title || alt}
            />
          </a>
        </Link>
      </div>
      <h2
        className={tw(
          'row-span-1 self-start	justify-self-center	 antialiased text-center  text-lg text-gray-900 font-semibold',
        )}
      >
        {title}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: `${excerpt.substring(0, 140)}...` || '<p class="text-center">Citeste mai multe aici</p>',
        }}
        className={tw('row-span-2 m-2')}
      ></div>
      <div className={tw('m-1 self-end span-1 justify-self-center')}>
        {' '}
        <Link href={`/blog${url}`}>
          <Button primary>citeste mai mult</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCardComponent