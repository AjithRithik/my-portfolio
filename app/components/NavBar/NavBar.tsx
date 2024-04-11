import { Navigation } from "../Navigation";

type NavBarProps = {
  isOpen?:boolean;
}

export const NavBar = ({isOpen}: NavBarProps) => {
    
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <FontAwesomeIcon className="text-5xl" icon={faXmark} />
      </button> */}
      <Navigation/>
    </div>
  );
};
