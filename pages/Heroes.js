/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

export default function Heroes() {
    return (
        <div>
            <section className="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
                <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-800 md:text-4xl lg:text-5xl">Join Us In Programming Companies.</h1>
                    <form className="w-full mb-6">
                        <label className="sr-only">Your Email</label>
                        <div>
                            <input className="text-blue-700 form-input form-input-lg focus:outline-none" type="email" placeholder="Enter your email..." required="true" />
                            <button className="w-full h-10 mt-2 text-white bg-blue-800 hover:bg-green-800 btn btn-lg" type="submit">Get Started</button>
                        </div>
                    </form>
                    <p className="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">Get the #1 Business Messenger and start delivering personalized experiences at every stage of the customer journey.</p>
                </div>
                <div className=' mt-5 mr-4'>
                    <Image
                        width={800}
                        height={600}
                        src='/Images/3.jpg'
                        alt="3 women looking at a laptop"
                        className="object-cover w-full bg-gray-100 md:h-full"
                        loading="lazy"
                    />
                </div>
            </section>

        </div>
    )
}
