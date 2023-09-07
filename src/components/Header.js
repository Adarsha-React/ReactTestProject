const Title = () => {
  return (
    <div>
      <h1 className="font-semibold text-sm">Learning Application</h1>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-200 p-3">
      <div className="w-2/3 flex justify-between mx-auto">
        <Title />
        <div className="flex list-none">
          <li className="pr-5 font-semibold text-sm cursor-pointer">About</li>
          <li className="pr-5 font-semibold text-sm cursor-pointer">Login</li>
        </div>
      </div>
    </div>
  );
};

export default Header;
