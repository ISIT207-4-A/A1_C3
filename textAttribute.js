function FilterArray(item,value){
	const result = item.filter(it=>it.name==value||it.code==value||it.color==value)
	return result;
}

$.getJSON("database.json", function(data){
    const result = FilterArray(data,"BLUE");
	console.log(result);
});

	
