'use client';

import { Button, Checkbox, Input } from '@nextui-org/react';
import Link from 'next/link';
import { formInputStyles } from '../data';

export default function LoginForm() {
    return (
        <form>
            <div className="flex flex-col gap-7 md:py-5">
                <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    classNames={formInputStyles}
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    classNames={formInputStyles}
                />
            </div>
            <div className="text-sm flex justify-between py-4 md:py-3">
                <Checkbox size="sm" defaultSelected>
                    Remember me
                </Checkbox>
                <Link
                    href="/forgot-password"
                    className="text-boson-blue font-semibold lg:hover:underline"
                >
                    Forgot password?
                </Link>
            </div>
            <div className="py-2">
                <Button
                    size="lg"
                    radius="sm"
                    className="w-full font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                >
                    Login
                </Button>
            </div>
        </form>
    );
}
