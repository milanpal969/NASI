import React from 'react';
import { MoonIcon, SunIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import logo from '../assets/logo.png';

const navItems = ['Home', 'The Academy', 'Rules & Regulations', 'Fellowship', 'Publications', 'Membership', 'Contact Us'];

export default function Header() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center">
            {/* <img src={logo} alt="Logo" className="h-6 w-auto" /> */}
            <span className="ml-2 font-semibold text-blue-600 dark:text-blue-400 text-base">
              The National Academy of Sciences, India
            </span>
          </div>
          <nav className="hidden md:flex space-x-4">
            {navItems.map(item => (
              <a
                key={item}
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-3">
            <button onClick={() => setDark(!dark)}>
              {dark
                ? <SunIcon className="h-5 w-5 text-yellow-400" />
                : <MoonIcon className="h-5 w-5 text-gray-600" />
              }
            </button>
            <button>
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
