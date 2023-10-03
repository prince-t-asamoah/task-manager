import Link from 'next/link';
import { CgMathPlus } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { LuListTodo } from 'react-icons/lu';

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
                <div className="pb-4 flex justify-between items-center">
                    <h2 className="text-lepton-lilac">Latest</h2>
                    <Link
                        href="/new"
                        className="text-sm px-4 py-2 text-gray-100 bg-lepton-lilac hover:opacity-70 font-semibold rounded-md lg:flex items-center gap-2 transition-opacity hidden"
                    >
                        <CgMathPlus size={20} />
                        Add task
                    </Link>
                </div>
                <div className="w-full py-2">
                    <ul className="flex flex-col gap-5">
                        <li className="h-[130px] py-3 px-4 bg-white border-b shadow-md flex flex-col justify-between rounded-md">
                            <div className="text-sm flex flex-col gap-1">
                                <h3 className=" text-gray-950 font-semibold">
                                    My first task
                                </h3>
                                <p className="text-xs text-gray-500 line-clamp-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                            <div className="text-xs flex flex-col lg:flex-row gap-2">
                                <span className="w-fit text-gray-600 bg-blue-200 rounded-full px-2 py-0.5">
                                    groceries
                                </span>
                                <div className="flex-grow flex justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <LuListTodo
                                            size={16}
                                            class="text-gray-600"
                                        />
                                        <span>0/5 completed</span>
                                    </span>
                                    <span>3 days left</span>
                                </div>
                            </div>
                        </li>
                    </ul>
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
