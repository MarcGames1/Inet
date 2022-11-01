import React from 'react'
import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Link from 'next/link';
const FeatureElement = ({h3, p, href}) => {
  return (
      <div className={tw(`w-full  md:w-1/2 md:border-r lg:w-1/2 p-8`)}>
          <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <h3 className={tw(`ml-4 text-xl`)}>{h3}</h3>
          </div>
          <p className={tw(`leading-loose text-gray-500`)}>
              {p}
          </p>
          {href ? <Link href={href} >
              <a className={tw(`h-6 w-6 text-indigo-500 hover:text-indigo-800`)}>
                  <span className={tw(`leading-loose  `)}>Citeste mai mult </span> 
              </a>
          </Link> : undefined}
      </div>
  )
}

export default FeatureElement