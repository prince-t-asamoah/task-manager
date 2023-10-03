export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-boson-blue pt-8 px-5 lg:px-50 lg:pb-22">
                <div className="flex flex-col items-center">
                    <h1 className="text-sm lg:text-lg font-bold text-gray-100 text-center pt-8 pb-5 tracking-[12px] lg:tracking-[20px] uppercase lg:py-10">
                        Task Manager
                    </h1>
                    <div className="w-full md:w-8/12 lg:w-6/12 bg-white px-2.5 rounded-md shadow-md flex items-center justify-center relative top-5 z-10">
                        <input
                            type="search"
                            className="text-sm p-1.5 h-[3rem] w-full focus:outline-none placeholder:text-gray-400"
                            placeholder="Search for tasks"
                        />
                    </div>
                </div>
            </header>
            <main className="py-12 flex-grow flex justify-center bg-gray-100 relative">

            </main>
        </div>
    );
}
