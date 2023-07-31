import Avatar from "@/app/components/avatar";

export function Main() {
    return (
        <section className="flex flex-col justify-center items-center p-6 md:p-16">
            <Avatar/>
            <h2 className="text-[var(--text-color)] text-center font-bold text-3xl md:text-5xl mt-4 md:mt-16">Alexandre El Khoury</h2>
            <h3 className="text-[var(--text-color)] text-center text-lg md:text-2xl mt-2 md:mt-4">Known as Metalux in Gaming/Web3</h3>
            <div className="mt-8">
                <p className="text-white bg-sky-950 p-2 sm:p-4 rounded-md md:rounded-xl text-xs sm:text-sm md:text-lg">Software Engineer | Driving Positive Impact</p>
            </div>
        </section>
    )
}