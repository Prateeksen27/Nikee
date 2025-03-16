import React from 'react'
import footerLogo from '../assets/images/footer-logo.svg'
import { socialMedia, footerLinks } from '../Constants/Constants'
const Footer = () => {
  return (
    <section className='max-container flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
      <div className='flex flex-col items-start gap-4'>
        <img src={footerLogo} alt="" className='w-32 h-32 object-contain' />
        <div className='flex gap-4'>
          {socialMedia.map((social, index) => (
            <div key={index} className='w-12 h-12 flex justify-center items-center cursor-pointer rounded-full bg-white'>
              <img src={social.src} alt={social.id} className='w-1/2 h-1/2 object-contain' />
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index} className='mt-4 font-montserrat text-base leading-normal text-white hover:text-slate-gray cursor-pointer'>{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Footer