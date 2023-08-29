import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='bg-[#0a192f] h-screen w-full'>

            {/* Container */}
            <div className='mx-w-[1000px] sm:ml-10 mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, I am</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Meherab Hossain</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a FullStack Developer</h2>
                <p className='text-[#8892b0] mx-w-700 py-4'>I am a full-Stack Developer (and ocassionally desiging) exceptional digital experience. Now I am focused on responsive full stack web application.</p>
                <div>
                    <button className='py-3 px-2 text-white border-2 hover:bg-pink-600 my-2 flex items-center'>View work <HiArrowNarrowRight className='ml-3' /></button>
                </div>
            </div>
        </div>
    );
};

export default Home;