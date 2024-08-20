"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo(): JSX.Element {
    return (
        <div className='flex items-center gap-1'>
            <Link href='/'>
                <Image
                    src='/images/tmdbflix_logo.png'
                    width={200}
                    height={30}
                    className='!w-20 !h-auto'
                    alt='Tmdbflix Logo'
                />
            </Link>
        </div>
    );
}
