
import searchIcon from '../../../assets/search.png';


export default function SearchTerm() {
  return (
    <div className="flex border-[2px] border-black rounded-md py-1">
      
      <input type="text" placeholder="Search for candidates" className="py-1 px-2 outline-none text-center" />
      <hr color='black' />
      <p className="flex items-center border-l-[1px] border-black px-3 cursor-pointer">
      <img src={searchIcon} alt='search' className='h-4 w-4' />
      </p>
    </div>
  )
}
