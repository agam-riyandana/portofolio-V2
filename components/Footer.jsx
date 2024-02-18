import Link from "next/link";
import Logo from "./Logo";
import Social from "./Social";
import { ModeToggle } from "./ModeToggle";
export default function Footer() {
    return (
        <footer className="grid gap-3 md:px-20 lg:px-32 px-8 py-10">
            <div className="flex justify-between">
                <div>
                    <Logo />
                    <p className="text-sm">Powered By<a href="#" className="hover:underline hover:text-primary">AGAM</a><span className="text-primary">.</span></p>
                </div>
                <ModeToggle/>
            </div>
            <Social />
            <ul className="text-sm grid gap-1">
                <li className="hover:underline hover:text-primary"><Link href="#">Fix this web</Link></li>
                <li className="hover:underline hover:text-primary"><Link href="#">Report Issue</Link></li>
            </ul>
            <p className="text-xs">Copyright © {new Date().getFullYear()} <a href="https://agamriyandana.my.id" className="hover:underline hover:text-primary">Agam Riyandana</a> All Rights Reserved.</p>
        </footer>
    )
}
