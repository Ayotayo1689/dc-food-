import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {Button, Flex} from "@chakra-ui/react";
import React from "react";

const Pagination = ({
                        handlePrevPage, isPrevButtonDisabled, totalPages, setCurrentPage, currentPage, handleNextPage,
                        isNextButtonDisabled, goToTop
                    }) => {
    return (
        <Flex justifyContent="center" my={10}>
            <button
                onClick={handlePrevPage}
                disabled={isPrevButtonDisabled}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    marginRight: '1rem',
                    fontSize: '1.2rem',
                    fontWeight: 600
                }}
            >
                <ChevronLeftIcon/>
                Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
                <Button
                    key={index}
                    mx={2}
                    onClick={() => {
                        setCurrentPage(index + 1);
                        goToTop();
                    }}
                    variant={currentPage === index + 1 ? 'solid' : 'outline'}
                    colorScheme={currentPage === index + 1 ? 'orange' : 'gray'}
                >
                    {index + 1}
                </Button>
            ))}

            <button
                onClick={handleNextPage}
                disabled={isNextButtonDisabled}
                style={{
                    display: 'flex',
                    alignItems: 'center',

                    gap: '0.3rem',
                    marginLeft: '1rem',
                    fontSize: '1.2rem',
                    fontWeight: 600
                }}
            >

                Next
                <ChevronRightIcon/>
            </button>
        </Flex>
    )
}

export default Pagination
