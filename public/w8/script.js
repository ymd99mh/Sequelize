const tableBody = document.querySelector('.tableBody');
// ^ using . to target the class name
async function getDiningHalls() {
    const hallRequest = await fetch('/api/dining');
    const hall = await hallRequest.json();
    const hallData = hall.data;

    const hallTable = document.querySelector('.table');

// adding append portion HERE
    hallData.data.forEach((item) => {
        const appendRow = document.createElement('tr');

        appendRow.innerHTML = `
            <td>${item.hall_id}</td>
            <td>${item.hall_name}</td>
            <td>${item.hall_address}</td>`;
        hallTable.append(appendRow);
    });
}

// async function windowActions() {
//     getDiningHalls();
// }

window.onload = getDiningHalls();


