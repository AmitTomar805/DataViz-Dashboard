
## Prerequisites

Make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

To set up the project, clone this repository and follow the instructions to run both the **Next.js front-end** and **Django back-end**.

### Clone the Repository

```bash
git clone https://github.com/your-repo/dataviz-dashboard.git
cd dataviz-dashboard
```
### Running the Front-End (Next.js)

```bash
cd my-app
docker-compose up --build
```
### Access the Next.js front-end in your browser at
- http://localhost:3000

### Running the Back-End (Django API)

```bash
cd my-app-backend/chart_api
docker-compose up --build
```

### The Django API will be available at
- http://localhost:8000

### API Endpoints
- Bar Chart Data: http://localhost:8000/api/bar-chart/
- Candlestick Chart Data: http://localhost:8000/api/candlestick-chart/
- Line Chart Data: http://localhost:8000/api/line-chart/
- Pie Chart Data: http://localhost:8000/api/pie-chart/

### Stopping the Containers
```bash
docker-compose down
```