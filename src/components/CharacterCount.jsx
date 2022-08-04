import { useRecoilValue } from 'recoil';
import { charCountState } from '../selectors/charCountState';

export function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return (
    <div className="flex">
      <p className="mr-4">文字数:</p>
      <p>{count}</p>
    </div>
  );
}
