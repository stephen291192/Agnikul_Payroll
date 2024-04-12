// import React from "react";
// import ApexCharts from "../component/ApexCharts";

// const Chart_Call: React.FC = () => {
//   const colorMap = {
//     Series1: "#F44336",
//     Series2: "#E91E63",
//     Series3: "#9C27B0",
//   };

//   const chart1SeriesData = [
//     { name: "Series1", data: 44 },
//     { name: "Series2", data: 55 },
//     { name: "Series3", data: 13 },
//     { name: "Series4", data: 33 },
//   ];

//   const chart1Options = {
//     chart: {
//       width: 350,
//       type: "donut",
//       toolbar: {
//         show: true,
//       },
//     },
//     dataLabels: {
//       enabled: true,
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             show: false,
//           },
//         },
//       },
//     ],
//     legend: {
//       position: "bottom",
//       offsetY: 0,
//       height: 20,
//     },
//   };

//   const chart2SeriesData = [
//     {
//       name: "PENDING",
//       data: [44, 55, 41, 67, 22, 43],
//     },
//     {
//       name: "REJECT",
//       data: [13, 23, 20, 8, 13, 27],
//     },
//     {
//       name: "APPROVED",
//       data: [11, 17, 15, 15, 21, 14],
//     },
//     {
//       name: "ASSIGNED",
//       data: [21, 7, 25, 13, 22, 8],
//     },
//   ];

//   const chart2Options = {
//     chart: {
//       type: "bar",
//       height: 350,
//       width: 650,
//       stacked: true,
//       toolbar: {
//         show: true,
//       },
//       zoom: {
//         enabled: true,
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           legend: {
//             position: "bottom",
//             offsetX: -10,
//             offsetY: 0,
//           },
//         },
//       },
//     ],
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         borderRadius: 10,
//         dataLabels: {
//           total: {
//             enabled: true,
//             style: {
//               fontSize: "13px",
//               fontWeight: 900,
//             },
//           },
//         },
//       },
//     },
//     xaxis: {
//       type: "datetime",
//       categories: [
//         "01/01/2011 GMT",
//         "01/02/2011 GMT",
//         "01/03/2011 GMT",
//         "01/04/2011 GMT",
//         "01/05/2011 GMT",
//         "01/06/2011 GMT",
//       ],
//     },
//     legend: {
//       position: "right",
//       offsetY: 40,
//     },
//     fill: {
//       opacity: 1,
//     },
//   };

//   const chart3SeriesData = [44, 55, 13, 43, 22];

//   const chart3Options = {
//     chart: {
//       width: 350,
//       type: "pie",
//       toolbar: {
//         show: true,
//       },
//     },
//     labels: ["SURYA", "VIKRAM", "KAMAL", "VIMAL", "ANJALI"],
//     legend: {
//       position: "bottom",
//       offsetY: 0,
//       height: 20,
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: "bottom",
//             offsetY: 0,
//             height: 20,
//           },
//         },
//       },
//     ],
//   };

//   const chart4SeriesData = [
//     {
//       name: "Desktops",
//       data: [10, 31, 65, 91, 5, 92, 69, 31, 44],
//     },
//     {
//       name: "High - 2013",
//       data: [28, 69, 93, 81, 62, 42, 33, 21, 34],
//     },
//     {
//       name: "Low - 2013",
//       data: [12, 41, 84, 118, 97, 83, 63, 41, 14],
//     },
//   ];

//   const chart4Options = {
//     chart: {
//       height: 380,
//       width: 580,
//       type: "line",
//       zoom: {
//         enabled: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "straight",
//     },
//     title: {
//       text: "Product Trends by Month",
//       align: "left",
//     },
//     grid: {
//       row: {
//         colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//         opacity: 0.5,
//       },
//     },
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//       ],
//     },
//   };

//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <div>
//           <h1>Donut Chart</h1>
//           <ApexCharts
//             seriesData={chart1SeriesData}
//             chartOptions={chart1Options}
//             chartType="donut"
//             function_name="donut_chart"
//           />
//         </div>
//         <div style={{ width: "50px" }}></div>
//         <div>
//           <h1>Pie Chart</h1>
//           <ApexCharts
//             seriesData={chart3SeriesData}
//             chartOptions={chart3Options}
//             chartType="pie"
//             function_name="pie_chart"
//           />
//         </div>
//       </div>

//       <div style={{ display: "flex", marginTop: "30px" }}>
//         <div>
//           <h1>Bar Chart</h1>
//           <ApexCharts
//             seriesData={chart2SeriesData}
//             chartOptions={chart2Options}
//             chartType="bar"
//             function_name="single_bar_chart"
//           />
//         </div>

//         <div style={{ width: "50px" }}></div>

//         <div>
//           <h1>Line Chart</h1>
//           <ApexCharts
//             seriesData={chart4SeriesData}
//             chartOptions={chart4Options}
//             chartType="line"
//             function_name="single_bar_chart"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chart_Call;
