import { RecoilRoot } from 'recoil';
import Header from '../components/Header';
import { CharacterCounter } from '../components/CharacterCounter';

export default function Page2() {
  return (
    <RecoilRoot>
      <Header />
      <CharacterCounter />
    </RecoilRoot>
  );
}
