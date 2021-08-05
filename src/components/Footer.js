import React from 'react';

import '../styles/components/Footer.scss';

export default function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer-title">
        &copy; {new Date().getFullYear()} - Tiendita Pop!
      </p>
    </footer>
  );
}
