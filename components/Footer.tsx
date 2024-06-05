import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC<{}> = () => {

  return (
    <section>
      <div className="text-center">
        <h5 className="text-white font-semibold text-2xl"> Let’s connect! <br />
        Feel free to follow me there and drop a message to say hello!</h5>
      </div>
      <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
        <div className="pb-10 justify-center flex ">
      
            <Link
              href="https://github.com/snekalatha10"
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1]"
            >
              <Image
                src="/Github.svg"
                height={30}
                width={30}
                className="mx-5"
                alt="github"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sneka-latha-984175231/"
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1]"
            >
              <Image
                src="/LinkedIn.svg"
                height={30}
                width={30}
                className="mx-5"
                alt="github"
              />
            </Link>
      </div>
    </div>
    </section>
  );
};

export default Footer;

