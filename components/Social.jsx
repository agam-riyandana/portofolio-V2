import { LinkedInLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
    return (
        <div className="flex gap-2 items-center -ml-1 bg-secondary rounded-full p-2 w-fit">
            <Link href="https://LinkedIn.com/agam-riyandana" className="hover:text-primary"><LinkedInLogoIcon className="h-4 w-4" /></Link>
            <Link href="https://instagram.com/agam_riyandana1" className="hover:text-primary"><InstagramLogoIcon className="h-4 w-4" /></Link>
            <Link href="https://x.com/agam_riyandana1" className="hover:text-primary"><TwitterLogoIcon className="h-4 w-4" /></Link>
        </div>
    )
}
