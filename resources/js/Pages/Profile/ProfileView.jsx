import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import InputError from "@/Components/InputError";
import { Transition } from "@headlessui/react";
import { FaCheck } from "react-icons/fa";

function ProfileView({ auth, user }) {
    const { setData, post, processing, errors, recentlySuccessful } = useForm({
        content: "",
        receiver_id: user.id,
    });

    console.log("user: ", user.id);

    function handleMessageSubmit(e) {
        e.preventDefault();

        console.log("submit");
        post(route("message.send"));
    }

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title={user.name + " | Profile"} />
                <div className="py-12 px-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-zinc-950 overflow-hidden shadow-sm sm:rounded-lg">
                            <h1 className="text-4xl font-bold">{user.name}</h1>
                            <div className="flex gap-2">
                                <h2 className="text-gray-400">Followers: 3</h2>
                                <h2 className="text-gray-400">Following: 0</h2>
                            </div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">
                                        Send a message
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <form
                                        className="mt-2"
                                        onSubmit={handleMessageSubmit}
                                    >
                                        <DialogHeader>
                                            <DialogTitle>
                                                Send a message anonymously!
                                            </DialogTitle>
                                            <DialogDescription>
                                                Send messages without revealing
                                                your identity. Stay anonymous
                                                while expressing yourself.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <Textarea
                                                id="message"
                                                className="col-span-3"
                                                placeholder="Type your message here."
                                                onChange={(e) =>
                                                    setData(
                                                        "content",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.content}
                                            />
                                        </div>
                                        <DialogFooter>
                                            <div className="flex items-center gap-3">
                                                <Transition
                                                    show={recentlySuccessful}
                                                    enter="transition ease-in-out"
                                                    enterFrom="opacity-0"
                                                    leave="transition ease-in-out"
                                                    leaveTo="opacity-0"
                                                >
                                                    <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        Sent <FaCheck />
                                                    </p>
                                                </Transition>
                                                <Button
                                                    type="submit"
                                                    disabled={processing}
                                                >
                                                    Send now!
                                                </Button>
                                            </div>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default ProfileView;
