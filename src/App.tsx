import './App.css';

const Header: React.FC = () => {
  return <div className="header">
    <span className="headerText">Place Holder Header Text</span>
  </div>
};

const Body: React.FC = () => {
  return <div className="Body">
    <span className="bodyText">Place Holder Body Text</span>
  </div>
}

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
};

export default App;
