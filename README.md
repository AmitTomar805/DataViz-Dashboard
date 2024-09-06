# DataViz-Dashboard
- npm create next-app 
- cd my-app
- npm run dev
- docker build -t dataviz-dashboard .
- docker run -p 3000:3000 dataviz-dashboard
- npm install chartjs-chart-financial
- npm install chartjs-adapter-date-fns
- npm install apexcharts react-apexcharts
- npm install @mui/material @emotion/react @emotion/styled

/project-root
│
├── /components
│   ├── /charts
│   │   ├── CandlestickChart.js
│   │   ├── LineChart.js
│   │   ├── BarChart.js
│   │   └── PieChart.js
│   ├── HamburgerMenu.js
│   └── Layout.js
│
├── /pages
│   ├── /api
│   └── dashboard.js
│
├── /styles
│   ├── /components
│   │   ├── HamburgerMenu.module.css
│   │   ├── CandlestickChart.module.css
│   │   ├── LineChart.module.css
│   │   ├── BarChart.module.css
│   │   └── PieChart.module.css
│   └── globals.css
│
├── /utils
│   └── chartConfig.js
│
├── /hooks
│   └── useChartData.js
│
├── /services
│   └── chartDataService.js
│
├── /public
│   ├── /images
│   └── /icons
│
├── /contexts
│   └── DashboardContext.js
│
└── next.config.js
