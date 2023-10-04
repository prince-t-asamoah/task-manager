'use client';

import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';

export default function Login() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="lg:block flex-1 hidden bg-boson-blue"></div>
            <div className="flex-1 flex flex-col lg:gap-8 items-center relative">
                <div className="px-5 py-8 md:p-8 lg:px-10 lg:pt-10 w-full">
                    <Link
                        href="/"
                        className="font-semibold text-boson-blue lg:hover:underline inline-flex items-center gap-2"
                    >
                        <FaChevronLeft />
                        <span>Back</span>
                    </Link>
                </div>
                <div className="flex-grow py-4 w-full flex justify-center items-center">
                    <div className="w-4/5 md:w-3/5">
                        <header className="text-center pb-5 lg:pt-3 lg:pb-8">
                            <h1 className="text-gray-950 text-xl lg:text-3xl font-bold">
                                Login to access account
                            </h1>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    );
}
