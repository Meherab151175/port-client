import t from '../assets/tailwind.png'
import c from '../assets/css.png'
import r from '../assets/react.png'
import n from '../assets/node.png'
import m from '../assets/mongo.png'
import f from '../assets/firebase.png'
import g from '../assets/github.png'
import h from '../assets/html.png'

const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] skills text-gray-300'>
            <div className=' h-full  w-[80%] mx-auto p-4 flex flex-col justify-center'>
            <div className='flex justify-center flex-col mx-auto'>
                <p className='py-4 text-center text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are the technology, that i have experienced</p>
            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <div className='hover:scale-110 duration-300 shadow-md shadow-black flex flex-col justify-center py-4'>
                    <img className='w-20 mx-auto' src={h} alt="" />
                    <p className='text-center py-3'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-300 shadow-md shadow-black flex flex-col justify-center py-4'>
                    <img className='w-20 mx-auto' src={t} alt="" />
                    <p className='text-center py-3'>Tailwind CSS</p>
                </div>
                <div className='hover:scale-110 duration-300 shadow-md shadow-black flex flex-col justify-center py-4'>
                    <img className='w-20 mx-auto' src={m} alt="" />
                    <p className='text-center py-3'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-300 shadow-md shadow-black flex flex-col justify-center py-4'>
                    <img className='w-20 mx-auto' src={g} alt="" />
                    <p className='text-center py-3'>Github</p>
                </div>
                <div className='hover:scale-110 duration-300 shadow-md shadow-black flex flex-col justify-center py-4'>
                    <img className='w-20 mx-auto' src={m} alt="" />
                    <p className='text-center py-3'>Mongodb</p>
                </div>
                <div className='hover:scale-110 duration-300 shadow-md shadow-black flex flex-col justify-center py-4'>
                    <img className='w-20 mx-auto' src={n} alt="" />
                    <p className='text-center py-3'>NODE JS</p>
                </div>
                <div className='hover:scale-110 duration-300 shadow-md shadow-black flex flex-col justify-center py-4'>
                    <img className='w-20 mx-auto' src={r} alt="" />
                    <p className='text-center py-3'>React</p>
                </div>
                <div className='hover:scale-110 duration-300 shadow-md shadow-black flex flex-col justify-center py-4'>
                    <img className='w-20 mx-auto' src={f} alt="" />
                    <p className='text-center py-3'>Firebase</p>
                </div>
                <div className='hover:scale-110 duration-300 shadow-md shadow-black flex flex-col justify-center py-4'>
                    <img className='w-20 mx-auto' src={c} alt="" />
                    <p className='text-center py-3'>CSS</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Skills;