import { createContext, useState } from 'react';

export const MusicInfoContext = createContext([{}]);

export function MusicInfoProvider(props) {
  const { children } = props;
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  const [musicInfo, setMusicInfo] = useState([
    { name: 'Let It Go', title: 'FROZEN' },
    { name: 'Part of Your World', title: 'The Little Mermaid' },
    { name: 'A Whole New World', title: 'Aladdin' },
    { name: 'Beauty and the Beast', title: 'Beauty and the Beast' },
    { name: 'Colors of the Wind', title: 'Pocahontas' },
  ]);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeTitle = (e) => setTitle(e.target.value);

  const onClickAdd = () => {
    if (name === '') return;
    if (title === '') return;
    const newMusicInfo = [...musicInfo, { name, title }];
    setMusicInfo(newMusicInfo);
    setName('');
    setTitle('');
    console.log(newMusicInfo);
  };

  return (
    <MusicInfoContext.Provider
      value={{ musicInfo, name, title, setName, onChangeName, onChangeTitle, onClickAdd }}>
      {children}
    </MusicInfoContext.Provider>
  );
}
