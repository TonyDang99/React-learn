import './App.css';

//this code is component
function Feature(){
  return(
    <div className="feature">
      <img src="" alt="" className="feature-image"/>
      <h3 className="feature-title">Title</h3>
      <p className="feature-desc">
        fdsfsdfdfdfsdfsddsfdsfdsf
      </p>
    </div>
  )
}


// Parents component
function App() {
  return (
    <div>

    {/* children component */}
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  );
}

export default App;
