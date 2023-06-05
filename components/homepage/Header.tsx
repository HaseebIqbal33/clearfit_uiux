const Header = () => {
  const links = ["ABOUST US", "SERVICES", "PORTFOLIO", "BLOG", "CONTACT"];
  return (
    <div className=" " style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-20 ">
          <div className="flex items-center flex-shrink-0  mr-6">
            <span className="font-semibold tracking-tight text-black font-sans text-4xl">
              ClearFit.
            </span>
          </div>
          <div className="w-full flex justify-end gap-10 items-center">
            {links.map((item, index) => {
              return (
                <a className="text-black text-base font-medium" key={index}>
                  {item}
                </a>
              );
            })}

            <button
              className=" p-2 pl-3 pr-3"
              style={{
                background:
                  "linear-gradient(96.73deg, #C1292A 27.66%, #D0631A 85.99%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.65)",
                borderRadius: "10px",
              }}
            >
              SCHEDULE A CALL
            </button>
          </div>

          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
