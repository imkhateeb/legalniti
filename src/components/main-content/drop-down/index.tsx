
import upArrow from '../../../assets/up-arrow.png';

export default function DropDown() {

  return (
    <div className="border-[2px] rounded-md border-black flex">
      <p className="text-md font-semibold px-2 py-2">All Services</p>
      <p
        className={`border-r-[1px] border-black px-2 py-2 cursor-pointer rotate-180`}
      >
        <img src={upArrow} alt="up-arrow" className="h-6 w-6" />
      </p>
    </div>
  );
}
