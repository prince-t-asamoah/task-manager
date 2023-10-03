'use client';
import { Button, Input } from '@nextui-org/react';
import { FaChevronLeft } from 'react-icons/fa6';

import Link from 'next/link';

export default function SignUp() {
    return (
        <div className="h-screen flex">
            <div className="lg:block flex-1 hidden bg-boson-blue"></div>
            <div className="flex-1 bg-gray-100 flex flex-col gap-4 items-center">
                <div className="px-5 py-5 w-full">
                    <Link
                        href="/"
                        className="font-semibold text-boson-blue inline-flex items-center gap-2"
                    >
                        <FaChevronLeft />
                        <span>Back</span>
                    </Link>
                </div>
                <div className="py-4 w-full flex justify-center">
                    <div className="w-4/5">
                        <h1 className="text-gray-950 text-xl font-bold text-center py-5">
                            Create your account
                        </h1>
                        <form>
                            <div className="flex flex-col gap-4">
                                <Input
                                    type="text"
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    classNames={{
                                        label: 'text-gray-950 font-semibold',
                                    }}
                                />
                                <Input
                                    type="text"
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    classNames={{
                                        label: 'text-gray-950 font-semibold',
                                    }}
                                />
                                <Input
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    classNames={{
                                        label: 'text-gray-950 font-semibold',
                                    }}
                                />
                                <Input
                                    type="password"
                                    label="Password"
                                    placeholder="Enter your password"
                                    classNames={{
                                        label: 'text-gray-950 font-semibold',
                                    }}
                                />
                                <Input
                                    type="password"
                                    label="Confirm Password"
                                    placeholder="Enter your password again"
                                    classNames={{
                                        label: 'text-gray-950 font-semibold',
                                    }}
                                />
                                <Button
                                    size="lg"
                                    radius="sm"
                                    className="font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                                >
                                    Signup
                                </Button>
                            </div>
                        </form>
                        <div className="text-sm py-4">
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
