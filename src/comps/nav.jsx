import { MdMoreHoriz } from "react-icons/md";
export default function Nav(){
    return (
    <nav className=" text-gray-500 pl-4 text-[13px] flex flex-wrap gap-2">
          <a className="hover:underline" href="">Terms of Service</a>
          <a className="hover:underline" href="">Privacy Policy</a>
          <a className="hover:underline" href="">Cookie Policy</a>
          <a className="hover:underline" href="">Accessibility</a>
          <a className="hover:underline" href="">Ads info</a>
          <div className="hover:underline flex items-center cursor-pointer">More<MdMoreHoriz/></div>
          <p>© 2024 X Corp.</p>
        </nav>
    )

}