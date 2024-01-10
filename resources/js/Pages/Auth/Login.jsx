import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Checkbox from "@/components/Checkbox";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="flex items-center justify-center">
                    <img
                        className="object-contain w-20"
                        src="/assets/chatify_dark.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Sign in
                    </h4>
                    <p className="text-sm text-muted-foreground mb-5 ">
                        Enter your credentials to login your account.
                    </p>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="example@email.com"
                            autoComplete="email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block my-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button
                        variant="outline"
                        className="ms-4"
                        disabled={processing}
                    >
                        Log in
                    </Button>
                </div>
            </form>
            {/* continue with socials */}
            <div className="relative my-3" bis_skin_checked="1">
                <div
                    className="absolute inset-0 flex items-center"
                    bis_skin_checked="1"
                >
                    <span className="w-full border-t"></span>
                </div>
                <div
                    className="relative flex justify-center text-xs uppercase"
                    bis_skin_checked="1"
                >
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <div className="flex items-center flex-col space-y-2 mb-3">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="h-[18px] w-[18px] "
                    />
                    Continue with Google
                </button>
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                    <img
                        src="https://www.svgrepo.com/show/512317/github-142.svg"
                        alt="GitHub"
                        className="h-[18px] w-[18px] "
                    />
                    Continue with GitHub
                </button>
            </div>
            <div>
                <Link
                    href={route("register")}
                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                    Create an account
                </Link>
            </div>
        </GuestLayout>
    );
}
