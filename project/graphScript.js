window.onload = function () {


}

$(document).ready(function () {

    let cityName = localStorage.getItem('cityName');
    var value = $("#searchbox").val()
    console.log(value)
    $("button").click(function () {
        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: 'http://localhost:3000/temp',
            success: function (res) {
                console.log(res)
                console.log(res.min_temp[0])
                maxtemp1 = res.max_temp[0];

                // calculate Current time


                var chart = new CanvasJS.Chart("chartContainer",
                    {


                        title: {
                            text: "Multi-Series Line Chart"
                        },
                        data: [
                            {
                                type: "line",
                                dataPoints: [
                                    { x: new Date(2020, 9, 15), y: 30 },
                                    { x: new Date(2020, 9, 16), y: parseInt(res.min_temp[1]) },
                                    { x: new Date(2020, 9, 17), y: parseInt(res.min_temp[2]) },
                                    { x: new Date(2020, 9, 18), y: parseInt(res.min_temp[3]) },
                                    { x: new Date(2020, 9, 19), y: parseInt(res.min_temp[4])  },
                                    { x: new Date(2020, 9, 20), y: parseInt(res.min_temp[5]) },
                                    { x: new Date(2020, 9, 21), y: parseInt(res.min_temp[6]) }

                                ]
                               
                            },
                            {
                                

                                type: "line",
                                dataPoints: [
                                    { x: new Date(2020, 9, 15), y: parseInt(res.max_temp[0]) },
                                    { x: new Date(2020, 9, 16), y: parseInt(res.max_temp[1]) },
                                    { x: new Date(2020, 9, 17), y: parseInt(res.max_temp[2]) },
                                    { x: new Date(2020, 9, 18), y: parseInt(res.max_temp[3]) },
                                    { x: new Date(2020, 9, 19), y: parseInt(res.max_temp[4])  },
                                    { x: new Date(2020, 9, 20), y: parseInt(res.max_temp[5]) },
                                    { x: new Date(2020, 9, 21), y: parseInt(res.max_temp[6]) }

                                ]
                            }

                        ]
                    });

                chart.render();


            }

        })
    })


})