// Get Current Weather Data from Weather API

$(document).ready(function(){
    let cityName = localStorage.getItem('cityName');
    $.ajax({
        type:'GET',
        dataType:'JSON',
        url:`https://api.weatherapi.com/v1/current.json?key=4378378be636462db6990842201610&q=${cityName}`,
        success:function(res)
        {
             // calculate Current time

             var current_time=res.location.localtime;
             console.log(current_time)
             var time= current_time.slice(11,16)

            console.log(res)
            let temp_location;
            temp_location = `
            <span class="text-white p-5">
            <span>${res.location.name}</span>
            <span>${res.current.temp_c}*C </span>
            <span><img src="${res.current.condition.icon}" ></span>
            </span>`
            $(".temp").html(temp_location)
            $("#time").html(time)
        }
            
    })
    $("button").click(function(){
        cityName= $("#search").val();
        console.log(cityName);
        $.ajax({
            type:'GET',
            dataType:'JSON',
            url:`https://api.weatherapi.com/v1/current.json?key=4378378be636462db6990842201610&q=${cityName}`,
            success:function(res)
            {
                // calculate Current time

                var current_time=res.location.localtime;
                console.log(current_time)
                var time= current_time.slice(11,16)
                
                // show data on HTML of current location,temp and icon

                let temp_location;
                temp_location = `
                <span>
                <span>${res.location.name}</span>
                <span>${res.current.temp_c}*C </span>
                <span><img src="${res.current.condition.icon}" ></span>
                </span>`
                $(".temp").html(temp_location)
                $("#time").html(time)
            }
                
        })
    })
})