//grafico
var chart;

$(document).ready(function(){

    //desenha o gráfico Base
    function drawGraph(){
        chart = Highcharts.chart('graph-div', {
        chart: {
            type: 'areaspline'
        },
        plotOptions: {
                areaspline: {
                    fillOpacity: 0.4
                }
            },
        title: {
            text: "Comparação Traceroute",
        },
        tooltip: {
                shared: true,
                valueSuffix: ' ms'
            },
        credits: {
                enabled: false
            }, 
        yAxis: {
                allowDecimals: false,
                title: {
                    enabled: true,
                    text: 'Round-trip delay time (ms)',
                }
            },
        xAxis: {
                allowDecimals: false,
                title: {
                    enabled: true,
                    text: 'Public router Hops',
                },
                min: 1
            }
        });
    }

    //limpa series do gráfico
    function crearGraph(){
        while(chart.series.length > 0)
            chart.series[0].remove(true);
    }

    //limpa e reitroduz series no grafico com base nas checkBoxes ligadas
    function refreshData(){
                crearGraph();

                if ($('#google-checkbox').is(':checked')) {
                    chart.addSeries({
                    name: 'Google',
                    data: [null, null, null, null, 10.6, 22.6, 22.9, 26.1, 30.1, 26.7]
                    });
                }

                if ($('#facebook-checkbox').is(':checked')) {
                    chart.addSeries({
                    name: 'Facebook',
                    data: [null, null, null, null, 457.6, 14.4, 18.2, 39.5, 31.7, 32.8, 48.6, 57.7, 121.2, 58.5, 58.0, 97.0, 60.0, 98.5]
                    });
                }

                if ($('#thomman-checkbox').is(':checked')) {
                    chart.addSeries({
                    name: 'Thomman',
                    data: [null, null, null, null, 8.8, 1040.2, 35.4, 28.2, 40.8, 48.9, 115.7, 122.4, 1018.7, 148.7, 272.0, 165.4, 163.3, 157.9]
                    });
                }

                if ($('#nos-checkbox').is(':checked')) {
                    chart.addSeries({
                    name: 'NOS',
                    data: [null, null, null, null, 1034.7, 21.3, 52.3, 25.6, 22.9]
                    });
                }

                if ($('#ua-checkbox').is(':checked')) {
                    chart.addSeries({
                    name: 'UA',
                    data: [null, null, null, null, 1022.1, 26.1, 767.1, 36.0, 33.4, 28.3, 26.8, 31.2]
                    });
                }
    }

    // eventos gerados pelos cliques nas checkBoxes com base no estado futuro das mesmas
    $('input[type="checkbox"]').change(function() {
        if (!$('#graph-containers input[type="checkbox"]').is(':checked')) {
            $('#graph-div').slideToggle();
            crearGraph();
        }
        else {
            if (!$('#graph-div').is(':visible')) {
                $('#graph-div').slideToggle("slow","swing", function(){
                    drawGraph();
                    refreshData();
                });
            }else{
                refreshData();
            }
        }
    });

});