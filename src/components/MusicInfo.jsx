import { useContext } from 'react';
import { MusicInfoContext } from '../provider/MusicInfoProvider';

export default function MusicInfo() {
  const { musicInfo, name, title, onChangeName, onChangeTitle, onClickAdd } =
    useContext(MusicInfoContext);

  return (
    <div className="w-3/4 mx-auto my-10">
      <h1 className="mb-10 text-2xl font-medium text-green-600">ContextでStateの管理</h1>
      <div className="w-full max-w-lg mb-16">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input
            id="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={onChangeName}
            className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            id="title"
            type="text"
            placeholder="title"
            value={title}
            onChange={onChangeTitle}
            className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="button"
            onClick={onClickAdd}
            className="bg-green-500 hover:bg-green-600 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            新規追加
          </button>
        </form>
      </div>
      {musicInfo.map((music) => (
        <div key={music.title} className="flex mb-8">
          <p className="mr-10">{music.name}</p>
          <p>{music.title}</p>
        </div>
      ))}
    </div>
  );
}
