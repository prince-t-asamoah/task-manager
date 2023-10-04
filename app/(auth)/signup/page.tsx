import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';
import AuthHeader from '../AuthHeader';
import AuthFooter from '../AuthFooter';
import SignupForm from './SignupForm';

export default function SignUp() {
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
                        <AuthHeader
                            title="Create your account"
                            subTitle="All fields are required to signup"
                        />
                        <SignupForm />
                        <AuthFooter
                            message="Don't have an account?"
                            linkText="Login"
                            linkPath="/login"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
