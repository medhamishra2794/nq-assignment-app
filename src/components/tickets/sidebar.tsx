import { IoIosArrowDroprightCircle, IoMdHome } from "react-icons/io";

const Sidebar=()=>{
  return(
    <div className="main-sidebar">
      <div className="sideMenu-list">
        <ul>
          <li>
            <IoMdHome />
          </li>
        </ul>
        <div className="sidebar-toggle">
          <IoIosArrowDroprightCircle />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;

