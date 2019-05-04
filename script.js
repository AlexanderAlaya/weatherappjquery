$(document).ready(function(){
    $("button").on("click",function(){
     let city = $("input").val(),
     days = []
     console.log(city)
     let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},pl&appid=3ab842e8cc0ebb1bb10c7ee4391221b1`
    $.ajax({
        url,
        method: "GET",
        dataType: "json",
        success : function(data) {
            for(let i = 0; i < data.list.length; i++) {
                let date = data.list[i].dt_txt,
                day = date.substring(8,10),
                month = date.substring(5,7),
                year = date.substring(0,4),
                isExist = false
                for(let k = 0;k < days.length; k++ ) {
                    if(days[k].day == day && days[k].month == month && days[k].year == year){
                        days[k].weather.push(data.list[i])
                        isExist = true
                    }
                }
                if(isExist == false) {
                    days.push({
                        day,
                        month,
                        year,
                        weather: [
                            data.list[i]
                        ]
                    })
                }

            }
            console.log(days)
        },
        error: function(err) {
            console.log(err)
        }
    })
    })
    //
    // {
    //     day: day, //04.0.5.2019
    //     month: montj,
    //     year: year,
    //     weather: []
    // },
    // {
    //     day,month,year //05.04.
    // }
})

