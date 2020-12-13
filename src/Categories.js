import React from 'react';

const Categories = ({categories, filterCategories}) => {
    return (
        <div className="btn-container">
            {categories.map((category,index) =>{
                return (
                <button 
                    key={index}
                    className="btn-filter" 
                    type="button" 
                    onClick={()=>filterCategories(category)}
                >
                    {category}
                </button>
                );
                
            })}
        </div>
    )
}
export default Categories;