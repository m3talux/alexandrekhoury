import Avatar from "@/app/components/avatar";

export function Main() {
    return (
        <section className="flex flex-col justify-center items-center p-6 md:p-16">
            <Avatar/>
            <h2 className="text-gray-700 text-center font-bold text-3xl md:text-5xl mt-4 md:mt-16">Alexandre El Khoury</h2>
            <h3 className="text-gray-600 text-center text-lg md:text-2xl mt-2 md:mt-4">Also known as Metalux</h3>
            <div className="mt-8">
                <p className="bg-sky-950 p-2 sm:p-4 rounded-md md:rounded-xl text-xs sm:text-sm md:text-lg">Software Engineer | Driving Positive Impact</p>
            </div>
        </section>
    )
}