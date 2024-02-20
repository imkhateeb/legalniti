import menu from '../../assets/menu.png';
import home from '../../assets/home.png';
import people from '../../assets/people.png';
import notification from '../../assets/notification.png';
import logout from '../../assets/logout.png';

export default function Sidebar() {
  return (
    <div className="py-10 px-5 bg-gradient-to-t from-[#8D04C1] to-[#3D055E] h-[100vh] flex flex-col justify-between text-white">


      <div className="cursor-pointer flex justify-center items-center">
        <img src={menu} alt="menu" className="h-8 w-8" />
      </div>

      <div className='flex flex-col gap-8'>
        <img src={home} alt="home" className="h-8 w-8 cursor-pointer" />
        <img src={people} alt="people" className="h-8 w-8 cursor-pointer" />
        <img src={notification} alt="notification" className="h-8 w-8 cursor-pointer" />
      </div>

      <div>
        <img src={logout} alt="Logout" className="h-8 w-8 cursor-pointer" />
      </div>


    </div>
  )
}
