"use client";

import Image from "next/image";
import Logo from "./logo";
import { useRecoilState } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function Header(): JSX.Element {
    const [search, setSearch] = useRecoilState(searchState);

    return (
        <header className='fixed top-0 left-0 right-0 px-4 py-2 bg-gray-900 flex items-center justify-between z-50'>
            <nav className='flex gap-2'>
                <Logo />
                <ul className='flex gap-2 text-white'>
                    <li>Movies</li>
                    <li>Dramas</li>
                </ul>
            </nav>
            <div className='flex w-full max-w-72 gap-2 items-center border border-white rounded-md p-2 text-white'>
                <i className='fas fa-search' />
                <input
                    className='bg-transparent'
                    placeholder='Search Movies'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </header>
    );
}
