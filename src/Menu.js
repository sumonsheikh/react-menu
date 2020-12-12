import React from 'react';
import SingleMenu from './SingleMenu';

const Menu = ({items}) =>{
    
    return (
        <article>
            {items.map((item) =>{
                return(
                    <SingleMenu key={item.id} {...item}/>
                );
            })}
        </article>
    )
}
export default Menu;