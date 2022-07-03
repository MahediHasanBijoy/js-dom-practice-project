
// ===========================
// 	for Bangla 1st Paper
// ===========================
function result(){

	var _tm = document.getElementById("tm").value;
	var _pm = document.getElementById("pm").value;

	if(_tm=="" || _pm==""){
		alert("Theory Mark and Practical Mark field can not be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade").value="A+";
			document.getElementById("point").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade").value="A";
			document.getElementById("point").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade").value="A-";
			document.getElementById("point").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade").value="B";
			document.getElementById("point").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade").value="C";
			document.getElementById("point").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade").value="D";
			document.getElementById("point").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade").value="F";
			document.getElementById("point").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm").value="0";
			document.getElementById("pm").value="0";
			document.getElementById("ttm").value="0";
		}
	}
}

// ===========================
// 	for Bangla 2nd Paper
// ===========================
function result1(){

	var _tm=document.getElementById("tm1").value;
	var _pm=document.getElementById("pm1").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm1").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade1").value="A+";
			document.getElementById("point1").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade1").value="A";
			document.getElementById("point1").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade1").value="A-";
			document.getElementById("point1").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade1").value="B";
			document.getElementById("point1").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade1").value="C";
			document.getElementById("point1").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade1").value="D";
			document.getElementById("point1").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade1").value="F";
			document.getElementById("point1").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm1").value="0";
			document.getElementById("pm1").value="0";
			document.getElementById("ttm1").value="0";
		}
	}
}


// ===========================
// 	for English 1st Paper
// ===========================
function result2(){

	var _tm=document.getElementById("tm2").value;
	var _pm=document.getElementById("pm2").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm2").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade2").value="A+";
			document.getElementById("point2").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade2").value="A";
			document.getElementById("point2").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade2").value="A-";
			document.getElementById("point2").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade2").value="B";
			document.getElementById("point2").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade2").value="C";
			document.getElementById("point2").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade2").value="D";
			document.getElementById("point2").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade2").value="F";
			document.getElementById("point2").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm2").value="0";
			document.getElementById("pm2").value="0";
			document.getElementById("ttm2").value="0";
		}
	}
}

// ===========================
// 	for English 2nd Paper
// ===========================
function result3(){

	var _tm=document.getElementById("tm3").value;
	var _pm=document.getElementById("pm3").value;

	if(_tm=="" || _pm==""){
		alert("Theory Mark and Practical Mark field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm3").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade3").value="A+";
			document.getElementById("point3").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade3").value="A";
			document.getElementById("point3").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade3").value="A-";
			document.getElementById("point3").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade3").value="B";
			document.getElementById("point3").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade3").value="C";
			document.getElementById("point3").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade3").value="D";
			document.getElementById("point3").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade3").value="F";
			document.getElementById("point3").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm3").value="0";
			document.getElementById("pm3").value="0";
			document.getElementById("ttm3").value="0";
		}
	}
}

// ===========================
// 	for General Math
// ===========================
function result4(){

	var _tm=document.getElementById("tm4").value;
	var _pm=document.getElementById("pm4").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm4").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade4").value="A+";
			document.getElementById("point4").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade4").value="A";
			document.getElementById("point4").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade4").value="A-";
			document.getElementById("point4").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade4").value="B";
			document.getElementById("point4").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade4").value="C";
			document.getElementById("point4").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade4").value="D";
			document.getElementById("point4").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade4").value="F";
			document.getElementById("point4").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm4").value="0";
			document.getElementById("pm4").value="0";
			document.getElementById("ttm4").value="0";
		}
	}
}

// ===========================
// 	for Higher Math
// ===========================
function result5(){

	var _tm=document.getElementById("tm5").value;
	var _pm=document.getElementById("pm5").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm5").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade5").value="A+";
			document.getElementById("point5").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade5").value="A";
			document.getElementById("point5").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade5").value="A-";
			document.getElementById("point5").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade5").value="B";
			document.getElementById("point5").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade5").value="C";
			document.getElementById("point5").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade5").value="D";
			document.getElementById("point5").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade5").value="F";
			document.getElementById("point5").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm5").value="0";
			document.getElementById("pm5").value="0";
			document.getElementById("ttm5").value="0";
		}
	}
}

// ===========================
// 	for Physics
// ===========================
function result6(){

	var _tm=document.getElementById("tm6").value;
	var _pm=document.getElementById("pm6").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm6").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade6").value="A+";
			document.getElementById("point6").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade6").value="A";
			document.getElementById("point6").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade6").value="A-";
			document.getElementById("point6").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade6").value="B";
			document.getElementById("point6").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade6").value="C";
			document.getElementById("point6").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade6").value="D";
			document.getElementById("point6").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade6").value="F";
			document.getElementById("point6").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm6").value="0";
			document.getElementById("pm6").value="0";
			document.getElementById("ttm6").value="0";
		}
	}
}

// ===========================
// 	for Chemistry
// ===========================
function result7(){

	var _tm=document.getElementById("tm7").value;
	var _pm=document.getElementById("pm7").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm7").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade7").value="A+";
			document.getElementById("point7").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade7").value="A";
			document.getElementById("point7").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade7").value="A-";
			document.getElementById("point7").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade7").value="B";
			document.getElementById("point7").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade7").value="C";
			document.getElementById("point7").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade7").value="D";
			document.getElementById("point7").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade7").value="F";
			document.getElementById("point7").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm7").value="0";
			document.getElementById("pm7").value="0";
			document.getElementById("ttm7").value="0";
		}
	}
}// ===========================
// 	for Religion
// ===========================
function result8(){

	var _tm=document.getElementById("tm8").value;
	var _pm=document.getElementById("pm8").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm8").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade8").value="A+";
			document.getElementById("point8").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade8").value="A";
			document.getElementById("point8").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade8").value="A-";
			document.getElementById("point8").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade8").value="B";
			document.getElementById("point8").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade8").value="C";
			document.getElementById("point8").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade8").value="D";
			document.getElementById("point8").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade8").value="F";
			document.getElementById("point8").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm8").value="0";
			document.getElementById("pm8").value="0";
			document.getElementById("ttm8").value="0";
		}
	}
}// ===========================
// 	for Sociology
// ===========================
function result9(){

	var _tm=document.getElementById("tm9").value;
	var _pm=document.getElementById("pm9").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm9").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade9").value="A+";
			document.getElementById("point9").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade9").value="A";
			document.getElementById("point9").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade9").value="A-";
			document.getElementById("point9").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade9").value="B";
			document.getElementById("point9").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade9").value="C";
			document.getElementById("point9").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade9").value="D";
			document.getElementById("point9").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade9").value="F";
			document.getElementById("point9").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm9").value="0";
			document.getElementById("pm9").value="0";
			document.getElementById("ttm9").value="0";
		}
	}
}

// ===========================
// 	for Biology
// ===========================
function result10(){

	var _tm=document.getElementById("tm10").value;
	var _pm=document.getElementById("pm10").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm10").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade10").value="A+";
			document.getElementById("point10").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade10").value="A";
			document.getElementById("point10").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade10").value="A-";
			document.getElementById("point10").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade10").value="B";
			document.getElementById("point10").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade10").value="C";
			document.getElementById("point10").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade10").value="D";
			document.getElementById("point10").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade10").value="F";
			document.getElementById("point10").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm10").value="0";
			document.getElementById("pm10").value="0";
			document.getElementById("ttm10").value="0";
		}
	}
}

function finalResult(){
	if(document.getElementById("grade").value == "" ||
	   document.getElementById("grade1").value == "" || 
	   document.getElementById("grade2").value == "" ||
	   document.getElementById("grade3").value == "" ||
	   document.getElementById("grade4").value == "" ||
	   document.getElementById("grade5").value == "" ||
	   document.getElementById("grade6").value == "" ||
	   document.getElementById("grade7").value == "" ||
	   document.getElementById("grade8").value == "" ||
	   document.getElementById("grade9").value == "" ||
	   document.getElementById("grade10").value == ""){
		alert("Error! There may be any subject which result not calculated.")
	}
	else if(document.getElementById("grade").value == "F" ||
	   document.getElementById("grade1").value == "F" || 
	   document.getElementById("grade2").value == "F" ||
	   document.getElementById("grade3").value == "F" ||
	   document.getElementById("grade4").value == "F" ||
	   document.getElementById("grade5").value == "F" ||
	   document.getElementById("grade6").value == "F" ||
	   document.getElementById("grade7").value == "F" ||
	   document.getElementById("grade8").value == "F" ||
	   document.getElementById("grade9").value == "F" )
	{
		document.getElementById("totalgrade").value="Fail";
		document.getElementById("totalMark").value="0";
		document.getElementById("totalpoin").value="0";
	}
	else{
		var _ttm=document.getElementById("ttm").value;
		var _ttm1=document.getElementById("ttm1").value;
		var _ttm2=document.getElementById("ttm2").value;
		var _ttm3=document.getElementById("ttm3").value;
		var _ttm4=document.getElementById("ttm4").value;
		var _ttm5=document.getElementById("ttm5").value;
		var _ttm6=document.getElementById("ttm6").value;
		var _ttm7=document.getElementById("ttm7").value;
		var _ttm8=document.getElementById("ttm8").value;
		var _ttm9=document.getElementById("ttm9").value;
		var _ttm10=document.getElementById("ttm10").value;

		var _totalMark = parseInt(_ttm) + parseInt(_ttm1) + parseInt
		(_ttm2) + parseInt(_ttm3) + parseInt(_ttm4) + parseInt
		(_ttm5) + parseInt(_ttm6) + parseInt
		(_ttm7) + parseInt(_ttm8) + parseInt(_ttm9) + parseInt(_ttm10); 

		document.getElementById("totalMark").value=_totalMark;

		var _point=document.getElementById("point").value;
		var _point1=document.getElementById("point1").value;
		var _point2=document.getElementById("point2").value;
		var _point3=document.getElementById("point3").value;
		var _point4=document.getElementById("point4").value;
		var _point5=document.getElementById("point5").value;
		var _point6=document.getElementById("point6").value;
		var _point7=document.getElementById("point7").value;
		var _point8=document.getElementById("point8").value;
		var _point9=document.getElementById("point9").value;
		var _point10=document.getElementById("point10").value;

		//4th subject point calculate
		if(parseFloat(_point10) > 2){
			_point10 = parseFloat(_point10) - 2;
		}else{
			_point10 = 0;
		}

		var _totalPoint = ((parseFloat(_point) + parseFloat(_point1) +
		parseFloat(_point2) +
		parseFloat(_point3) +
		parseFloat(_point4) +
		parseFloat(_point5) +
		parseFloat(_point6) +
		parseFloat(_point7) +
		parseFloat(_point8) +
		parseFloat(_point9) +
		parseFloat(_point10))/10);

		document.getElementById("totalpoin").value = _totalPoint;

		if (_totalPoint==5.00) {
			document.getElementById("totalgrade").value="A+";
		}
		else if (_totalPoint >=4.00 && _totalPoint <=4.99) {
			document.getElementById("totalgrade").value="A";
		}
		else if (_totalPoint >=3.50 && _totalPoint <=3.99) {
			document.getElementById("totalgrade").value="A-";
		}
		else if (_totalPoint >=3.00 && _totalPoint <=3.49) {
			document.getElementById("totalgrade").value="B";
		}
		else if (_totalPoint >=2.00 && _totalPoint <=2.99) {
			document.getElementById("totalgrade").value="C";
		}
		else if (_totalPoint >=1.00 && _totalPoint <=1.99) {
			document.getElementById("totalgrade").value="D";
		}
	}
}