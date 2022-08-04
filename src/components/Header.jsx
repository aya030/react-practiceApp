import { Link } from 'react-router-dom';

const linkPage = [
  { to: '/page1', name: 'Page1' },
  { to: '/page2', name: 'Page2' },
];

export default function Header() {
  return (
    <div className="bg-green-600 py-6">
      <div className="flex justify-between w-3/4 mx-auto">
        <Link to="/">
          <p className="text-2xl text-white">AyanenoAPP</p>
        </Link>
        <div className="flex gap-x-9">
          {linkPage.map((link) => (
            <Link to={link.to} key={link.name}>
              <p className="text-xl text-white">{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
