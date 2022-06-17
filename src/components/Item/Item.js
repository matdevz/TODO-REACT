class Item {
	static lastIndex = 0;

	constructor(text) {
		this.id = Item.lastIndex++;
		this.text = text;
		this.done = false;
	}
}

export default Item;
