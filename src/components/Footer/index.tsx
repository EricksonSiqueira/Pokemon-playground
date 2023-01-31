import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="w-screen bg-white border-t bottom-0">
      <span>Made with love by </span>
      <Link href="https://github.com/EricksonSiqueira">Erickson</Link>
    </footer>
  );
}

export default React.memo(Footer);
