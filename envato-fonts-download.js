async function delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

async function clickDownloadButtons() {
    let buttons = document.querySelectorAll('button[data-test-selector="item-card-download-button"]');

    for (let i = 0; i < buttons.length; i++) {

        let font = buttons[i]
        font.click();
        await delay(1000); // wait for the modal to appear
        let modalUp = document.querySelector('.ReactModalPortal');

        console.log(`🚀 ~ file: envato-fonts-download.js:11 ~ clickDownloadButtons ~ modalUp:`, modalUp);
        await delay(1000)
        let targetSpan = document.querySelector('.ReactModalPortal form span');
        let textContent = targetSpan.textContent;
        console.log(textContent); // Should print the text content of that specific span
        console.log(`current font ${font}`);
        let inputElement = document.querySelector('input[name="projectName"]');
        console.log(`🚀 ~ file: envato-fonts-download.js:13 ~ clickDownloadButtons ~ inputElement:`, inputElement);
        // inputElement["aria-checked"] = !inputElement["aria-checked"];
        inputElement.click()


        let downloadButton = document.querySelector('button[data-test-selector="project-add-and-download-button"]');
        downloadButton.click();
        await delay(1000); // wait for the download action to complete

        let closeModal = document.querySelector('button[data-test-selector="download-modal-close-button"]');
        if (closeModal){

            closeModal.click();
        }
        await delay(1000); // wait for the modal to close


    }
}

clickDownloadButtons();
