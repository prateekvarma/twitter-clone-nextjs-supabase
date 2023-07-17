import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { BsBell, BsBookmark, BsTwitter, BsEnvelope } from 'react-icons/bs';
import Link from 'next/link';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter,
  },
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notifications',
    icon: BsBell,
  },
  {
    title: 'Message',
    icon: BsEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: BiUser,
  },
];

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full flex relative'>
        {/* Left section */}
        <section className='fixed w-[275px] flex flex-col items-stretch h-screen space-y-4'>
          <div className='flex-col items-stretch h-screen space-y-4 my-4'>
            {NAVIGATION_ITEMS.map((item) => {
              return (
                <Link
                  key={item.title}
                  href={`/${item.title.toLowerCase()}`}
                  className='hover:bg-white/10 text-2xl transition duration-200 flex item-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6'
                >
                  <div>
                    <item.icon />
                  </div>
                  {item.title !== 'Twitter' && <div>{item.title}</div>}
                </Link>
              );
            })}
            <button className='rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200'>
              Tweet
            </button>
          </div>
          <div>at the bottom</div>
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  );
}
