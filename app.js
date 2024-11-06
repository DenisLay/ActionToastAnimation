window.onload = function() {
    const root = document.querySelector('body');

    mountToastContainer(root);
    showToast('1 message');
    showModal('content');
}

function mountToastContainer(root) {
    const toastsContainer = document.createElement('div');
    toastsContainer.classList.add('toasts-container');

    root.appendChild(toastsContainer);    
}

function showToast(message, duration = 3000) {
    const container = document.querySelector('.toasts-container');

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `<span>${message}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 400);

    toast.addEventListener('click', function() {
        toast.classList.remove('show');
        setTimeout(function () {
            toast.remove();
        }, 400);
    });
}