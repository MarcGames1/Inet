import { tw } from 'twind';
import Image from "next/image";




const AuthorAndSmLarge = ({ firstName,lastName, description =null, pozaProfil }) => {
  const { altText , link}= pozaProfil;
  return (
    <div className={tw('container flex flex-col items-center h-3/6	')}>
        <Image className='' src={link} alt={altText} width={400} height={400} />
      {/* <div className={tw('w-full h-[300px] p-3 m-3 relative block')}>
      </div> */}
      <h1 className={tw('text-center text-large')}>
        {lastName} {firstName}
      </h1>
      {description ? <span className={tw('block text-indigo-300')}>{description}</span> : null}
    </div>
  );
};

export default AuthorAndSmLarge;
