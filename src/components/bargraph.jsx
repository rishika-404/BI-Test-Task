import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
const defaultData = {
  Maharashtra: { recovered: 1000, deaths: 50 },
  MP: { recovered: 800, deaths: 70 },
  UP: { recovered: 1200, deaths: 40 },

};
const BarGraph = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (data && chartRef.current) {
      if (chartInstance.current) {
        // Destroy previous chart instance before creating a new one
        chartInstance.current.destroy();
      }

      const states = Object.keys(data);
      const recovered = states.map(state => data[state].recovered);
      const deaths = states.map(state => data[state].deaths);

      chartInstance.current = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: states,
          datasets: [
            {
              label: 'Recovered',
              data: recovered,
              backgroundColor: 'rgba(16, 185, 129, 0.5)',
              borderColor: 'rgba(16, 185, 129, 1)',
              borderWidth: 1,
            },
            {
              label: 'Deaths',
              data: deaths,
              backgroundColor: 'rgba(239, 68, 68, 0.5)',
              borderColor: 'rgba(239, 68, 68, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart instance on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-7 ml-40 h-full">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">COVID-19 Statistics by State</h3>
      </div>
      <div className="sm:p-6 w-[600px] h-[350px]">
        <canvas ref={chartRef}/>
      </div>
    </div>
  );
};

BarGraph.defaultProps = {
  data: defaultData,
};

export default BarGraph;