import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/Components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { useEffect } from "react";

function Show({ auth, message }) {
    const { patch } = useForm({ isRead: message.isRead });

    useEffect(() => {
        return () => patch(route("message.update", { message }));
    }, []);

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Messages" />
                <div className="py-12 px-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-zinc-950 overflow-hidden shadow-sm sm:rounded-lg">
                            <Card className="max-w-[450px] flex flex-col justify-center mx-auto">
                                <CardHeader className="bg-zinc-200">
                                    <CardTitle className="text-black">
                                        Send me anonymous messages!
                                    </CardTitle>
                                    <CardDescription className="text-black">
                                        from anonymous sender
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="pt-5">{message.content}</p>
                                </CardContent>
                            </Card>
                            <div className="flex w-full">
                                <Button className="mt-3 w-8/12 md:w-4/12 mx-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full">
                                    <FaInstagram className="me-2" /> Send a
                                    reply
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default Show;
