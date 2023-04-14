function categoria()
{
    var p=Number(document.getElementById('n1').value);
    
    if(p>=17)
    {
     var x="A";
    }
    if(p>=14 & p<17)
    {
      var x="B"
    }
    if(p>=12 & p<14)
    {
      var x="C"
    }
    if(p<12 & p>0)
    {
      var x="D"
    }
    if(p=null)
    {
      var x="Ingrese un dato valido"
    }

    document.getElementById('res').value=x;
}