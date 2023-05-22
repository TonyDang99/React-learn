import './App.css';
import Toggle from './components/state/Toggle';
import YoutubeList from './components/youtube/YoutubeList';

// Parents component
function App() {

  const name = "Tungdt";

  return (
    <div>
      {/* <YoutubeList>
      {name}
      </YoutubeList> */}
      <Toggle></Toggle>
    </div>
  );
}


export default App;
