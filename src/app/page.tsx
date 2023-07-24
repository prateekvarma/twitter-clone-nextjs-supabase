import { BsSearch } from 'react-icons/bs';
import LeftSidebar from './components/LeftSidebar';
import MainComponent from './components/MainComponent';

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-[70vw] w-full h-full flex relative'>
        <LeftSidebar />
        <MainComponent />
        <section className='sticky top-0 w-[20%] flex flex-col items-stretch h-screen px-6'>
          <div>
            <div className='relative w-full h-full'>
              <label
                htmlFor='searchBox'
                className='absolute top-0 mt-2 left-0 h-full flex items-center justify-center p-4'
              >
                <BsSearch className='w-5 h-5 text-gray-500' />
              </label>
              <input
                id='searchBox'
                type='text'
                placeholder='Search Twitter'
                className='outline-none focus:border-primary focus:border bg-neutral-800/90 w-full h-full rounded-xl py-4 px-8'
              />
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
}
