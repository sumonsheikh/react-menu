import React from 'react';

const Categories = ({filterCategories}) => {
    return (
        <div className="btn-container">
            <button className="btn-filter" onClick={() =>filterCategories('breakfast')}>
                Breakfast
            </button>
            
        </div>
    )
}
export default Categories;