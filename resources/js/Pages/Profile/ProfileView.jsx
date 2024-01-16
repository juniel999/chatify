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
import { Textarea } from "@/components/ui/textarea";
import InputError from "@/Components/InputError";
import { Transition } from "@headlessui/react";
import { FaCheck } from "react-icons/fa";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function ProfileView({ auth, user }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        content: "",
        receiver_id: user.id,
    });

    function handleMessageSubmit(e) {
        e.preventDefault();

        post(route("message.send"), {
            onSuccess: () => reset(),
        });
    }

    const copyLink = useRef(null);
    const [isLinkCopied, setIsLinkedCopied] = useState(false);

    const copyToClipboard = () => {
        const textToCopy = copyLink.current.innerText;
        setIsLinkedCopied(true);

        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                console.log("Copied");
                recentlySuccessful;
            })
            .catch((err) =>
                console.error("Unable to copy text to clipboard", err)
            );
        setTimeout(() => {
            setIsLinkedCopied(false);
        }, 3000);
    };

    const userProfile = user.profile_img_url || "/assets/default_profile.png";

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title={user.name + " | Profile"} />
                <div className="py-12 px-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white py-5 dark:bg-zinc-950 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img
                                    src={userProfile}
                                    alt="user profile"
                                    className="border-2 border-white object-contain h-24 w-24 max-w-[250px] max-h-[250px] rounded-full"
                                />
                                <h1 className="text-4xl font-bold mt-3">
                                    {user.name}
                                </h1>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline">
                                            Send me an anonymous message!
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
                                                    Send messages without
                                                    revealing your identity.
                                                    Stay anonymous while
                                                    expressing yourself.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <Textarea
                                                    id="message"
                                                    className="col-span-3"
                                                    placeholder="Type your message here."
                                                    value={data.content}
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
                                                        show={
                                                            recentlySuccessful
                                                        }
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

                                {auth.user.id == user.id && (
                                    <div className="mt-8">
                                        <div className="flex flex-col items-center">
                                            <p className="text-lg">
                                                Step 1: Copy your link
                                            </p>
                                            <p
                                                ref={copyLink}
                                                className="border-2 py-2 px-3 text-sm mb-1 rounded-full text-zinc-400"
                                            >
                                                http://127.0.0.1:8000
                                                {window.location.pathname}
                                            </p>
                                            <div className="flex gap-2 items-center w-fit">
                                                <Button
                                                    onClick={copyToClipboard}
                                                    className="rounded-full"
                                                    variant="outline"
                                                >
                                                    copy link{" "}
                                                    <FaCopy className="ms-2" />
                                                </Button>
                                                <Transition
                                                    show={isLinkCopied}
                                                    enter="transition ease-in-out"
                                                    enterFrom="opacity-0"
                                                    leave="transition ease-in-out"
                                                    leaveTo="opacity-0"
                                                >
                                                    <FaCheck />
                                                </Transition>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex flex-col items-center">
                                            <p className="text-lg">
                                                Step 2: Share link in your story
                                            </p>
                                            <Button className="rounded-full w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                                                <FaInstagram className="me-2" />
                                                Share!
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default ProfileView;
