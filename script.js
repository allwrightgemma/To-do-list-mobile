// Empty array and push each item into it
// Collect data from input and push into array
// Add styling
// Delete from list - select index of the item and remove it - splice

let list = [];
const itemInput = document.querySelector('#add-item');

function newItem() {
	const newItem = itemInput.value;
	console.log(newItem);
}

itemInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		newItem();
	}
});
