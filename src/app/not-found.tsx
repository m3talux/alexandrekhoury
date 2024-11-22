import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <Image src="/svg/404.svg" alt="404 - Not Found" style={{width: '80%', height: 'auto'}} width={800}
                   height={900} className="max-w-[600px]"/>
            <Link
                className="bg-[var(--primary-color)]  rounded-lg p-4 text-xl md:text-2xl font-bold hover:cursor-pointer mt-8 text-white"
                href="/" title="Alexandre El Khoury | Home">Back
                Home</Link>
        </div>
    )
}