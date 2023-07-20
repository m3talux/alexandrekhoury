export default function Socials() {
    const iconSize = 32

    return (
        <div className="flex justify-center items-center">
            <a target="_blank" href="https://www.linkedin.com/in/alexandre-el-khoury/"
               className="mr-4 hover:cursor-pointer">
                <img src="/svg/linkedin.svg" alt="LinkedIn" height={iconSize} width={iconSize}/>
            </a>
            <a target="_blank" href="https://github.com/m3talux"
               className="mr-4 hover:cursor-pointer">
                <img src="/svg/github.svg" alt="Github" height={iconSize} width={iconSize}/>
            </a>
            <a target="_blank" href="https://twitter.com/metaluxx"
               className="hover:cursor-pointer">
                <img src="/svg/twitter.svg" alt="Twitter" height={iconSize} width={iconSize}/>
            </a>
        </div>
    )
}