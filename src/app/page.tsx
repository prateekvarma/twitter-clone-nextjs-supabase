import LeftSidebar from './components/LeftSidebar';

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full flex relative'>
        {/* Left section */}
        <LeftSidebar />
        <main className='ml-[275px] mx-2 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r border-gray-600'>
          <h1 className='text-xl font-bold p-6'>Home</h1>
          <div className='border-t-[0.5px] border-b-[0.5px] px-4 flex items-stretch py-4 space-x-2 border-gray-600 relative'>
            <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
            <div className='flex flex-col w-full h-full'>
                <input
                  type='text'
                  className='w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none'
                  placeholder='Whats Happening?'
                />
              <div className='w-full justify-between items-center flex'>
                <div></div>
                <div className='w-full max-w-[100px]'>
                  <button className='rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold'>
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section></section>
      </div>
    </div>
  );
}
