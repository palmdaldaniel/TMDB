import React from 'react'
import Button from 'react-bootstrap/Button'

const Pagination = ({page, setPage, isPreviousData, total}) => {
	return (
		<div className="pagination d-flex justify-content-between align-items-center m-4">
			<Button
				onClick={() => setPage(currentPage => Math.max(currentPage - 1, 1))}
				disabled={page === 1}
			>
				Previous Page
			</Button>

			 <span>Current Page: {page}</span>

			<Button
				onClick={() => {					
                    if (!isPreviousData && page !== total) {
						setPage(currentPage => currentPage + 1)
					}
				}}
				//Disable the Next Page button until we know a next page is available
				disabled={isPreviousData || page === total}
			>
				Next Page
			</Button>
		</div>
	)

}

export default Pagination
