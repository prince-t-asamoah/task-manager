'use client';
import { Button, Input } from '@nextui-org/react';
import { FaChevronLeft } from 'react-icons/fa6';

import Link from 'next/link';

const inputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

export default function SignUp() {
    return (
        <div className="h-screen flex">
            <div className="lg:block flex-1 hidden bg-boson-blue"></div>
            <div className="flex-1 bg-gray-100 flex flex-col gap-4 lg:gap-8 items-center">
                <div className="p-5 lg:px-10 lg:pt-10 w-full">
                    <Link
                        href="/"
                        className="font-semibold text-boson-blue lg:hover:underline inline-flex items-center gap-2"
                    >
                        <FaChevronLeft />
                        <span>Back</span>
                    </Link>
                </div>
                <div className="py-4 w-full flex justify-center">
                    <div className="w-4/5 lg:w-3/5">
                        <h1 className="text-gray-950 text-xl lg:text-3xl font-bold text-center py-5 lg:pb-8">
                            Create your account
                        </h1>
                        <form>
                            <div className="flex flex-col gap-5 lg:gap-8">
                                <div className='flex flex-col gap-4'>
                                    <Input
                                        type="text"
                                        label="First Name"
                                        placeholder="Enter your first name"
                                        classNames={inputStyles}
                                    />
                                    <Input
                                        type="text"
                                        label="Last Name"
                                        placeholder="Enter your last name"
                                        classNames={inputStyles}
                                    />
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
                                    <Input
                                        type="password"
                                        label="Confirm Password"
                                        placeholder="Enter your password again"
                                        classNames={inputStyles}
                                    />
                                </div>
                                <Button
                                    size="lg"
                                    radius="sm"
                                    className="font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                                >
                                    Signup
                                </Button>
                            </div>
                        </form>
                        <div className="text-sm py-4 lg:py-5">
                            <p className="text-center">
                                <span>Already have an account? </span>
                                <Link
                                    href="/login"
                                    className="text-bosson-blue font-semibold underline"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
