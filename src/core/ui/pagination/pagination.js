/**
 * Renders pagination elements and handles pagination events.
 *
 * @param {number} totalPages - The total number of pages.
 * @param {Function} renderPage - A function that renders a page.
 * @param {Function} renderPagination - A function that renders pagination.
 * @returns {void}
 *
 * @example
 * // Import the function
 * import { pagination } from './pagination.js';
 *
 * // Call the function with the total number of pages, a function that renders a page, and a function that renders pagination
 * const totalPages = 5;
 * const renderPage = (currentPage) => {
 *     // Render the current page
 * };
 * const renderPagination = () => {
 *     // Render the pagination
 * };
 * pagination(totalPages, renderPage, renderPagination);
 */
export const pagination = (totalPages, renderPage, renderPagination) => {
    let currentPage = 1;
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('span');
        pageItem.textContent = i;
        pageItem.classList.add('page-item');

        if (i === currentPage) {
            pageItem.classList.add('active');
        }

        pageItem.addEventListener('click', function() {
            currentPage = i;
            renderPage(currentPage);
            renderPagination();
            updateActiveClass();
        });

        paginationContainer.appendChild(pageItem);
    }

    function updateActiveClass() {
        const pageItems = document.querySelectorAll('.page-item');
        pageItems.forEach((item, index) => {
            if (index + 1 === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
};