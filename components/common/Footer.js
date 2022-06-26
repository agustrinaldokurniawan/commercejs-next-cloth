import Link from 'next/link';
import React from 'react';

const Footer = () => (
  <footer className='pt-5'>
    <div className='pt-md-5'>
      <div className='bg-brand300'>
        <div className='custom-container d-flex flex-column flex-md-row align-items-center justify-content-end'>
          <div className='font-color-brand font-size-caption py-4 text-right'>
            <Link href={'/'} passHref>
              <div className='font-color-brand font-size-caption text-uppercase text-center'>
                &copy; {new Date().getFullYear()} Nadrella Cloth
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
