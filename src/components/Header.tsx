'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: '首页', path: '/' },
  { name: '随记', path: '/blog' },
  { name: '关于', path: '/about' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-4 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0E141B] shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Kuma
          </Link>
        </motion.div>

        <nav className="flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className={`relative py-2 link-hover ${isActive ? 'text-primary-light dark:text-primary-dark font-medium' : ''}`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="navigation-underline"
                        className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-light dark:bg-primary-dark"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}