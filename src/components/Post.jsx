import useFetchData from '../hooks/useFetchData';

export default function Post() {
  const { data } = useFetchData('/posts');

  return (
    <>
      <div className="w-3/4 mx-auto my-10">
        <h1 className="mb-10 text-2xl font-medium text-green-600">Post Data</h1>
        <ul>
          {data.map((post) => (
            <li key={post.id} className="mb-8">
              <p className="mb-3">{post.id}</p>
              <p className="mb-3">{post.title}</p>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
