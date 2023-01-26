const itemInput = document.querySelector('#add-item');
const list = document.querySelector('.list');
const deleteIcon = document.querySelector('.delete-icon');
const item = document.querySelector('.item');

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

function deleteItem(e) {
	if (!e.target.matches('i')) return;
	const item = e.target;
	item.parentElement.parentElement.remove();
}

itemInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		addNewItem();
	}
});

list.addEventListener('click', deleteItem);
