export default function Navbar() {
  return (
    <div className="navbar flex-row flex hidden md:block">
      <div className="navbar-main-text flex-row flex gap-2 justify-start">
        <button className="navbar-home font-bold text-medium pl-7">Home</button>
        <button className="navbar-arrivals font-bold text-medium">
          New Arrivals!
        </button>
        <button className="navbar-cart font-bold text-medium border-3 rounded-lg border-solid">
          Cart
        </button>
      </div>
    </div>
  );
}
