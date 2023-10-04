'use client';

import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';

const inputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

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
                                Welcome back
                            </h1>
                            <h2 className="text-sm lg:text-base text-gray-600 py-1">
                                Login to access account
                            </h2>
                        </header>
                        <form>
                            <div className="flex flex-col gap-5 lg:gap-8">
                                <div className="flex flex-col gap-4 md:py-5">
                                    <Input
                                        type="email"
                                        label="Email"
                                        placeholder="Enter your email"
                                        classNames={inputStyles}
                                    />
                                    <Input
                                        type="password"
                                        label="Password"
                                        placeholder="Enter your password"
                                        classNames={inputStyles}
                                    />
                                </div>
                                <Button
                                    size="lg"
                                    radius="sm"
                                    className="font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                                >
                                    Login
                                </Button>
                            </div>
                        </form>
                        <div className="text-sm py-4 lg:py-5">
                            <p className="text-center">
                                <span>Don&apos;t have an account? </span>
                                <Link
                                    href="/signup"
                                    className="text-bosson-blue font-semibold underline"
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
