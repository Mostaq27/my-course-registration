 
const Header = () => {

    return (
        <div className=""> 
            <div className="navbar bg-blue-100 rounded-lg">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-4xl font-bold">Course Registration</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/RTvj3Yr/boy1.png" />
        </div>
      </label>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Header;
