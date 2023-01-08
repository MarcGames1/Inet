import Image from "next/image"
import { useBlogPostContext } from '../../../context/blogPost';
import { tw } from "twind";
export const Cover = ({ children, background }) => {
 
    console.log(useBlogPostContext);
    const { featuredImage } = useBlogPostContext();
    
  return (
    <div
      className={tw('z-0 max-h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center')}
    >
      {(!!background || !!featuredImage) && (
        <Image
          alt={featuredImage.node.altText || 'Cover'}
          src={background || featuredImage.node.sourceUrl}
          layout="fill"
          objectFit="cover"
          className={tw('mix-blend-soft-light z-0')}
        />
      )}
      <div className={tw('max-w-5xl')}>{children}</div>
    </div>
  );
};