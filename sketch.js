var marks=[56,89,64,78,19]
var weight=[90,78,89,88,82]
console.log(marks[1])

function marksaverag()
{
  var sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
  var avg= sum/marks.length;
  console.log(avg)
}
function weightavge()
{
  
  
  var sum1=weight[0]+weight[1]+weight[2]+weight[3]+weight[4]
  var avg1 = sum1/weight.length;
  console.log(avg1)
}

function setup() 
{
  createCanvas(400,400);
  marksaverag()
weightavge()
}

function draw() 
{
background(51);

}

