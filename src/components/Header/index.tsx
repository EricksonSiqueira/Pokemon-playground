import Image from 'next/image';
import React from 'react';
import HeaderIcon from '@/public/favicon.ico';
import Link from 'next/link';

function Header() {
  return (
    <>
      <div className="h-24" />
      <header className="fixed w-screen bg-white h-24 border-b shadow-sm top-0 flex items-center justify-center">
        <nav className="max-w-screen-xl w-full">
          <Link
            href="/"
            title="Página inicial"
            aria-label="Ir para página inicial"
          >
            <Image src={HeaderIcon} alt="Pokedex logo" className="w-16 h-16" />
          </Link>
        </nav>
      </header>
    </>
  );
}

export default React.memo(Header);
