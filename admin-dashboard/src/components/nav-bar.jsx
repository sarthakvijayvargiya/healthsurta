import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

import { useAdminContext } from '../context/admin-context';
const Navbar = () => {
    const {aToken,setAToken} = useAdminContext();
    const navigate = useNavigate();

    const logout =()=>{
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className='flex items-center gap-2  text-sm'>
            <img className='w-36 sm:w-40 cursor-pointer' src={logo} alt="" />
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? "Admin":"Doctor"}</p>
        </div>
        <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar;