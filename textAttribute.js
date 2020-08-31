//Limit checkbox to two 
function limit(){
	var a = document.getElementsByName('attribute[]');
	var newvar = 0;
	var count;
	for(count=0; count<a.length; count++){
		if(a[count].checked==true){
			newvar++;
		}
	}

	

	if(newvar<=2){
		var selectElement = document.getElementsByName('attribute[]');
		var length = selectElement.length;
		var checkedValue = null; 
		for(var i=0; i<length; i++){
			if(selectElement[i].checked){
				checkedValue = selectElement[i].value;
				console.log(checkedValue);
				selectElement[i].onchange = function() {
					document.getElementById(checkedValue).disabled = !this.checked;
				}
			}
		}
	}


	if(newvar >=3){
		return false;
	}
}

<<<<<<< HEAD
//Filter color
function FilterArray(item,value){
	const result = item.filter(it=>it.color==value.uppercase()||it.name==value.uppercase()||it.code==value.uppercase())
	return result;
}
=======
//Filter
function FilterArrayByName(scr1,namesearch){
	const result = scr1.filter(item=>item.name.match(namesearch))
  return result
  }
function FilterArrayByCode(scr1,codesearch){
	const result = scr1.filter(item=>item.code.match(codesearch))
  return result
  }
function FilterArrayByColor(scr1,colorsearch){
    const result = scr1.filter(item=>item.color.match(colorsearch))
    return result
  }
>>>>>>> f6da209629aa8878761cc4f5ba35a763aa28bce6

//Filter to console(testing final will be to html)
$.getJSON("database.json", function(data){
    const result = FilterArray(data,"BLUE");
	console.log(result);
});

	
function enable(){
	var a = document.getElementsByName('attribute');
	var newvar = 0;
	var count;
	for(count=0; count<a.length; count++){
		if(a[count].checked==true){
			newvar++;
		}
	}

	console.log("s");
}
