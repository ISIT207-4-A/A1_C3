//Filter price
function FilterArray(item, upperPrice, lowerPrice){
	const result = item.filter(it=>it.price>=lowerPrice && it.price<=upperPrice);
	return result;
}

//Pass json and print to console
$.getJSON("database.json", function(data){
    const result = FilterArray(data,30000,10000);
	console.log(result);
});
