fetch(
  "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
)
  .then((response) => response.json())

  .then((data) => {
    nomes = data.cand.map(function (f) {
      return f.nm;
    });
    totais = data.cand.map(function (f) {
      return f.pvap;
    });
    console.log(nomes);

    var options = {
      chart: {
        type: "bar",
      },
      series: [
        {
          name: "%",
          data: totais,
        },
      ],
      xaxis: {
        categories: nomes,
      },
    };

    var chart = ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  });
