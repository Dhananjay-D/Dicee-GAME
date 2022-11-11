
//line 3 code helps in getting a random value between 1-6
var randomNumber1=Math.floor(Math.random(randomNumber1)*6+1);

//line 6 code is to change the dice 1 image wrt random randomNumber1
document.querySelectorAll("img")[0].setAttribute("src","dice"+randomNumber1+".png");

//line 9 code helps in getting a random value between 1-6
var randomNumber2=Math.floor(Math.random(randomNumber2)*6+1);

//line 12 code is to change the dice 2 image wrt random randomNumber2
document.querySelectorAll("img")[1].setAttribute("src","dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2)
{
   results="🎉Player "+1+" Wins!";
}
else if(randomNumber1<randomNumber2)
{
    var results="🎉Player "+2+" Wins!";
}
else{
    var results="It's a Draw!";
}

document.querySelector("h1").innerHTML=results;/*we write the value(i.e.,results) in
 double quotes when we directly assign the value but when we assign as a variable then
  their is no way to write it in a double quotes*/
