export const renderPagePure = itemsToDisplay => {
    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = '';

    itemsToDisplay.forEach(( item ) => {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        const tdAmount = document.createElement('td');
        const tdNotNds = document.createElement('td');
        const tdTotalPrice = document.createElement('td');

        tdName.innerText = item.name;
        tdAmount.innerText = item.amount;
        tdNotNds.innerText = item.notNDS;
        tdTotalPrice.innerText = item.totalPrice;

        tr.appendChild(tdName);
        tr.appendChild(tdAmount);
        tr.appendChild(tdNotNds);
        tr.appendChild(tdTotalPrice);

        tbody.appendChild(tr);
    });
};