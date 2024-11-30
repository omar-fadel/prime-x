import Image from "next/image";
import { ReactNode } from "react";

const Images: ReactNode[] = [
  <Image
    key={"image-1"}
    src={"/images/subscription-1.png"}
    width={405}
    height={416}
    alt="subscription-1-month"
  />,
  <Image
    key={"image-2"}
    src={"/images/subscription-3.png"}
    width={160}
    height={416}
    alt="subscription-3-month"
  />,
  <Image
    key={"image-3"}
    src={"/images/subscription-6.png"}
    width={405}
    height={334}
    alt="subscription-6-month"
  />,
  <Image
    key={"image-4"}
    src={"/images/subscription-12.png"}
    width={316}
    height={446}
    alt="subscription-12-month"
  />,
];

export default Images;
