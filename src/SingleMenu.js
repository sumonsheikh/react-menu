import React from 'react'

const SingleMenu = ({id,img}) => {
    return (
        <div>
            <img src={img} alt={id}/>
        </div>
    )
}
export default SingleMenu;