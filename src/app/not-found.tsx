export default function NotFound() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <img src="/svg/404.svg" alt="404 - Not Found" width="80%" className="max-w-[600px]"/>
            <a className="bg-sky-600  rounded-lg p-4 text-xl md:text-2xl font-bold hover:cursor-pointer mt-8" href="/">Back Home</a>
        </div>
    )
}