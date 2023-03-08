function generateArrayRandomNumber (min, max) {
	var totalNumbers 		= max - min + 1,
		arrayTotalNumbers 	= [],
		arrayRandomNumbers 	= [],
		tempRandomNumber;

	while (totalNumbers--) {
		arrayTotalNumbers.push(totalNumbers + min);
	}

	while (arrayTotalNumbers.length) {
		tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
		arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
		arrayTotalNumbers.splice(tempRandomNumber, 1);
	}

	return arrayRandomNumbers;
}
var minNumber = 1;
var maxNUmber = 100;
var count = [];
var randomNumArray = generateArrayRandomNumber(minNumber,maxNUmber);
var Boxs = document.getElementsByClassName("box");
var result = document.getElementById("result");
var input = 0;
var maxnum;
for(i = 1;i<=maxNUmber;i++){
     Boxs[i-1].innerHTML = '<div class="number">' + i + "</div>" + randomNumArray[i-1];
}
for(i = 1;i<=maxNUmber;i++){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = i;
    tr.appendChild(td);
    if(i==randomNumArray[i-1]){
        
    }
    input = i;
    for(j = 1;j<=maxNUmber;j++){   
        input = randomNumArray[input-1];
        td = document.createElement("td");
        td.innerHTML = input;
        tr.appendChild(td);
        if(input==i){
            td = document.createElement("td");
            td.innerHTML = j;
            tr.appendChild(td);
            count[i-1] = j;
            break;
        }
        
    }
    result.appendChild(tr);
}
function maxElement (list){
    let max;
    let min = list[0];
    for(let i = 0; i < list.length; i++){
        if((list[i]) < min){
            min = list[i]; 
        } else {
            max = list[i];
        }
    }
    return max;
}
alert(maxElement(count));