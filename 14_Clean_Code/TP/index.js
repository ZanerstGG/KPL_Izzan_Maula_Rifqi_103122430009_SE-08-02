const API_BASE_URL = 'https://food-delivery.int.kreosoft.space/api';
const ORDER_STATUS_DELIVERED = 'Delivered';
/**
 * @param {string}
 * @returns {Object}
 */
function getAuthHeaders(token) {
    return {
        'Authorization': `Bearer ${token}`
    };
}


/**
 * @param {string}
 * @param {string}
 */
async function fetchOrderDetails(orderId, token) {
    try {
        const order = await fetchOrderFromApi(orderId, token);
        const modal = document.getElementById('orderModal');
        const orderDetailsContainer = modal.querySelector('#orderDetails');
        const confirmButton = modal.querySelector('#confirmOrderBtn');
        renderOrderDetails(order, orderDetailsContainer);
        setupModalEventListeners(modal, confirmButton, order, token);
        modal.style.display = 'block';

    } catch (error) {
        console.error('Gagal memuat detail pesanan:', error);
        alert('Gagal memuat detail pesanan. Silakan coba lagi.');
    }
}


/**
 * @param {string}
 * @param {string}
 * @returns {Promise<Object>}
 * @throws {Error}
 */
async function fetchOrderFromApi(orderId, token) {
    const response = await fetch(`${API_BASE_URL}/order/${orderId}`, {
        headers: getAuthHeaders(token)
    });

    if (!response.ok) {
        throw new Error(`Gagal mengambil detail pesanan (status: ${response.status})`);
    }

    return response.json();
}

/**
 *
 * @param {Object}
 * @param {HTMLElement}
 */
function renderOrderDetails(order, orderDetailsContainer) {
    orderDetailsContainer.innerHTML = '';

    const orderIdHeader = document.createElement('h3');
    orderIdHeader.textContent = `Order ID: ${order.id}`;
    orderDetailsContainer.appendChild(orderIdHeader);
    const orderStatusText = document.createElement('p');
    orderStatusText.textContent = `Status: ${order.status}`;
    orderDetailsContainer.appendChild(orderStatusText);
}


/**
 *
 * @param {HTMLElement}
 * @param {HTMLElement}
 * @param {Object}
 * @param {string}
 */
function setupModalEventListeners(modal, confirmButton, order, token) {
    const oldCloseButton = modal.querySelector('.close');
    const newCloseButton = oldCloseButton.cloneNode(true);
    oldCloseButton.replaceWith(newCloseButton);
    newCloseButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    const newConfirmButton = confirmButton.cloneNode(true);
    confirmButton.replaceWith(newConfirmButton);
    if (order.status === ORDER_STATUS_DELIVERED) {
        newConfirmButton.style.display = 'none';
    } else {
        newConfirmButton.style.display = 'block';
        newConfirmButton.addEventListener('click', () => {
            confirmOrder(order.id, token);
        });
    }
}