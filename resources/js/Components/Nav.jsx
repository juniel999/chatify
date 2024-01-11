import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import { FaAngleDown } from "react-icons/fa6";
import NavLink from "./NavLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Nav({ user }) {
    return (
        <>
            <div className="h-[10vh] flex items-center p-4 sm:p-8 border-b">
                <div className="flex max-w-7xl mx-auto justify-between items-center w-full">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                            <img
                                className="object-contain w-12"
                                src="/assets/chatify_dark.png"
                                alt="logo"
                            />
                            <p>Chatify</p>
                        </div>
                        <NavLink
                            href={route("dashboard")}
                            className="md:inline-block hidden text-gray-400 hover:text-white"
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            href={route("profile.view", { user })}
                            className="md:inline-block hidden text-gray-400 hover:text-white"
                            active={route().current("profile.view")}
                        >
                            Profile
                        </NavLink>

                        <NavLink
                            href={route("message.index")}
                            className="md:inline-block hidden text-gray-400 hover:text-white"
                            active={route().current("message.index")}
                        >
                            Messages
                        </NavLink>
                    </div>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="cursor-pointer flex items-center gap-2">
                                    <Avatar className="w-8 h-8 object-contain">
                                        <AvatarImage src="/assets/default_profile.png" />
                                        <AvatarFallback>
                                            {user.name}
                                        </AvatarFallback>
                                    </Avatar>
                                    {user.email} <FaAngleDown />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <Link href={route("profile.edit")}>
                                        <DropdownMenuItem>
                                            Profile
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuItem>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator className="md:hidden" />
                                {/* mobile */}
                                <DropdownMenuGroup className="md:hidden">
                                    <DropdownMenuItem>
                                        <NavLink
                                            href={route("dashboard")}
                                            className="md:hidden text-gray-400 hover:text-white"
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            Dashboard
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <NavLink
                                            href={route("profile.view", {
                                                user,
                                            })}
                                            className="md:hidden text-gray-400 hover:text-white"
                                            active={route().current(
                                                "profile.view"
                                            )}
                                        >
                                            Profile
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <NavLink
                                            href={route("message.index")}
                                            className="md:hidden text-gray-400 hover:text-white"
                                            active={route().current(
                                                "message.index"
                                            )}
                                        >
                                            Messages
                                        </NavLink>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
