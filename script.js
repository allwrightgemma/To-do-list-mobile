// Empty array and push each item into it
// Collect data from input and push into array
// Add styling
// Delete from list - select index of the item and remove it - splice

const itemInput = document.querySelector('#add-item');
const list = document.querySelector('.list');

function addNewItem() {
	const newItem = document.createElement('div');
	const newCheckbox = document.createElement('input');
	newCheckbox.setAttribute('type', 'checkbox');
	const newText = document.createElement('p');
	newText.innerText = itemInput.value;
	newItem.appendChild(newCheckbox);
	newItem.appendChild(newText);
	list.appendChild(newItem);
	newItem.classList.add('item');
	itemInput.value = '';
}

itemInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		addNewItem();
	}
});
