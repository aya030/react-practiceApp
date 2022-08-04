import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className="bg-green-600 py-6">
        <div className="flex justify-between w-3/4 mx-auto">
          <Link to="/">
            <p className="text-2xl text-white">AyanenoAPP</p>
          </Link>
          <div className="flex">
            <Link to="/page1">
              <p className="text-xl text-white mr-10">Page1</p>
            </Link>
            <Link to="/page2">
              <p className="text-xl text-white">Page2</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
