import Image from "next/image";
import { useBlogPostContext } from '../../../context/blogPost';
import { tw } from "twind";
export const Cover = ({ children, background }) => {
 
  
    const { featuredImage } = useBlogPostContext();
    
  return (
       <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      {(!!background || !!featuredImage) && (
        <Image
          alt="Cover"
          src={background || featuredImage}          
          className="mix-blend-soft-light"
        />
      )}
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};