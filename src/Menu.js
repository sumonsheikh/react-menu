import React from 'react';


const Menu = ({items}) =>{
    
    return (
        <div className="section-center">
            {items.map((menuItem) =>{
                const{id,title,img,price,desc} = menuItem;
                return(
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo"/>
                        <header className="item-ifo">
                            <h4 >{title}</h4>
                            <h4 className="item-price">${price}</h4>
                        </header>
                        <p className="item-text">{desc}</p>
                    </article>
                )
            })}
        </div>
    );
}
export default Menu;