import Avatar from "@/app/components/avatar";
import Image from "next/image";

export function Main() {
  return (
    <section className="flex flex-col justify-center items-center px-6 md:px-16 py-16 md:py-32">
      <h2 className="text-[var(--text-color)] text-center font-bold text-3xl md:text-5xl">Alexandre El Khoury</h2>
      <h3 className="text-[var(--text-color)] text-center text-lg md:text-2xl mt-2 md:mt-4 mb-8 md:mb-16">Senior
        Software Engineer</h3>
      <Avatar/>
      <a href="#about" title="About Me"
         className="animate-bounce mt-32 flex flex-row items-center bg-[var(--accent-color)] p-4 rounded-full shadow-md">
        <Image src="/svg/arrow-down.svg" alt="arrow-down" width={24}
               height={24}/>
      </a>
    </section>
  )
}