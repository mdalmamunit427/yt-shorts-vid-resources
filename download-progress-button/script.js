const downloadBtn = document.getElementById('downloadBtn');
const progressBar = document.getElementById('progressBar');
const progressInfo = document.getElementById('progressInfo');

// Default download URL (you can change this)
const downloadUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
const filename = 'sample.pdf';

// Redirect URL after 100% completion 
const redirectUrl = downloadUrl; 

let isCompleted = false;

// Function to simulate progress
function simulateProgress() {
    return new Promise((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                resolve();
            }
            progressBar.style.width = progress + '%';
            progressInfo.textContent = `Downloading... ${Math.round(progress)}%`;
        }, 200);
    });
}

// Function to download file with progress
async function downloadFile(url, filename) {
    // Reset button state
    isCompleted = false;
    downloadBtn.disabled = true;
    downloadBtn.classList.add('downloading');
    downloadBtn.classList.remove('success');
    progressBar.style.width = '0%';
    progressInfo.textContent = 'Starting download...';
    progressInfo.classList.add('show');

    // Start progress simulation
    await simulateProgress();

    // Try to fetch and download the file (silently handle errors)
    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const blob = await response.blob();
            triggerDownload(blob, filename);
        }
    } catch (error) {
        // Silently handle errors - don't show error message
        console.error('Download error:', error);
    }

    // Show "Download" message at 100% and mark as completed
    showDownloadComplete();
}

// Function to trigger the actual download
function triggerDownload(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Function to show download complete
function showDownloadComplete() {
    progressBar.style.width = '100%';
    progressInfo.textContent = 'Download';
    downloadBtn.classList.remove('downloading');
    downloadBtn.classList.add('success');
    isCompleted = true;
    downloadBtn.disabled = false;
}

// Main download button click handler
downloadBtn.addEventListener('click', () => {
    // If already completed, redirect instead of starting new download
    if (isCompleted) {
        window.location.href = redirectUrl;
    } else {
        downloadFile(downloadUrl, filename);
    }
});

