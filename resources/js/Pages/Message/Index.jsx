import NewMessageCard from "@/Components/NewMessageCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Index({ auth, messages }) {
    console.log(messages);
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        New messages!
                    </h2>
                }
            >
                <Head title="Messages" />
                <div className="py-12 px-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-zinc-950 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {messages.map((message) => (
                                    <NewMessageCard
                                        key={message.id}
                                        message={message}
                                    />
                                ))}
                                {/* <NewMessageCard isRead={true} />
                                <NewMessageCard isRead={false} />
                                <NewMessageCard isRead={true} />
                                <NewMessageCard isRead={true} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default Index;
