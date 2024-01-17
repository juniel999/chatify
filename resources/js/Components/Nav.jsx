import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import { FaAngleDown } from "react-icons/fa6";
import NavLink from "./NavLink";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { IoSettings } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

function Nav({ user }) {
    const avatarImg = user?.profile_img_url || "/assets/default_profile.png";

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
                            href={route("profile.view", { user })}
                            className="md:inline-block hidden text-gray-400 hover:text-white"
                            active={route().current("profile.view")}
                        >
                            Profile
                        </NavLink>
                        <NavLink
                            href={route("dashboard")}
                            className="md:inline-block hidden text-gray-400 hover:text-white"
                            active={route().current("dashboard")}
                        >
                            Dashboard
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
                                    <img
                                        src={avatarImg}
                                        alt="profile avatar image"
                                        className="w-8 h-8 object-contain rounded-full hover:border-2 border-white"
                                    />
                                    <p className="md:inline-block hidden">
                                        {user.email}
                                    </p>{" "}
                                    <FaAngleDown />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                {/* mobile */}
                                <DropdownMenuGroup className="md:hidden">
                                    <DropdownMenuItem>
                                        <NavLink
                                            href={route("profile.view", {
                                                user,
                                            })}
                                            className="md:hidden text-gray-400 hover:text-white flex items-center gap-1"
                                            active={route().current(
                                                "profile.view"
                                            )}
                                        >
                                            <CgProfile />
                                            Profile
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <NavLink
                                            href={route("dashboard")}
                                            className="md:hidden text-gray-400 hover:text-white flex items-center gap-1"
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            <MdDashboard />
                                            Dashboard
                                        </NavLink>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <NavLink
                                            href={route("message.index")}
                                            className="md:hidden text-gray-400 hover:text-white flex items-center gap-1"
                                            active={route().current(
                                                "message.index"
                                            )}
                                        >
                                            <TiMessages />
                                            Messages
                                        </NavLink>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuGroup>
                                    <DropdownMenuSeparator className="md:hidden" />
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Link href={route("profile.edit")}>
                                        <DropdownMenuItem className="flex items-center gap-1">
                                            <IoSettings />
                                            Settings
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuItem>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="flex items-center gap-1"
                                        >
                                            <IoMdLogOut />
                                            Logout
                                        </Link>
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
