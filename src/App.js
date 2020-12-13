import React, {useState} from 'react';

//Api
import data from './data';

//Componen
import Menu from './Menu';
import Categories from './Categories';

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);
  return (
    <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories/>
        <Menu items={menuItems}/>
    </section>
  );
}

export default App;
