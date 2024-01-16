import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "@inertiajs/react";

function NewMessageCard({ message }) {
    const cardClassNames = message.isRead
        ? "bg-zinc-950 hover:bg-zinc-800"
        : "bg-zinc-900 hover:bg-zinc-800";
    return (
        <>
            <Link href={route("message.show", { message })}>
                <Card className={`${cardClassNames} cursor-pointer`}>
                    <CardHeader>
                        <CardTitle>
                            <div className="flex justify-between ">
                                <span>Anonymous Message!</span>{" "}
                                {message.isRead ? (
                                    <FaCheckCircle />
                                ) : (
                                    <IoMailUnreadOutline />
                                )}
                            </div>
                        </CardTitle>
                        <CardDescription>From: anonymous</CardDescription>
                    </CardHeader>

                    <CardFooter>
                        <p>Read Now</p>
                    </CardFooter>
                </Card>
            </Link>
        </>
    );
}

export default NewMessageCard;
