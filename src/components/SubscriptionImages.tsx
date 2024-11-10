import Image from "next/image";
import { ReactNode } from "react";

const Images: ReactNode[] = [
  <Image
    src={"/images/subscription-1.png"}
    width={405}
    height={416}
    alt="subscription-1-month"
  />,
  <Image
    src={"/images/subscription-3.png"}
    width={160}
    height={416}
    alt="subscription-3-month"
    className="rtl:mr-[4rem] ltr:ml-[4rem]"
    style={{
      marginRight: "4rem",
      maxHeight: "calc(21.25rem + 2rem)",
    }}
  />,
  <Image
    src={"/images/subscription-6.png"}
    width={405}
    height={334}
    alt="subscription-6-month"
  />,
  <Image
    src={"/images/subscription-12.png"}
    width={316}
    height={446}
    alt="subscription-12-month"
/>,
];

export default Images;
