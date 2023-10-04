import Link from 'next/link';

interface AuthFooterProps {
    message: string;
    linkText: string;
    linkPath: string;
}

export default function AuthFooter({
    message,
    linkText,
    linkPath,
}: AuthFooterProps) {
    return (
        <footer className="text-sm py-2 lg:py-5">
            <p className="text-center">
                <span>{message} </span>
                <Link
                    href={linkPath}
                    className="text-boson-blue font-semibold lg:hover:underline"
                >
                    {linkText}
                </Link>
            </p>
        </footer>
    );
}
