import React from 'react'
import './Category.css'

const Category = ({ title, number, active }) => {
    return (
        <div className="category">
            <p style={{
                width: "100%",
                backgroundImage: active ? "linear-gradient(to right, #e1e2e5, #d4dae3)" : "none",
                borderRight: active ? "3px solid var(--main-color)" : "none"
            }}>{title}({number})</p>
        </div>
    )
}

export default Category
