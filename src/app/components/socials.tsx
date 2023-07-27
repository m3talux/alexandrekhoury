import Image from "next/image";

export default function Socials() {
    const iconSize = 32

    return (
        <div className="flex justify-center items-center">
            <a target="_blank" href="https://www.linkedin.com/in/alexandre-el-khoury/"
               title="LinkedIn"
               className="mr-4 hover:cursor-pointer">
                <Image src="/svg/linkedin.svg" alt="LinkedIn" height={iconSize} width={iconSize}/>
            </a>
            <a target="_blank" href="https://github.com/m3talux"
               title="Github"
               className="mr-4 hover:cursor-pointer">
                <Image src="/svg/github.svg" alt="Github" height={iconSize} width={iconSize}/>
            </a>
            <a target="_blank" href="https://twitter.com/metaluxx"
               title="Twitter"
               className="hover:cursor-pointer">
                <Image src="/svg/twitter.svg" alt="Twitter" height={iconSize} width={iconSize}/>
            </a>
        </div>
    )
}