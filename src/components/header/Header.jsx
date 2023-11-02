
const Header = () => {

  return (
    <div className="pb-10 ">
      <div className="navbar bg-blue-100 rounded-lg">


      <div class="navbar bg-blue-200">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Course</a>
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-lg font-bold lg:font-bold"> Course</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li tabindex="0">
        <details>
          <summary>Course</summary>
        </details>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn bg-[#2F80ED]">Button</a>
  </div>
</div>
        {/* <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl lg:text-4xl font-bold">Course Registration</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className=" hidden lg:input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/RTvj3Yr/boy1.png" />
              </div>
            </label>

          </div>
        </div> */}
      </div>

    </div>
  );
};

export default Header;
