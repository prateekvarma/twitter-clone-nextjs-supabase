import { BsSearch } from 'react-icons/bs';
import LeftSidebar from './components/LeftSidebar';
import MainComponent from './components/MainComponent';

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-[70vw] w-full h-full flex relative'>
        <LeftSidebar />
        <MainComponent />
        <section className='w-full flex flex-col items-stretch h-screen px-6'>
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
          <div className='flex flex-col rounded-xl bg-neutral-900 my-4'>
            <h3 className='font-bold text-2xl my-2 p-4'>Whats happening</h3>
            <div>
              {
                Array.from({length:5}).map((_, i) => (
                  <div key={i} className='hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200'>
                    <div className='font-bold text-lg'>#Trending item {i + 1}</div>
                    <div className='text-sm text-neutral-400'></div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-900 my-4'>
            <h3 className='font-bold text-2xl my-2 p-4'>Who to follow</h3>
            <div>
              {
                Array.from({length:5}).map((_, i) => (
                  <div key={i} className='hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200'>
                    <div className='w-10 h-10 bg-neutral-600 rounded-full'></div>
                    <div className='flex flex-col'>
                      <div className='font-bold text-white'>Name</div>
                      <div className='text-gray-500 text-sm'>@handle</div>
                    </div>
                    <div>
                      <button className='rounded-full px-6 py-2 bg-white text-neutral-950'>Follow</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
}
