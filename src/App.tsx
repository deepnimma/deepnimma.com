import './css/home/App.css';
import { Header } from "./sections/home/header"
import { Body } from "./sections/home/body"

// const Header: React.FC = () => {
//   return <div className="header">
//     <span className="headerText">Place Holder Header Text</span>
//   </div>
// };

// const Body: React.FC = () => {
//   return <div className="body">
//     <span className="bodyText">Deepesh Nimma</span>
//   </div>
// }

const App: React.FC = () => {
  return (
    <div className="appContainer">
      <Header />
      <Body />
    </div>
  )
};

export default App;
