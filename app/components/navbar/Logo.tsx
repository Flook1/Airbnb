'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return ( 
        <Image 
            alt="Logo"
            className="hidden md:block cursor-pointer h-full mt-3 mr-5"
            height="100"
            width="100"
            src="/images/logo.png"
        /> 
     );
}
 
export default Logo;