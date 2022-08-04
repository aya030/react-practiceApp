import MusicInfo from '../components/MusicInfo';
import Header from '../components/Header';
import { MusicInfoProvider } from '../provider/MusicInfoProvider';

import '../App.css';

export default function Page1() {
  return (
    <>
      <div>
        <Header />
        <MusicInfoProvider>
          <MusicInfo />
        </MusicInfoProvider>
      </div>
    </>
  );
}
