'use client';
import { Button, Input } from '@nextui-org/react';

export default function SignUp() {
    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
            <h1 className="text-gray-950 text-xl font-bold py-5">
                Create your account
            </h1>
            <form className="w-4/5">
                <div className="flex flex-col gap-5">
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
                        className="bg-boson-blue text-gray-100"
                    >
                        Signup
                    </Button>
                </div>
            </form>
        </div>
    );
}
