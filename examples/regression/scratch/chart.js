window.addEventListener("DOMContentLoaded", () => {
  if (typeof Chart === "undefined") {
    return;
  }

const canvas = document.getElementById('mse-chart');
if (!canvas) return;

const ctx = canvas.getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'MedInc',
      'HouseAge',
      'AveRooms',
      'AveBedrms',
      'Population',
      'AveOccup',
      'Latitude',
      'Longitude'
    ],
    datasets: [{
      label: 'Mean Squared Error',
      data: [
        0.7091157771765549,
        1.2939617265100323,
        1.2923314440807299,
        1.3108875538359483,
        1.3102870667503983,
        1.3096449354773076,
        1.281690431624196,
        1.3081058483312469
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.raw.toFixed(4);
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'MSE'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Features'
        }
      }
    }
  }
});
});
