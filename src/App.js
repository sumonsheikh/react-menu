import React, {useState} from 'react';
import data from './data';
import Menu from './Menu';

function App() {
  const [items, setItems] = useState(data);
  return (
    <div className="App">
      <Menu items={items}/>
    </div>
  );
}

export default App;
