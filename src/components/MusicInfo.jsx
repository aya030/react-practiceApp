import { useContext } from 'react';
import { MusicInfoContext } from '../provider/MusicInfoProvider';

export default function MusicInfo() {
  const { musicInfo } = useContext(MusicInfoContext);
  return (
    <div className="w-3/4 mx-auto my-10">
      <h1 className="mb-10 text-2xl font-medium text-green-600">ContextでStateの管理</h1>

      {musicInfo.map((music) => (
        <div key={music.id} className="flex mb-8">
          <p className="mr-10">{music.name}</p>
          <p>{music.title}</p>
        </div>
      ))}
    </div>
  );
}
