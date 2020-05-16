$(document).ready(function(){
    // turkiye corona datalari - collectapi.com
    let newDeaths=0, newCases=0, totalDeath=0, totalCases=0, date;
    fetch('https://api.collectapi.com/corona/countriesData?country=Turkey',{
        headers:{
            authorization: 'apikey 60VaxnFpDh1wt2jeGVsZhv:4ZK3ZlCo0QCIDWreyXVNoe',
            'Content-Type': 'application/json'
        }
    })
    .then(response=>response.json())
    .then(data=>data.result)
    .then(result=>{
        newDeaths=result.newDeaths;
        newCases=result.newCases;
        totalDeaths=result.totalDeaths;
        totalCases=result.totalCases;
        console.log(result);
        //  index.html dosyasinda yerleştirme
        $('#newCases').text(newCases);
        $('#newDeaths').text(newDeaths);
        $('#totalDeaths').text(totalDeaths);
        $('#totalCases').text(totalCases);
    })
    
   fetch('https://api.collectapi.com/corona/totalData',{
    headers:{
        authorization: 'apikey 60VaxnFpDh1wt2jeGVsZhv:4ZK3ZlCo0QCIDWreyXVNoe',
        'Content-Type': 'application/json'
    }
    })
    .then(response=>response.json())
    .then(data=>data.result)
    .then(result=>{
        totalRecovered=result.totalRecovered;
        totalDeaths=result.totalDeaths;
        totalCases=result.totalCases;
        console.log(result);
        //  index.html dosyasinda yerleştirme
        $('#worldTotalRecovered').text(totalRecovered);
        $('#worldTotalDeaths').text(totalDeaths);
        $('#worldTotalCases').text(totalCases);
    })
   //  günün tarihi
   date=new Date();
   date=date.getDate()+'.'+(date.getMonth()+1)+"."+date.getFullYear();
   $('.date').text(date);

   $('.title').hover(function(){
       $(this).css('color','red');
       $(this).css('fontSize','2em');
   },function(){
       $(this).css('color','#000');
       $(this).css('fontSize','1.75em');
   })
})