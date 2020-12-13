import React, {useState} from 'react';

//Api
import data from './data';

//Componen
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category)=>{
    if(category == 'all'){
      setMenuItems(data);
      return;
    }
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
        <Categories categories={categories} filterCategories ={filterCategories}/>
        <Menu items={menuItems}/>
    </section>
  );
}

export default App;
