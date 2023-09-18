import Wrapper from "./common/Wrapper";
import Image from "next/image";

const Navbar = () => {
  return (
    <Wrapper style="sticky top-0 z-50">
      <nav className="flex justify-between py-5">
        <h1>LOGO</h1>
        <div className="space-x-5">
          <button>
            <Image
              src="/icons/search.svg"
              width={20}
              height={20}
              alt="search"
            />
          </button>
          <button>
            <Image src="/icons/cart.svg" width={20} height={20} alt="cart" />
          </button>
          <button>
            <Image src="/icons/menu.svg" width={20} height={20} alt="menu" />
          </button>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
