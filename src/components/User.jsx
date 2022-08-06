import useFetchData from '../hooks/useFetchData';

export default function User() {
  const { data } = useFetchData('/users');

  return (
    <>
      <div className="w-3/4 mx-auto my-10">
        <h1 className="mb-10 text-2xl font-medium text-green-600">User Data</h1>
        <ul>
          {data.map((user) => (
            <li key={user.id} className="mb-8">
              <p className="mb-3">{user.id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
