import Link from "next/link";

const Logo = () => (
    <Link href="/" >
        <h1 className="prose prose-xl font-extrabold font-display text-primary mx-4 m-0">Mike Kelly</h1>
    </Link>
);
Logo.displayName = "Logo";
export default Logo;