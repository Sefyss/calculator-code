function buttonclick( val)
{   
   
    document.getElementById('screen').value+=val
}  
function cleardisplay()
{
    document.getElementById('screen').value=""
}
function equalclick(){
 var text=document.getElementById('screen').value
 var result = text.eval(text)
 document.getElementById('screen').value=result
}