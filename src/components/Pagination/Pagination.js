import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link to="#" className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
