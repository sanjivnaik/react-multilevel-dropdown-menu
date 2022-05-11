import { Menus } from "./Menus";
import MenuItems from "./MenuItems";

const Navbar = () => {
    return (
        <nav>
            <ul className="menus">
                {Menus.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </ul>
        </nav>
    );
   };
   
   export default Navbar;