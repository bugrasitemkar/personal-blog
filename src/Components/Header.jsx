import { useNavigate } from "react-router-dom"


function Header() {
  const navigate = useNavigate();

  return (
<div className="flex items-center mt-[5%]">
  <ul className="flex flex-1 justify-center gap-4 md:gap-14">
    <li className="hover:font-bold cursor-pointer" onClick={()=>navigate('/')} >Home</li>
    <li className="hover:font-bold cursor-pointer">About</li>
    <li className="hover:font-bold cursor-pointer">Contact</li>
  </ul>
</div>
  )
}

export default Header