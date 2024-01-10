import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link {...props} className={(active ? "text-white " : " ") + className}>
            {children}
        </Link>
    );
}
