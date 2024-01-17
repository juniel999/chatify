import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { CiInboxIn } from "react-icons/ci";
import { RiUserFollowLine } from "react-icons/ri";
import { CiInboxOut } from "react-icons/ci";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard({
    auth,
    total_sent,
    total_received,
    total_sent_messages,
    total_received_messages,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 px-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-zinc-950 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="tracking-tight text-sm font-medium">
                                        <div className="flex justify-between">
                                            <div>Messages sent</div>
                                            <CiInboxOut className="text-base" />
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-5xl font-bold">
                                        {total_sent}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        +{total_sent_messages} from this month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="tracking-tight text-sm font-medium">
                                        <div className="flex justify-between">
                                            <div>Messages received</div>
                                            <CiInboxIn className="text-base" />
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-5xl font-bold">
                                        {total_received}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        +{total_received_messages} from this
                                        month
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
