import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { BsBell, BsBookmark } from 'react-icons/bs';
import { HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';

const NAVIGATION_ITEMS = [
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
    icon: HiEnvelope,
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
      <div className='max-w-screen-lg w-full flex relative'>
        {/* Left section */}
        <section className='fixed w-72 flex flex-col h-screen'>
          {NAVIGATION_ITEMS.map((item) => {
            return (
              <Link
                key={item.title}
                href={`/${item.title.toLowerCase()}`}
                className='bg-white/50 flex item-center justify-center space-x-2 rounded-3xl p-4'
              >
                <div>
                  <item.icon />
                </div>
                <div>{item.title}</div>
              </Link>
            );
          })}
        </section>
        <main>Home timeline</main>
        <section>Right section</section>
      </div>
    </div>
  );
}
