import Image from "next/image";

export default function Avatar() {
    return (
        <div className="bg-sky-600 rounded-full w-36 md:w-60 md:h-60 flex justify-center items-center">
            <img src="/avatar.svg" alt="Alexandre El Khoury | Avatar"/>
        </div>
    )
}