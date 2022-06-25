/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'


export default function Hazhar() {
    return (
        <div>

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="xl:flex xl:items-center xL:-mx-4">
                        <div className="xl:w-1/2 xl:mx-4">
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Our Team</h1>
                            <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                            <div>
                                <Image src='/Images/5.jpg' width={200} height={150} />
                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Hazhar</h1>
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Full stack developer</p>
                            </div>
                            <div>
                                <Image src='/Images/4.jpg' width={200} height={150} />
                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Mia</h1>
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
