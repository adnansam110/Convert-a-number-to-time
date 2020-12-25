var num =+prompt("Enter a number");
var convert = (num) =>
{
    var min= (num%60);
    var hr = Math.floor(num/60);
    document.write(`The time is ${hr} hrs ${min} mins`);
}
convert(num);