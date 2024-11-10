import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Image src="/icons/banner-logo.svg" width={382} height={69} alt="logo" />
  );
};

export default Logo;
