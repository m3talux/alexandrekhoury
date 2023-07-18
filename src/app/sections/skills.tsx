export default function Skills() {
    return (
        <section className="relative">
            <div className="bg-sky-600 h-64 absolute top-0 left-0 right-0 -z-10"/>
            <div className="flex xl:flex-row flex-col justify-evenly items-center w-screen pt-32 xl:h-full h-[2200px]">
                <div className="bg-white h-[500px] w-10/12 xl:w-1/5 xl:max-w-md rounded-3xl shadow-xl p-8">
                    <div className="w-full text-center text-sky-600 font-bold text-2xl xl:text-3xl mt-4">
                        <h2>&lt;Languages/&gt;</h2>
                    </div>
                    <div className="flex flex-col mt-8 w-full text-left text-xl xl:text-2xl text-gray-700">
                        <div className="flex flex-row items-center">
                            <img src="/svg/go.svg" width={20} alt="Go"/>
                            <label className="ml-4">Go</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/dart.svg" width={20} alt="Dart"/>
                            <label className="ml-4">Dart</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/java.svg" width={20} alt="Java"/>
                            <label className="ml-4">Java</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/javascript.svg" width={20} alt="Javascript"/>
                            <label className="ml-4">Javascript</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/typescript.svg" width={20} alt="Typescript"/>
                            <label className="ml-4">Typescript</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/python.svg" width={20} alt="Python"/>
                            <label className="ml-4">Python</label>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[500px] w-10/12 xl:w-1/5 xl:max-w-md rounded-3xl shadow-xl p-8">
                    <div className="w-full text-center text-sky-600 font-bold text-2xl xl:text-3xl mt-4">
                        <h2>&lt;Backend/&gt;</h2>
                    </div>
                    <div className="flex flex-col mt-8 w-full text-left text-xl xl:text-2xl text-gray-700">
                        <div className="flex flex-row items-center">
                            <img src="/svg/gin.svg" width={20} alt="Gin-Gonic | Go"/>
                            <label className="ml-4">Gin (Go)</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/fiber.svg" width={20} alt="Fiber | Go"/>
                            <label className="ml-4">Fiber (Go)</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/nodejs.svg" width={20} alt="NodeJS | Javascript"/>
                            <label className="ml-4">NodeJS</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/nestjs.svg" width={20} alt="NestJS | Typescript"/>
                            <label className="ml-4">NestJS</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/spring.svg" width={20} alt="Spring Boot | Jave"/>
                            <label className="ml-4">Spring</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/django.svg" width={20} alt="Django | Python"/>
                            <label className="ml-4">Django</label>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[500px] w-10/12 xl:w-1/5 xl:max-w-md rounded-3xl shadow-xl p-8">
                    <div className="w-full text-center text-sky-600 font-bold text-2xl xl:text-3xl mt-4">
                        <h2>&lt;Frontend/&gt;</h2>
                    </div>
                    <div className="flex flex-col mt-8 w-full text-left text-xl xl:text-2xl text-gray-700">
                        <div className="flex flex-row items-center">
                            <img src="/svg/flutter.svg" width={20} alt="Flutter | Dart"/>
                            <label className="ml-4">Flutter</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/next.svg" width={20} alt="Next.js | Typescript"/>
                            <label className="ml-4">NextJS</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/react.svg" width={20} alt="ReactJS | Javascript"/>
                            <label className="ml-4">ReactJS</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/angular.svg" width={20} alt="Angular | Typescript"/>
                            <label className="ml-4">Angular</label>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[500px] w-10/12 xl:w-1/5 xl:max-w-md rounded-3xl shadow-xl p-8">
                    <div className="w-full text-center text-sky-600 font-bold text-2xl xl:text-3xl mt-4">
                        <h2>&lt;DevOps/&gt;</h2>
                    </div>
                    <div className="flex flex-col mt-8 w-full text-left text-xl xl:text-2xl text-gray-700">
                        <div className="flex flex-row items-center">
                            <img src="/svg/firebase.svg" width={20} alt="Firebase"/>
                            <label className="ml-4">Firebase</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/docker.svg" width={20} alt="Docker"/>
                            <label className="ml-4">Docker</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/aws.svg" width={20} alt="AWS"/>
                            <label className="ml-4">AWS</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/mongo.svg" width={20} alt="MongoDB"/>
                            <label className="ml-4">MongoDB</label>
                        </div>
                        <div className="flex flex-row items-center mt-6">
                            <img src="/svg/postgresql.svg" width={20} alt="PostgreSQL"/>
                            <label className="ml-4">PostgreSQL</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}