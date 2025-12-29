import Image from "next/image";

interface LogoProps {
    className?: string
}

export function Logo({className = "w-8 h-8"}: LogoProps) {
    return (
        <Image
            src="/svg/logo.svg"
            alt="Alexandre El Khoury Logo"
            width={32}
            height={32}
            className={`${className} [&_path]:fill-accent`}
            priority
        />
    )
}
