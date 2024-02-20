import logo from '../../assets/logo.png';
import help from '../../assets/help.png';
import notification from '../../assets/notification.png';
import messagees from '../../assets/messagees.png';
import user from '../../assets/user.png';
import whiteArrow from '../../assets/white-arrow.png';

export default function Navbar() {
  return (
    <div className="flex justify-between bg-gradient-to-r from-[#000000] from-90% to-[#3D055E] px-5 py-5 text-white">

      <div>
        <img src={logo} alt='logo' className='h-12 w-20 cursor-pointer' />
      </div>

      <div className='flex gap-8'>
        <div className='flex gap-2 font-semibold items-center cursor-pointer'>
          <img src={help} alt='help' className='h-8 w-8' />
          <p>Help</p>
        </div>
        <div className='flex gap-2 font-semibold items-center cursor-pointer'>
          <img src={notification} alt='notification' className='h-8 w-8' />
          <p>Notifications</p>
        </div>
        <div className='flex gap-2 font-semibold items-center cursor-pointer'>
          <img src={messagees} alt='messagees' className='h-8 w-8' />
          <p>Messages</p>
        </div>
      </div>

      <div className='flex items-center gap-2 text-white'>
        <img src={user} alt='user' className='h-8 w-8' />
        <p className='cursor-pointer'>Mohit Kothari</p>
        <img src={whiteArrow} alt='drop-down' className='h-6 w-6 rotate-180 cursor-pointer' />
      </div>

    </div>
  )
}
