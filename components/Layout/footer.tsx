"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/images/logo.png"
import email from "@/images/email.png"
import location from "@/images/location.png"

const Footer = () => {
  return (
    <footer className='bg-white h-[75vh]'>
      <div className={`container mx-auto px-4 md:px-0`}>
        <div className='grid grid-cols-1 px-5 py-20 md:grid-cols-3 xl:grid-cols-6 gap-x-2 lg:gap-x-5 lg:grid-rows-1 xl:px-0 '>
          {/* Products */}
          <div className='flex-1 flex flex-col gap-y-2 capitalize text-neutral-700 text-[12px]'>
            <h4 className='my-4 font-bold text-black'>Products</h4>
            <Link target='_blank' href={'/products/linkedin-chrome-extension'}>
              <p>EZ LinkedIn Extension</p>
            </Link>
            <Link target='_blank' href={'/products/ai-personality-intel'}>
              <p>AI Personality Intel</p>
            </Link>
            <Link target='_blank' href={'/products/ai-one-click-reachout'}>
              <p>AI Reachout</p>
            </Link>
            <Link target='_blank' href={'/products/ai-prospecting-search'}>
              <p>Prospect Search</p>
            </Link>
            <Link target='_blank' href={'/products/contact-manager'}>
              <p>Contacts Manager</p>
            </Link>
            <Link target='_blank' href={'/products/api'}>
              <p>API</p>
            </Link>
            <Link target='_blank' href={'/products/integration'}>
              <p>Integration</p>
            </Link>
            <Link target="_blank" href={"/install-extension-manually"}>
              <p>Install Extension </p>
            </Link>
          </div>
          {/* Free Tools */}
          <div className='flex-1 flex flex-col gap-y-2 capitalize text-neutral-700 text-[12px]'>
            <h4 className='my-4 font-bold text-black'>Free Tools</h4>
            <Link target='_blank' href={'/ai-job-analyzer'}>
              <p>Job Analyzer</p>
            </Link>
            <Link target='_blank' href={'/ai-ats-resume-matcher'}>
              <p>ATS Resume Scanner</p>
            </Link>
            <Link target='_blank' href={'/boolean-xray'}>
              <p>AI Boolean Strings Generator</p>
            </Link>
            <Link target='_blank' href={'/whos-hiring'}>
              <p>Who&apos;s Hiring</p>
            </Link>
            <Link
              target='_blank'
              href={'/sales-script-generator'}
            >
              <p>Sales Script Generator</p>
            </Link>
            <Link target='_blank' href={'/invoice-generator'}>
              <p>Invoice Template Generator</p>
            </Link>
          </div>
          {/* Company */}
          <div className='flex-1 capitalize flex flex-col gap-y-2 text-neutral-700 text-[12px]'>
            <h4 className='my-4 font-bold'>Company</h4>
            <Link target='_blank' href='/pricing'>
              <p>Pricing</p>
            </Link>
            <Link target='_blank' href='/our-data'>
              <p>Our Data</p>
            </Link>
            <Link target='_blank' href={'/partner-program-affiliates'}>
              <p>Partner Program Affiliates</p>
            </Link>
            <div className='flex items-center'>
              <Link target='_blank' href='/careers'>
                <p>Careers</p>
              </Link>
              <button className=' text-[10px] hidden md:block p-1 ml-2 rounded text-white  bg-gradient-to-r from-blue-700 via-indigo-600 to-pink-400 '>
                {' '}
                we&apos;re hiring
              </button>
            </div>
            <Link target='_blank' href='/about-us'>
              <p>About Us</p>
            </Link>
          </div>
          {/* Legal */}
          <div className='flex-1 capitalize flex flex-col gap-y-2 text-neutral-700 text-[12px]'>
            <h4 className='my-4 font-bold'>Legal</h4>
            <Link target='_blank' href='/legal/terms'>
              <p>Terms of Service</p>
            </Link>
            <Link target='_blank' href='/legal/privacy-policy'>
              <p>Privacy Policy</p>
            </Link>
            <Link target='_blank' href={'/legal/gdpr'}>
              <p>GDPR Compliance</p>
            </Link>
            <Link target='_blank' href='/do-not-sell-my-info'>
              <p>Do Not Sell My Information</p>
            </Link>
          </div>
          {/* Resources */}
          <div className='flex-1 flex flex-col gap-y-2 capitalize text-neutral-700 text-[12px]'>
            <h4 className='my-4 font-bold'>Support & Resources</h4>
            <Link target='_blank' href={'https://eazyconnections.tawk.help'}>
              <p>Help Center</p>
            </Link>
            <p>API Documentation</p>
            <Link target='_blank' href={'/products/download-extension'}>
              <p>Install Extension </p>
            </Link>

            <p>Roadmap</p>
            <p>Blog</p>
            <Link target='_blank' href='/contact-us'>
              <p>Contact US</p>
            </Link>
          </div>
          {/* Logo and Email info */}
          <div className='flex flex-col flex-1 order-last md:order-none md:row-span-2 '>
            <div className='flex flex-col gap-3 '>
              <Link
                target='_blank'
                className='flex flex-col items-center md:flex-row'
                href='/'
              >
                <Image
                  src={logo}
                  width={0}
                  height={0}
                  alt='ez-web - logo'
                  placeholder='blur'
                  className='w-[50px] aspect-auto'
                />
                <p className='ml-2 text-[15px] font-medium '>
                  <span className='font-bold'>Eazy</span>Connections
                </p>
              </Link>
              <div className='flex items-center gap-5'>
                <Image
                  src={location}
                  width={0}
                  height={0}
                  alt='ez-web - location'
                  placeholder='blur'
                  className='w-[30px] aspect-auto'
                />
                <p className='md:w-4/5 text-[12px]'>
                  133 Westfield Avenue, Watford, United Kingdom, WD24 7HF
                </p>
              </div>
              <div className='flex items-center gap-5'>
                <Image
                  src={email}
                  alt='ez-web - email'
                  placeholder='blur'
                  className='w-[30px]  aspect-auto'
                />

                <p className='w-2/3 text-[12px] '>info@eazyconnections.ai</p>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-8 '>
              {/* Link for instagram */}
              <Link
                target='_blank'
                href='https://www.instagram.com/eazyconnections.ai/'
              >
                <svg
                  className='text-black cursor-pointer hover:fill-current hover:text-gray-500'
                  width='22'
                  height='22'
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_305_8)'>
                    <path d='M8 0C5.829 0 5.556 0.01 4.703 0.048C3.85 0.088 3.269 0.222 2.76 0.42C2.22609 0.620819 1.74249 0.935826 1.343 1.343C0.936076 1.7427 0.621107 2.22624 0.42 2.76C0.222 3.268 0.087 3.85 0.048 4.7C0.01 5.555 0 5.827 0 8.001C0 10.173 0.01 10.445 0.048 11.298C0.088 12.15 0.222 12.731 0.42 13.24C0.625 13.766 0.898 14.212 1.343 14.657C1.787 15.102 2.233 15.376 2.759 15.58C3.269 15.778 3.849 15.913 4.701 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.444 15.99 11.298 15.952C12.149 15.912 12.732 15.778 13.241 15.58C13.7746 15.3791 14.2578 15.0641 14.657 14.657C15.102 14.212 15.375 13.766 15.58 13.24C15.777 12.731 15.912 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.701C15.912 3.85 15.777 3.268 15.58 2.76C15.3789 2.22623 15.0639 1.74268 14.657 1.343C14.2576 0.935676 13.774 0.620645 13.24 0.42C12.73 0.222 12.148 0.087 11.297 0.048C10.443 0.01 10.172 0 7.998 0H8.001H8ZM7.283 1.442H8.001C10.137 1.442 10.39 1.449 11.233 1.488C12.013 1.523 12.437 1.654 12.719 1.763C13.092 1.908 13.359 2.082 13.639 2.362C13.919 2.642 14.092 2.908 14.237 3.282C14.347 3.563 14.477 3.987 14.512 4.767C14.551 5.61 14.559 5.863 14.559 7.998C14.559 10.133 14.551 10.387 14.512 11.23C14.477 12.01 14.346 12.433 14.237 12.715C14.1087 13.0624 13.904 13.3764 13.638 13.634C13.358 13.914 13.092 14.087 12.718 14.232C12.438 14.342 12.014 14.472 11.233 14.508C10.39 14.546 10.137 14.555 8.001 14.555C5.865 14.555 5.611 14.546 4.768 14.508C3.988 14.472 3.565 14.342 3.283 14.232C2.9355 14.1039 2.62113 13.8996 2.363 13.634C2.09675 13.376 1.89172 13.0617 1.763 12.714C1.654 12.433 1.523 12.009 1.488 11.229C1.45 10.386 1.442 10.133 1.442 7.996C1.442 5.86 1.45 5.608 1.488 4.765C1.524 3.985 1.654 3.561 1.764 3.279C1.909 2.906 2.083 2.639 2.363 2.359C2.643 2.079 2.909 1.906 3.283 1.761C3.565 1.651 3.988 1.521 4.768 1.485C5.506 1.451 5.792 1.441 7.283 1.44V1.442ZM12.271 2.77C12.1449 2.77 12.0201 2.79483 11.9036 2.84308C11.7872 2.89132 11.6813 2.96203 11.5922 3.05118C11.503 3.14032 11.4323 3.24615 11.3841 3.36262C11.3358 3.4791 11.311 3.60393 11.311 3.73C11.311 3.85607 11.3358 3.9809 11.3841 4.09738C11.4323 4.21385 11.503 4.31968 11.5922 4.40882C11.6813 4.49797 11.7872 4.56868 11.9036 4.61692C12.0201 4.66517 12.1449 4.69 12.271 4.69C12.5256 4.69 12.7698 4.58886 12.9498 4.40882C13.1299 4.22879 13.231 3.98461 13.231 3.73C13.231 3.47539 13.1299 3.23121 12.9498 3.05118C12.7698 2.87114 12.5256 2.77 12.271 2.77ZM8.001 3.892C7.45607 3.8835 6.91489 3.98349 6.40898 4.18614C5.90306 4.3888 5.44251 4.69007 5.05415 5.07242C4.66579 5.45478 4.35736 5.91057 4.14684 6.41326C3.93632 6.91595 3.8279 7.4555 3.8279 8.0005C3.8279 8.5455 3.93632 9.08505 4.14684 9.58774C4.35736 10.0904 4.66579 10.5462 5.05415 10.9286C5.44251 11.3109 5.90306 11.6122 6.40898 11.8149C6.91489 12.0175 7.45607 12.1175 8.001 12.109C9.07954 12.0922 10.1082 11.6519 10.865 10.8833C11.6217 10.1146 12.0459 9.07917 12.0459 8.0005C12.0459 6.92183 11.6217 5.88641 10.865 5.11775C10.1082 4.34909 9.07954 3.90883 8.001 3.892ZM8.001 5.333C8.70833 5.333 9.38669 5.61399 9.88685 6.11415C10.387 6.61431 10.668 7.29267 10.668 8C10.668 8.70733 10.387 9.38569 9.88685 9.88585C9.38669 10.386 8.70833 10.667 8.001 10.667C7.29367 10.667 6.61531 10.386 6.11515 9.88585C5.61499 9.38569 5.334 8.70733 5.334 8C5.334 7.29267 5.61499 6.61431 6.11515 6.11415C6.61531 5.61399 7.29367 5.333 8.001 5.333Z' />
                  </g>
                  <defs>
                    <clipPath id='clip0_305_8'>
                      <rect width='16' height='16' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              {/* Link for facebook */}
              <Link href=''>
                <svg
                  className='text-black cursor-pointer hover:fill-current hover:text-gray-500'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M20.9 2H3.1C2.80826 2 2.52847 2.11589 2.32218 2.32218C2.11589 2.52847 2 2.80826 2 3.1V20.9C2 21.1917 2.11589 21.4715 2.32218 21.6778C2.52847 21.8841 2.80826 22 3.1 22H12.68V14.25H10.08V11.25H12.68V9C12.6261 8.47176 12.6885 7.93813 12.8627 7.43654C13.0369 6.93495 13.3188 6.47755 13.6885 6.09641C14.0582 5.71528 14.5068 5.41964 15.0028 5.23024C15.4989 5.04083 16.0304 4.96225 16.56 5C17.3383 4.99521 18.1163 5.03528 18.89 5.12V7.82H17.3C16.04 7.82 15.8 8.42 15.8 9.29V11.22H18.8L18.41 14.22H15.8V22H20.9C21.0445 22 21.1875 21.9715 21.321 21.9163C21.4544 21.861 21.5757 21.78 21.6778 21.6778C21.78 21.5757 21.861 21.4544 21.9163 21.321C21.9715 21.1875 22 21.0445 22 20.9V3.1C22 2.95555 21.9715 2.81251 21.9163 2.67905C21.861 2.54559 21.78 2.42433 21.6778 2.32218C21.5757 2.22004 21.4544 2.13901 21.321 2.08373C21.1875 2.02845 21.0445 2 20.9 2Z' />
                </svg>
              </Link>

              {/* Link for twitter */}
              <Link
                target='_blank'
                href='https://x.com/home/EazyConnections_AI@Eazyconnect25'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='text-black cursor-pointer hover:fill-current hover:text-gray-500'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z' />
                </svg>
              </Link>

              {/* Link for youtube */}
              <Link
                target='_blank'
                href='https://www.youtube.com/channel/UCiIjWdgqbWNVeLE4-rksYnQ'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='text-black cursor-pointer hover:fill-current hover:text-gray-500'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12.244 4C12.778 4.003 14.114 4.016 15.534 4.073L16.038 4.095C17.467 4.162 18.895 4.278 19.604 4.475C20.549 4.741 21.291 5.515 21.542 6.497C21.942 8.057 21.992 11.099 21.998 11.836L21.999 11.988V12.162C21.992 12.899 21.942 15.942 21.542 17.501C21.288 18.486 20.545 19.261 19.604 19.523C18.895 19.72 17.467 19.836 16.038 19.903L15.534 19.926C14.114 19.982 12.778 19.996 12.244 19.998L12.009 19.999H11.754C10.624 19.992 5.898 19.941 4.394 19.523C3.45 19.257 2.707 18.483 2.456 17.501C2.056 15.941 2.006 12.899 2 12.162V11.836C2.006 11.099 2.056 8.056 2.456 6.497C2.71 5.512 3.453 4.737 4.395 4.476C5.898 4.057 10.625 4.006 11.755 4H12.244ZM9.999 8.5V15.5L15.999 12L9.999 8.5Z' />
                </svg>
              </Link>

              {/* Link for Google */}
              {/* <Link  href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-black cursor-pointer hover:fill-current hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.99 13.9V10.18H21.35C21.49 10.81 21.6 11.4 21.6 12.23C21.6 17.94 17.77 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C14.7 2 16.96 2.99 18.69 4.61L15.85 7.37C15.13 6.69 13.87 5.89 12 5.89C8.69 5.89 5.99 8.64 5.99 12.01C5.99 15.38 8.69 18.13 12 18.13C15.83 18.13 17.24 15.48 17.5 13.91H11.99V13.9Z" />
                </svg>
              </Link> */}

              {/* Link for Tiktok */}
              {/* <Link href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-black cursor-pointer hover:fill-current hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6002 5.82C15.9166 5.03962 15.5399 4.03743 15.5402 3H12.4502V15.4C12.4263 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5316 17.8999 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z" />
                </svg>
              </Link> */}
            </div>

            <div className='flex mt-2 gap-x-1'>
              <Link
                target='_blank'
                href='https://www.linkedin.com/company/eazyconnections-ai'
              >
                <svg
                  className='cursor-pointer'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  fill='#0077B5'
                  height='30px'
                  width='30px'
                  version='1.1'
                  id='Layer_1'
                  viewBox='-143 145 512 512'
                  xmlSpace='preserve'
                >
                  <path d='M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z   M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7  c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4  c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6  c35.5,0,63.3,23,63.3,72.4V508.1z' />
                </svg>
              </Link>

              <div className='flex items-center justify-center px-2 rounded-sm bg-[#0077B5] cursor-pointer'>
                <Link
                  target='_blank'
                  href='https://www.linkedin.com/company/eazyconnections-ai'
                >
                  <p className='text-white '>Follow</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer