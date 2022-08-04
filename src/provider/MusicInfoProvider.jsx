import { createContext } from 'react';

export const MusicInfoContext = createContext([{}]);

export function MusicInfoProvider(props) {
  const { children } = props;
  const musicInfo = [
    { name: 'Let It Go', title: 'FROZEN' },
    { name: 'Part of Your World', title: 'The Little Mermaid' },
    { name: 'A Whole New World', title: 'Aladdin' },
    { name: 'Beauty and the Beast', title: 'Beauty and the Beast' },
    { name: 'Colors of the Wind', title: 'Pocahontas' },
  ];

  return <MusicInfoContext.Provider value={{ musicInfo }}>{children}</MusicInfoContext.Provider>;
}
