"use client";

import Link from "next/link";

export default function Footer(): JSX.Element {
    return (
        <footer className='fixed bottom-0 text-center text-white font-bold left-0 right-0 p-4 bg-gray-900'>
            <p>
                Movie Database Scraped from{" "}
                <Link href='https://www.themoviedb.org' className='text-blue-600'>
                    TMDB
                </Link>
            </p>
        </footer>
    );
}
