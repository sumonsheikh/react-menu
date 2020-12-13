import React from 'react';

const Categories = ({filterCategories}) => {
    return (
        <div className="btn-container">
            <button className="btn-filter" onClick={() =>filterCategories('breakfast')}>
                Breakfast
            </button>
            <button className="btn-filter" onClick={() =>filterCategories('lunch')}>
                Lunch
            </button>
            <button className="btn-filter" onClick={() =>filterCategories('shakes')}>
                Shakes
            </button>
        </div>
    )
}
export default Categories;