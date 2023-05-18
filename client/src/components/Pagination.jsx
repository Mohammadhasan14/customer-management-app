import React from 'react';

export default function Pagination(props) {
  
  const totalPages = Math.ceil(props.totalCustomers / props.recordsPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);



  return (
    <>
      <div className='container mt-2'>
        <nav aria-label='Page navigation '>
          <ul className='pagination justify-content-end'>
            <li className={`page-item ${props.currentPage === 1 ? 'disabled' : ''}`}>
              <a className='page-link rounded-4 me-2' href='#' onClick={props.prevPage}>
                Previous
              </a>
            </li>
            {pageNumbers.map((pageNumber) => (
              <li className={`page-item ${props.currentPage === pageNumber ? 'active' : ''}`} key={pageNumber}>
                <a className='page-link rounded-4 me-2' href='#' onClick={() => props.onPageClick(pageNumber)}>
                  {pageNumber}
                </a>
              </li>
            ))}
            <li className={`page-item ${props.currentPage === totalPages ? 'disabled' : ''}`}>
              <a className='page-link rounded-4 me-2' href='#' onClick={props.nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
