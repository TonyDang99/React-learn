import './App.css';
import YoutubeList from './components/youtube/YoutubeList';

// Parents component
function App() {

  const name = "Tungdt";

  return (
    <div>
      <YoutubeList>
      {name}
      </YoutubeList>
    </div>
  );
}


export default App;
