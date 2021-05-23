import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            alt="logo"
            placeholder="logo"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex flex-grow items-center cursor-pointer bg-yellow-400 hover:bg-yellow-500  h-10 rounded-md">
          <input
            className="flex-grow w-6 flex-shrink p-2 focus:outline-none rounded-l-md"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="flex justify-between text-white text-xs items-center space-x-6 mx-6 whitespace-nowrap">
          <div className="cursor-pointer hover:underline ">
            <p className="font-extralight">Hello, Deepak</p>
            <p className="text-sm font-extrabold">Account & Lists</p>
          </div>
          <div className="cursor-pointer hover:underline ">
            <p className="font-extralight">Returns</p>
            <p className="text-sm font-extrabold">& Orders</p>
          </div>
          <div className="relative flex items-center cursor-pointer hover:underline ">
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 rounded-full h-4 w-4 text-center text-black font-bold  ">
              0
            </span>
            <ShoppingCartIcon className="h-12 p-2" />
            <p className="hidden md:inline font-extrabold mt-2">Basket</p>
          </div>
        </div>
      </div>
      <div className="flex bg-amazon_blue-light text-white space-x-6 p-2 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      </div>
    </header>
  );
};

export default Header;
