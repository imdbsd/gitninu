import React from 'react'

function Pagination(props) {
    return (
        <div className="pagination">
            <div className="pagination__page-status">page: 1 / 10</div>
            <div className="pagination__nav-wrapper">
                <button className="button ">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <button className="button ">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default Pagination