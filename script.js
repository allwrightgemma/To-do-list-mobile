// Empty array and push each item into it
// Collect data from input and push into array
// Add styling
// Delete from list - select index of the item and remove it - splice

const itemInput = document.querySelector('#add-item');
const list = document.querySelector('.list');

function addNewItem() {
	const newItem = document.createElement('div');

	newItem.innerHTML = `<div class="item">
					<div class="item-text">
						<input type="checkbox" />
						<p>${itemInput.value}</p>
					</div>
					<div class="delete-icon">
						<i class="fa-solid fa-x"></i>
					</div>
				</div>`;

	list.appendChild(newItem);

	itemInput.value = '';
}

itemInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		addNewItem();
	}
});
