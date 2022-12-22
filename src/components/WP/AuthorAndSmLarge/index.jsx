import { tw } from 'twind';
import Image from 'next/image';




const AuthorAndSmLarge = ({ author, featuredImage }) => {
    const { altText , sourceUrl}= featuredImage.node;
  return (
    <div className={tw('container relative h-3/6	')}>
      <div className={tw('w-full h-[300px] p-3 m-3 relative block')}>
        <Image src={sourceUrl} alt={altText} objectFit="contain" layout="fill" />
      </div>
      <h1 className={tw('text-center text-large')}>
        {author.node.lastName} {author.node.firstName}
        <span className={tw('block text-indigo-300')}>{author.node.description}</span>
      </h1>
    </div>
  );
};

export default AuthorAndSmLarge;
