import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none ml-40'> {/* Adjust ml value as needed */}
      {/* Use correct path and file extension */}
      <Image src={'/avatar.png'} width={650} height={260} alt='' className='translate-z-0 w-full h-full' />
    </div>
  );
};

export default Avatar;
