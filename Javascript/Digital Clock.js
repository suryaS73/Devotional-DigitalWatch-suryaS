alert("If it is Mobile Always keep in desktop mode")
function digitalclock()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var dy=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        am_pm="AM"
        hh=12;
    }
    var time=hh+":"+mm+":"+am_pm
    document.getElementById("time").innerHTML=time
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }else if(mo==4)
    {
        mo="May"
    }else if(mo==5)
    {
        mo="Jun"
    }else if(mo==6)
    {
        mo="July"
    }else if(mo==7)
    {
        mo="Aug"
    }else if(mo==8)
    {
        mo="Sept"
    }else if(mo==9)
    {
        mo="Oct"
    }else if(mo==10)
    {
        mo="Nov"
    }else if(mo==11)
    {
        mo="Dec"
    }
    switch(dy)
    {
        case 0: dy="sunday"
                document.getElementById("a").style.backgroundImage="url(./Assets/Jesus.jpg)"
        break;
        case 1: dy="Monday"
                document.getElementById("a").style.backgroundImage="URL(./Assets/Shiva.jpg)"
        break;
        case 2: dy="Tuesday"
                document.getElementById("a").style.backgroundImage="URL(./Assets/Hanuman.jpg)"
        break;
        case 3: dy="Wednesday"
                document.getElementById("a").style.backgroundImage="URL(./Assets/Vinayaka.jpg)"
        break;
        case 4: dy="Thursday"
                document.getElementById("a").style.backgroundImage="URL(./Assets/Saibaba.jpg)"
        break;
        case 5: dy="Friday"
                 document.getElementById("a").style.backgroundImage="URL(./Assets/Durga.jpg)"
        break;  
        case 6: dy="Saturday"
                 document.getElementById("a").style.backgroundImage="URL(./Assets/Venkateswara.jpg)"
        break;
    }
    document.getElementById("date").innerHTML=dd+"/"+mo+"/"+yy
    document.getElementById("day").innerHTML=dy
    document.getElementById("sec").innerHTML=ss
    document.getElementById("time").innerHTML=hh+":"+mm+" "+am_pm
    var updatethetime=setTimeout(function(){digitalclock()}, 1000)

}
