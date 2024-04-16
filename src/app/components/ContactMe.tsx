import React from 'react';
import Image from 'next/image';
import Me from '../../../public/images/me.jpg';

function ContactMe() {
  return (
    <div className="flex flex-col lg:flex-row justify-between py-4 ">
      <div className="relative h-52 w-52 ">
        <Image src={Me} alt="" layout="fill" className="rounded-full object-cover" unoptimized />
      </div>
      <div>
        <p className="text-xl sm:text-2xl font-medium text-c2 border-l-2 border-c4 pl-4 mb-2">
          contact details
        </p>
        <ul className="text-sm sm:text-xl text-bluedark">
          <li>Peter yang </li>
          <li>Taipei, Taiwan </li>
          <li>+886 961296288</li>
          <li>ipod4928@gmail.com</li>
        </ul>
      </div>
      <a
        className="flex bg-bluedark h-9 cursor-pointer text-c2 leading-9 px-3 max-w-xs my-4"
        href="https://docs.google.com/uc?export=download&id=1YmF9ca2K309Hl0D4jHM9EbLTjpkeD5CT"
      >
        DOWNLOAD RESUME
      </a>
    </div>
  );
}

export default ContactMe;
