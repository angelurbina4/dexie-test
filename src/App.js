import './App.css';
import { AddFriendForm } from './Components/add-friend-form';
import { FriendList } from './Components/friend-list';
import ClearDataBaseButton from './Components/clear-data-base-button';

const App = () => {
  return (
    <div className="App">
      <h1>Dexie test</h1>
      <br />
      <h2>Add Friends</h2>
      <AddFriendForm defaultAge={21} />
      <br />
      <h2>Friends</h2>
      <FriendList minAge={15} maxAge={60} />
      <br />
      <ClearDataBaseButton />
    </div>
  );
}

export default App;
