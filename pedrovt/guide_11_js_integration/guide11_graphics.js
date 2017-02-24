function desenhaGraficoLinhas() {
  $("#grafico-linhas").highcharts({
    title: {
      text: "Média de temperaturas",
    },
    xAxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    },
    series: [{
      name: "Lisboa",
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: "Porto",
      data: [9.3, 10.4, 11.9, 13.2, 15,2, 18.3, 20.2, 20.1, 18.9, 16, 12.6, 10.6]
    }]
  })
}

function desenhaGraficoBarras() {
   $("#grafico-barras").highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: "Média de temperaturas"
    },
    subtitle: {
      text: 'Fonte: <a href="http://www.weatherbase.com/">WeatherBase</a>'
    },
    xAxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    },
    yAxis: {
      title: {
        text: 'Temperaturas'
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
    },
    series: [{
      name: "Lisboa",
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: "Porto",
      data: [9.3, 10.4, 11.9, 13.2, 15,2, 18.3, 20.2, 20.1, 18.9, 16, 12.6, 10.6]
      }]
  });
};
