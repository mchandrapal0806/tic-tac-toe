var count=1;
 function fill(control){    
    if (count<=9) {
        
     if (count%2!=0)
      {
           document.getElementById(control.id).innerHTML="O";
      }
      else
      {
        document.getElementById(control.id).innerHTML="X";
      }
      count++; 
      if(check())
      {
          alert("winner");
          reset();
      }
    
    } 
    else{
        alert("match is draw");
        reset();
    }
 }
 function reset()
 {
    for(var i=1;i<=9;i++)
    { 
        document.getElementById('div'+i).innerHTML="";
    }
 }
 function check()
{
    if(checkcondition('div1','div2','div3')||checkcondition('div1','div5','div9')||
    checkcondition('div1','div4','div7')||checkcondition('div3','div5','div7')
    ||checkcondition('div3','div5','div9')||checkcondition('div2','div5','div8')||
    checkcondition('div3','div6','div9'))
    {
        return true;
    }

}
function checkcondition(div1,div2,div3)
{
    if(gatedata(div1)!=""&&getdata(div2)!=""&&gatedata(div3)!=""&&
    getdata(div1)==getdata(div2)&& getdata(div2)==getdata(div))
    {
        return true;
    }
    function getdata(div)
    {
        return document.getElementById( div).innerHTML;
    }
}
