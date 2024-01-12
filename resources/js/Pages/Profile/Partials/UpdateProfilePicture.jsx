import { Link, useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function UpdateProfilePicture({ className }) {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            profile_image: undefined,
        });

    console.log(data.profile_image);
    const submit = (e) => {
        e.preventDefault();

        console.log("submit");
        post(route("profile.picture.update"), {
            preserveScroll: true,
            onSuccess: () => {
                // reset the file input
                document.getElementById("file_input").value = "";
            },
        });
    };

    return (
        <>
            <section className={className}>
                <header>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Profile Picture
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Update your profile picture today and let your image
                        reflect the vibrant and dynamic individual you are.
                    </p>
                </header>

                <form
                    onSubmit={submit}
                    className="mt-6 space-y-6"
                    encType="multipart/form-data"
                >
                    <img
                        src={
                            user.profile_img_url ||
                            "/assets/default_profile.png"
                        }
                        alt="profile picture"
                        className="object-contain w-24 h-24 rounded-full"
                    />
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Input
                            className="bg-gray-200 text-black"
                            id="file_input"
                            type="file"
                            onChange={(e) =>
                                setData("profile_image", e.target.files[0])
                            }
                        />
                        <InputError
                            message={errors.profile_image}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <PrimaryButton disabled={processing}>
                            Save
                        </PrimaryButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Saved.
                            </p>
                        </Transition>
                    </div>
                </form>
            </section>
        </>
    );
}

export default UpdateProfilePicture;
