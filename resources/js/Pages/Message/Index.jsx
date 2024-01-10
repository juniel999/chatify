import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Index({ auth }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Messages" />
            </AuthenticatedLayout>
        </>
    );
}

export default Index;
