import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const completedTaskChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};
const completedTasksChart = {
  ...completedTaskChart,
  series: [
    {
      name: "Tasks",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};

const chambersChart = {
  type: "pie",
  height: 250,
  series: [40, 60], // Example data for the pie chart
  options: {
    ...chartsConfig,
    labels: ["Reserved chambers", "Available chambers"], // Labels for each segment
    colors: ["#FF9800", "#2196F3", ], // Colors for each segment
    legend: {
      show: true,
      position: "bottom",
    },
  },
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Chambers Stats",
    description: "Available chambers",
    footer: "campaign sent 2 days ago",
    chart: chambersChart,
  },
  {
    color: "white",
    title: "Daily Reservation",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Funds",
    description: "Last funds per month",
    footer: "just updated",
      chart: completedTasksChart,
  },
];

export default statisticsChartsData;
