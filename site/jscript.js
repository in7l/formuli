var cati = new Array("", "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0);
var catcarrier=0;

function count(category)	{
	if (catcarrier!=category)	{
		cati[catcarrier]=0;
	}
	cati[category]++;
	if (cati[category]%2!=0)	{
		drawArrow(category,false);
	}
	else	{
		drawArrow(category, true);
	}
	catcarrier=category;
}

function countModified(category)	{
	if (catcarrier!=category)	{
		cati[catcarrier]=0;
	}
	if ((catcarrier==category) || (catcarrier==0))	{
		if (cati[category]==0)	{
			cati[category]++;
		}
	}
	cati[category]++;
	if (cati[category]%2!=0)	{
		drawArrow(category,false);
	}
	else	{
		drawArrow(category, true);
	}
	catcarrier=category;
}

function drawArrow(grade, even)	{
	if (even==false)	{
		var arrow = '<img src="images/arrow-up.png" class="arrow" alt="arrow-up" />';
	}
	else if (even==true)	{
		var arrow = '<img src="images/arrow-down.png" class="arrow" alt="arrow-down" />';
	}
	var drawArrow=document.getElementById("cat" + grade + "out");
	drawArrow.innerHTML=arrow;
}

function drawOthersArrows(grade, even)	{
	if (even==false)	{
		var arrow = '<img src="images/arrow-up.png" class="arrow" alt="arrow-up" />';
	}
	else if (even==true)	{
		var arrow = '<img src="images/arrow-down.png" class="arrow" alt="arrow-down" />';
	}
	var i;
	for (i=5; i<=12; i++)	{
		if (i!=grade)	{
			document.getElementById("cat" + i + "out").innerHTML=arrow;
		}
	}
}
