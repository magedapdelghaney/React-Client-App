import React from 'react';
import _ from 'lodash';


const Pagination = (props) => {

    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);


    return (
        <React.Fragment>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {/* <li className="page-item"><button className="page-link" href="#">Previous</button></li> */}
                    {pages.map(
                        page =>
                            <li key={page} className={page === currentPage ? "page-item active" : "page-item "}>
                                <button className="page-link" onClick={() => onPageChange(page)} >{page}</button>
                            </li>

                    )}


                    {/* <li className="page-item"><button className="page-link" >Next</button></li> */}
                </ul>
            </nav>

        </React.Fragment>


    );
}

export default Pagination;