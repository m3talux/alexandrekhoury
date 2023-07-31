import Image from "next/image";

export default function Avatar() {
    return (
        <div className="bg-[var(--primary-color)] rounded-full w-36 md:w-60 md:h-60 flex justify-center items-center">
            <Image src="/svg/avatar.svg" className="w-[264px]" width={264} height={264}
                 alt="Alexandre El Khoury | Avatar"/>
        </div>
    )
}