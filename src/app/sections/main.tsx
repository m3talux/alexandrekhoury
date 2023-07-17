import Avatar from "@/app/components/avatar";

export function Main() {
    return (
        <section className="flex flex-col justify-center items-center p-16 md:p-8">
            <Avatar/>
            <h2 className="text-gray-700 text-center font-bold text-3xl md:text-5xl mt-4 md:mt-16">Hey, my name is Alex</h2>
            <p className="text-gray-600 text-center text-xl md:text-3xl mt-2 md:mt-4">Pleased to meet you!</p>
        </section>
    )
}