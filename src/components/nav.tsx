import logo from "../assets/sinfondo.png"
function Nav() {
  return (
    <nav className="flex sm:flex-row sm:justify-between  bg-slate-700 p-5 items-center flex-col">
      <img src={logo} alt="logo" width="200" className="h-auto " />

      <div className="flex flex-col sm:flex-row sm:justify-between justify-center text-white m-5 items-center text-sm uppercase">
        <div className="mt-2 sm:mr-3 sm:ml-3">
          <a href="#">Nosotros</a>
        </div>
        <div className="mt-2 sm:mr-3 sm:ml-3">
          <a href="#">Contactanos</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
