import LeftSidebar from './components/LeftSidebar';

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full flex relative'>
        {/* Left section */}
        <LeftSidebar />
        <main className='ml-[275px] flex w-[600px] h-full flex-col'>
          
        </main>
        <section></section>
      </div>
    </div>
  );
}
