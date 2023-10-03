import Link from 'next/link';
import { CgMathPlus } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-boson-blue pt-8 px-5 lg:px-50 lg:pb-22">
                <div className="flex flex-col items-center">
                    <h1 className="text-sm lg:text-lg font-bold text-gray-100 text-center pt-8 pb-5 tracking-[12px] lg:tracking-[20px] uppercase lg:py-10">
                        Task Manager
                    </h1>
                    <div className="w-full md:w-8/12 lg:w-6/12 bg-white px-2.5 rounded-md shadow-md flex items-center justify-center relative top-5 z-10">
                        <span className="flex items-center justify-center w-7 h-7">
                            <AiOutlineSearch className="text-gray-400 w-full h-full" />
                        </span>
                        <input
                            type="search"
                            className="text-sm p-1.5 h-[3rem] w-full focus:outline-none placeholder:text-gray-400"
                            placeholder="Search for tasks"
                        />
                    </div>
                </div>
            </header>
            <main className="py-12 px-5 lg:px-40 flex-grow bg-gray-100">
                <div className=" flex justify-between items-center">
                    <h2 className="text-lepton-lilac">Latest</h2>
                    <Link
                        href="/new"
                        className="text-sm px-4 py-2 text-gray-100 bg-lepton-lilac hover:opacity-70 font-semibold rounded-md lg:flex items-center gap-2 transition-opacity hidden"
                    >
                        <CgMathPlus size={20} />
                        Add task
                    </Link>
                </div>
            </main>
            <footer className="w-full h-fit px-4 py-2 flex justify-center absolute bottom-0 border-t lg:hidden">
                <nav>
                    <ul>
                        <Link
                            href="/new"
                            title="Add task"
                            className="w-12 h-12 rounded-full font-semibold text-gray-100 bg-lepton-lilac px-3.5 py-1 flex items-center"
                        >
                            <CgMathPlus size={20} />
                        </Link>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
