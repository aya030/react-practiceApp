import { TextInput } from '../components/TextInput';
import { CharacterCount } from '../components/CharacterCount';

export function CharacterCounter() {
  return (
    <div className="w-3/4 mx-auto my-10">
      <h1 className="mb-10 text-2xl font-medium text-green-600">RecoilでのState管理</h1>
      <div className="w-full mx-auto mt-20">
        <form className="bg-white shadow-md rounded px-8 py-10 mb-4">
          <div className="mb-4">
            <TextInput />
            <CharacterCount />
          </div>
        </form>
      </div>
    </div>
  );
}
