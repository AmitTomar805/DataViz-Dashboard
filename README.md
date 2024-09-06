# DataViz Dashboard

This project contains both the Next.js front-end and Django back-end for a data visualization dashboard. It uses Docker to simplify setup and deployment.

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
npm install
docker-compose up --build
```
### Access the Next.js front-end in your browser at
- http://localhost:3000

### Running the Back-End (Django API)

```bash
cd my-app-backend/chart_api
docker-compose up --build
```
### Another Terminal Back-End (Django API)
```bash
cd my-app-backend/chart_api
docker-compose run web python manage.py migrate
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

## Libraries and Tools Used
### Front-End (Next.js):
- Next.js: React-based framework for building static and dynamic web apps.
- Material-UI: Component library for building responsive user interfaces.
- ApexCharts: Charting library for displaying various chart types.
- Jest: Testing framework used to write unit and integration tests for the Next.js front-end components.
### Back-End (Django API):
- Django: High-level Python web framework, used to manage and store chart data.
- Django REST Framework: Toolkit for building Web APIs that serve the chart data to the front-end.
### Docker:
- Docker Compose: To orchestrate multi-container environments for Next.js and Django services.

### Approach and Thought Process
- The project is structured to maintain a clean separation between the front-end and back-end.

- Next.js was selected for its strong support for SSR (Server-Side Rendering), performance, and built-in page routing. Next.js allows for intuitive and automatic routing based on the file structure, making navigation in the app seamless. The dashboard features dynamic charts, with both ApexCharts and Chart.js used to provide customizable and interactive data visualization, offering flexibility in chart types and styles.

- Django was used on the back-end to serve the API. The Django REST Framework provides a robust toolkit for building API endpoints that the Next.js app fetches data from, ensuring that data is delivered efficiently to the front-end.

- For testing, the Jest framework was integrated into the Next.js application. Jest allows for unit and integration testing of components, ensuring that the code is reliable and functions as expected. This testing strategy enhances code quality and provides confidence during development.

- Docker ensures that the application runs consistently across different environments. Using Docker Compose allows the orchestration of multiple services (Next.js and Django), making it easy to manage dependencies and deploy the app in a unified, containerized environment.