import React from "react";
import {
RxDiscordLogo,
RxGithubLogo,
RxInstagramLogo,
RxTwitterLogo,
RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
return (
<div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
    <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            
            <div className="min-w-[200px] h-auto flex flex-col sm:items-center justify-start">
                <div className="font-bold text-[16px]">Social Media</div>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <FaInstagram  />
                    <a href="https://www.instagram.com/ricky_o_369/" target="_blank" className="relative z-50">
                    <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                </p>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxGithubLogo />
                    <a href="https://github.com/Rikiya89" target="_blank" className="relative z-50">
                    <span className="text-[15px] ml-[6px]">GitHub</span>    
                    </a>
                </p>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxLinkedinLogo />
                    <a href="https://www.linkedin.com/in/rikiya-okawa369/" target="_blank" className="relative z-50">
                    <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                </p>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                <div className="font-bold text-[16px]">About</div>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <a href="mailto:rikiyadazo89@gmail.com" target="_blank" className="relative z-50">
                        <span className="text-[15px] ml-[6px]">rikiydazo89@gmail.com</span>
                    </a>
                </p>
            </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
            &copy; Rikiya Okawa. All rights reserved
        </div>
    </div>
</div>
)
}

export default Footer