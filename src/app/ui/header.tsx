'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/' },
    // { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="bg-blue-600 text-white py-4 md:py-8">
            <div className="container mx-auto px-4 md:flex md:flex-row md:justify-between">

                <div className="mb-4 lg:mb-0">
                    <Link href="/" className="text-2xl lg:text-4xl font-light">SM Digital</Link>
                </div>

                <div className="flex flex-row gap-4 lg:gap-8 lg:justify-end">
                    {links.map((link) => {
                        return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'py-2 underline-offset-4 hover:underline',
                                {
                                    'underline': pathname === link.href,
                                },
                            )}
                        >
                            {link.name}
                        </Link>
                        );
                    })}
                </div>

            </div>
        </header>
    )
}