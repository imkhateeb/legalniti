import cross from '../../../assets/cross.png';
import done from '../../../assets/done.png';
import questionMark from '../../../assets/question-mark.png';

const Content = () => {
  return (
    <div className='flex justify-center items-center py-5 px-1 w-full px-10'>

      <div className='flex gap-2 w-[30%]'>
        <input type='checkbox' className='w-8' />
        <div>
          <p className='text-md font-semibold'>Md Naseem Akhtar</p>
          <p className='text-base'>Sales executive</p>
          <p className='text-xs'>Bengaluru karnataka, Applied Aug 9. Applied to buisness development associate</p>
        </div>
      </div>

      <div className='flex gap-2 w-[40%] justify-center'>
        <p className='font-semibold'>Law and digital techniques</p>
      </div>

      <div className='flex gap-2 w-[30%] justify-center'>
        <div className='flex border-[2px] border-black rounded-md'>
          <p
            className=' flex justify-center items-center w-12 py-2'
          >
            <img src={done} alt='done' className='w-6 h-6' />
          </p>
          <p
            className='border-l-[1px] border-r-[1px] border-black p-1 flex justify-center items-center w-12 py-2'
          >
            <img src={questionMark} alt='questionMark' className='w-6 h-6' />
          </p>
          <p
            className=' flex justify-center items-center w-12 py-2'
          >
            <img src={cross} alt='cross' className='w-6 h-6' />
          </p>
        </div>
      </div>

    </div>
  )
}

export default function Contents() {
  return (
    <div className='w-full min-h-[50vh] pb-20'>

      <div className='flex justify-center items-center py-5 mt-2 px-10 w-full'>

        <div className='flex gap-2 w-[30%]'>
          <input type='checkbox' className='w-8' />
          <p>Candidate</p>
        </div>

        <div className='flex gap-2 w-[40%] justify-center'>
          <p>Name of service</p>
        </div>

        <div className='flex gap-2 w-[30%] justify-center'>
          <p>Intererst</p>
        </div>
      </div>

      <hr className='my-2 border-[0.5px] border-gray-300' />

      {Array(2).fill(0).map((_, i) => (
        <div
          key={i}
        >
          <Content />
          <hr className='my-2 border-[0.5px] border-gray-300' />
        </div>
      ))}

    </div>
  )
}
