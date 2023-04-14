function categoria()
{
    var p=Number(document.getElementById('n1').value);
    var r=Number(document.getElementById('n2').value);

    var a= p*50;
    var x=0.075*r;
    var b=600+x+a;
    var c=0.11*b;
    var d=b-c;

    document.getElementById('com').value=x;
    document.getElementById('bon').value=a;
    document.getElementById('sueldobr').value=b;
    document.getElementById('dsct').value=c;
    document.getElementById('sueldont').value=d;    
}