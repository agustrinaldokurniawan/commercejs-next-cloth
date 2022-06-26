import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import NextImg from 'next/image';
import Link from 'next/link';

const About = () => (
  <Root>
    <Head>
      <title>About | Nadrella Cloth</title>
    </Head>
    <div className='about-container'>
      {/* Row */}
      <div className='row mt-5 pt-5 about-hero'>
        <div className='col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content'>
          <div className='h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center'>
            <h2 className='font-size-header mb-4'>Tentang Nadrella Cloth</h2>
            <h4 className='font-size-subheader mb-4'>
              Nadrella Cloth didirikan pada tahun 2022. Dengan pilihan lebih
              dari banyak brand lokal dan internasional, kami membawa fashion ke
              dalam dimensi yang lebih baik dari sebelumnya. Kami menawarkan
              pakaian wanita, pakaian pria, aksesoris, dan banyak lagi! Hal
              inilah yang membuat kami menjadi tujuan utama fashion online di
              Indonesia. Banyak produk online dan banyak produk baru setiap
              minggunya, kami sangat ambisius dan akan terus berkembang. Kabar
              baiknya adalah, kami memberikan Anda banyak sekali pilihan untuk
              tetap menjadi seseorang yang stylish. Kami adalah sarana penyedia
              fashion yang diimbangi dengan teknologi terkini yang akan
              memberikan Anda pengalaman berbelanja online yang tak
              tertandingin. Mengapa berbelanja di tempat lain ketika Nadrella
              Cloth adalah toko fashion online yang melayani segala keperluan
              fashion Anda.
            </h4>
          </div>
        </div>

        <div className='col-12 col-lg-6'>
          <div className='about-image h-100'>
            <div className='d-flex align-items-center justify-content-center h-100'>
              <NextImg
                src='/images/home-1.jpg'
                alt='illustration'
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <div className='about-image h-100'>
            <div className='d-flex align-items-center justify-content-center h-100'>
              <NextImg
                src='/images/home-2.jpg'
                alt='illustration'
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className='col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content'>
          <div className='h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5'>
            <h3 className='font-size-header mb-4'>Belanja di Nadrella Cloth</h3>
            <h4 className='font-size-subheader mb-4'>
              Kami akan terus memberikan produk terbaik untuk melengkapi fashion
              harian anda untuk pergi kebutuhuan apa saja.
            </h4>
            <div className='mt-3'>
              <Link
                href={'/collection'}
                className='px-4 py-3 flex-grow-1 font-color-white about-net'
              >
                Belanja Sekarang!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
