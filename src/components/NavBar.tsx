import "../App.css";
import {  Navbar } from "keep-react";
import { Heart , Coffee } from "phosphor-react";

function NavBarComponent() {
  return (
    <Navbar fluid={true} className='fixed inset-x-0 bottom-0  h-30 xs:h-20 bg-transparent'>
      <Navbar.Container className="flex items-center justify-around">

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="flex items-center justify-between gap-5"
          >
            <div className="flex flex-col font-semibold items-center">
            <Navbar.Link
              icon={<Coffee size={40} color="#4338CA" weight={"duotone"}/>}
              iconAnimation={false}
            />
            <p className=" text-indigo-700">Reserve</p>
            </div>
            <div className="flex flex-col font-semibold items-center">
            <Navbar.Link
              icon={<Heart size={40} color="#334155" />}
              iconAnimation={false}
            />
            <p className="text-slate-700">My Shifts</p>
            </div>

          </Navbar.Container>

        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}

export default NavBarComponent;
