import { useRecoilState } from 'recoil';
import { textState } from '../atoms/textState';

export function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <p className="mb-2">文字を入力</p>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
        id="username"
        type="text"
        value={text}
        onChange={onTextChange}
      />
      <div className="flex">
        <p className="mb-4 mr-4">入力した文字:</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
