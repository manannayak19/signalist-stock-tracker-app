'use client'

import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import {useRouter} from "next/navigation";

const Header = ({user} : {user: User}) => {

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="Signalist Logo" width={140} height={32} className="h-8 w-auto cursor-pointer"></Image>
                </Link>
                <nav className="hidden sm:block">
                {/* navItems*/}
                    <NavItems />
                </nav>
                <UserDropdown user={user}/>

            </div>
        </header>
    )
}
export default Header
