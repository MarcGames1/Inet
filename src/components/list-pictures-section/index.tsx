import Image from 'next/image';
import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Link from 'next/link';

const ListWithPic = ({
  indemn,
  titlu,
  listItems,
  numbered,
}: {
  indemn: string;
  titlu: string;
  listItems: any;
  image?: any | undefined;
  numbered?: boolean | undefined;
  href?: string | undefined;
}) => (
  <section id="list" className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <span className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>{indemn}</span>
        <h2 className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>{titlu}</h2>
      </div>
      <div className={tw(`flex  flex-wrap -mx-8 items-center`)}>
        <ul>
          {listItems.map((item: any, index: number) => (
            <div key={item.title} className={tw(`flex flex-col ${index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`)}>
              <li className={tw(`flex items-center w-full lg:w-1/2 px-8`)} key={item.title}>
                <div className={tw(`flex px-4 content-around `)}>
                  <span
                    className={tw(`hidden md:flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {numbered ? index + 1 : <Check fill="rgb(99,102,241)" />}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl text-indigo-500 font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                  {item.href ? (
                    <Link href={item.href}>
                      <a className={tw(`h-6 w-6 text-indigo-500 hover:text-indigo-800`)}>{'Citeste Mai Mult'}</a>
                    </Link>
                  ) : null}
                </div>
              </li>
              <div className={tw(`items-center	w-full lg:w-1/2 px-8`)}>
                <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
                  {item?.Icon ? <item.Icon width="100%" height="100%" /> : null}
                  {item?.Image ? (
                    <Image
                      layout="intrinsic"
                      src={item.Image.location}
                      alt={`${item.title} iwebAgency`}
                      width={item.Image.width}
                      height={item.Image.height}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ListWithPic;
