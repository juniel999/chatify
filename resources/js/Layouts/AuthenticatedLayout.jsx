import Nav from "@/Components/Nav";

export default function Authenticated({ user, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-950">
            <Nav user={user} />
            {header && (
                <header className="bg-white dark:bg-zinc-950 shadow">
                    <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
