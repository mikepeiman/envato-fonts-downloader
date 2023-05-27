async function delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

async function clickDownloadButtons() {
    let buttons = document.querySelectorAll('button[data-test-selector="item-card-download-button"]');

    for (let i = 0; i < buttons.length; i++) {
    // for (let i = 0; i < 3; i++) {

        let font = buttons[i]
        font.click();
        await delay(500); // wait for the modal to appear
        let modalUp = document.querySelector('.ReactModalPortal');
        console.log(`🚀 ~ file: envato-fonts-download.js:15 ~ modalUp:`, modalUp)
        let targetSpan = document.querySelector('.ReactModalPortal form span');
        if (!targetSpan) {
            console.log(`🚀 ~ file: envato-fonts-download.js:17 ~ targetSpan:`, targetSpan)
            await delay(500)
        }
        if (!targetSpan) {
            console.log(`🚀 ~ file: envato-fonts-download.js:21 ~ targetSpan:`, targetSpan)
            await delay(500)
        }
        if (!targetSpan) {
            console.log(`🚀 ~ file: envato-fonts-download.js:25 ~ targetSpan:`, targetSpan)
            await delay(500)
        }
        if (!targetSpan) {
            console.log(`🚀 ~ file: envato-fonts-download.js:29 ~ targetSpan:`, targetSpan)
            await delay(500)
        }
        let textContent = targetSpan.textContent;
        console.log(textContent); // Should print the text content of that specific span
        let inputElement = document.querySelector('input[name="projectName"]');
        inputElement.click()
        await delay(50)

        let downloadButton = document.querySelector('button[data-test-selector="project-add-and-download-button"]');
        downloadButton.click();
        await delay(500); // wait for the download action to complete

        let closeModal = document.querySelector('button[data-test-selector="download-modal-close-button"]');
        if (closeModal) {

            closeModal.click();
        }
        await delay(100); // wait for the modal to close
    }
}

async function navigatePages() {
    let totalPages = getTotalPages();
    let nextPageButton = document.querySelector('a[data-test-selector^="pagination-link-page-"]:last-of-type');


    for (let currentPage = 2; currentPage <= 2; currentPage++) {
    // for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
        await clickDownloadButtons();
        if (nextPageButton) {
            let currentPageNumber = getCurrentPageNumber();
            nextPageButton.click();

            // Check if we have successfully navigated to the next page
            let newPageNumber = getCurrentPageNumber();
            while (currentPageNumber === newPageNumber) {
                console.log('Waiting for page navigation...');
                await delay(2000); // Wait for the next page to load
                newPageNumber = getCurrentPageNumber();
            }
        } else {
            break; // Exit the loop if there is no next page button
        }
    }
}

function getCurrentPageNumber() {
    let url = new URL(window.location.href);
    let pageNumber = new URLSearchParams(url.search).get('pg');
    pageNumber = pageNumber ? parseInt(pageNumber) : 1;
    console.log(`🚀 ~ file: envato-fonts-download.js:99 ~ getCurrentPageNumber ~ pageNumber:`, pageNumber)
    return pageNumber;
}

function getTotalPages() {
    let paginationDiv = document.querySelector('div[data-test-selector="pagination"]');
    let totalPageElement = paginationDiv.lastElementChild;
    let totalPageText = totalPageElement.textContent;

    // Extracts the number from "18 pages"
    let totalPages = parseInt(totalPageText.split(' ')[0]);
    totalPages = totalPages ? totalPages : 1;
    console.log(`🚀 ~ file: envato-fonts-download.js:110 ~ getTotalPages ~ totalPages:`, totalPages)
    return totalPages
}

navigatePages();
