'use client'

import {useState} from "react";
import * as emailJSClient from "emailjs-com";

export default function Contact() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()

        setLoading(true)

        emailJSClient.send("service_qjduk0g", "template_gsrqqyt", {
            from_name: `${firstname} ${lastname}`,
            from_email: email,
            message: message,
        }, '9j0MO5H3id3oUTxV8').then(
            _ => {
                setIsSuccess(true)
                clearForm(true)
            },
            _ => {
                setIsError(true)
            }
        )
    }

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const clearForm = (withSleep: boolean) => {
        setFirstname('')
        setLastname('')
        setEmail('')
        setMessage('')
        setLoading(false)
        setIsError(false)

        if (withSleep) {
            sleep(3000).then(() => setIsSuccess(false))
        }
    }

    return (
        <section id="contact" className="p-8 my-32 flex flex-col items-center">
            <h2 className="text-[var(--text-color)] font-bold text-5xl">Let&apos;s chat!</h2>
            <form className="mt-16 w-full max-w-[1000px]" onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name"
                               className="block mb-2 text-sm font-medium text-[var(--text-color)]">First
                            name</label>
                        <input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-[var(--text-color)] text-sm rounded-lg focus:ring-blue-500 focus:border-gray-400 block w-full p-2.5 focus:outline-none"
                               placeholder="John" value={firstname} onChange={(e) => setFirstname(e.target.value)}
                               readOnly={loading}
                               required/>
                    </div>
                    <div>
                        <label htmlFor="last_name"
                               className="block mb-2 text-sm font-medium text-[var(--text-color)]">Last
                            name</label>
                        <input type="text" id="last_name"
                               className="bg-gray-50 border border-gray-300 text-[var(--text-color)] text-sm rounded-lg focus:ring-blue-500 focus:border-gray-400 block w-full p-2.5 focus:outline-none"
                               placeholder="Doe" value={lastname} onChange={(e) => setLastname(e.target.value)}
                               readOnly={loading}
                               required/>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[var(--text-color)]">Email
                        address</label>
                    <input type="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-[var(--text-color)] text-sm rounded-lg focus:ring-blue-500 focus:border-gray-400 block w-full p-2.5 focus:outline-none"
                           placeholder="john.doe@company.com" value={email} onChange={(e) => setEmail(e.target.value)}
                           readOnly={loading}
                           required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="message"
                           className="block mb-2 text-sm font-medium text-[var(--text-color)]">Your
                        message</label>
                    <textarea id="message" rows={10}
                              className="block p-2.5 w-full text-sm text-[var(--text-color)] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-gray-400 focus:outline-none"
                              placeholder="Write your message here..." value={message}
                              readOnly={loading}
                              onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <div className="flex w-full justify-center">
                    <button type="submit" disabled={loading}
                            className="flex justify-center items-center text-white bg-[var(--primary-color)] hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-8 py-2.5 text-center">
                        {
                            loading &&
                            <svg aria-hidden="true" role="status"
                                 className="inline mr-3 w-4 h-4 text-white animate-spin"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"></path>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"></path>
                            </svg>
                        }
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </form>
            {
                isError && <div
                    className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 mt-8"
                    role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Failed to send message</span> Try submitting again in a few.
                    </div>
                </div>
            }
            {
                isSuccess && <div
                    className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 mt-8"
                    role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Message sent!</span> Your message has been sent, thanks for reaching
                        out.
                    </div>
                </div>
            }
        </section>
    )
}