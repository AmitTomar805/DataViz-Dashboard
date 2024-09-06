from django.test import TestCase
from .models import CandlestickChart, LineChart, BarChart, PieChart

class ChartModelTestCase(TestCase):
    def setUp(self):
        # Set up test data for CandlestickChart
        CandlestickChart.objects.create(date="2023-09-01", open=100.50, high=105.00, low=99.00, close=102.75)

        # Set up test data for other chart models
        LineChart.objects.create(label="Test Line Chart", value=150.75)
        BarChart.objects.create(label="Test Bar Chart", value=200.50)
        PieChart.objects.create(label="Test Pie Chart", value=300.25)

    def test_candlestick_creation(self):
        candlestick = CandlestickChart.objects.get(date="2023-09-01")
        self.assertEqual(candlestick.open, 100.50)  # Ensure the open value is correct
        self.assertEqual(candlestick.close, 102.75)  # Ensure the close value is correct

    def test_line_chart_creation(self):
        line_chart = LineChart.objects.get(label="Test Line Chart")
        self.assertEqual(line_chart.value, 150.75)  # Ensure value is correct

    def test_bar_chart_creation(self):
        bar_chart = BarChart.objects.get(label="Test Bar Chart")
        self.assertEqual(bar_chart.value, 200.50)  # Ensure value is correct

    def test_pie_chart_creation(self):
        pie_chart = PieChart.objects.get(label="Test Pie Chart")
        self.assertEqual(pie_chart.value, 300.25)  # Ensure value is correct
