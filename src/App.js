import React, {useState} from 'react';

//Api
import data from './data';

//Componen
import Menu from './Menu';
import Categories from './Categories';

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);
  const filterCategories = (category)=>{
    const newCategory = data.filter((item) =>
      item.category === category)
    console.log(newCategory);
    setMenuItems(newCategory);
  };

  return (
    <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterCategories ={filterCategories}/>
        <Menu items={menuItems}/>
    </section>
  );
}

export default App;
