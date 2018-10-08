function show()
{
    let side1;
    let side2;
    let side3;
    side1=Number(document.getElementById("side1").value);
    side2=Number(document.getElementById("side2").value);
    side3=Number(document.getElementById("side3").value);
    var perimeter = (side1 + side2 + side3)/2;
    var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
    alert(area);
}

