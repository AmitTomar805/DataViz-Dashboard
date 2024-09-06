from django.db import models

# Base model for charts with common fields
class BaseChart(models.Model):
    label = models.CharField(max_length=255)  # Label for the chart entry
    value = models.DecimalField(max_digits=10, decimal_places=2)  # Value for the chart entry

    class Meta:
        abstract = True  # This model will not create a table

# Model for Candlestick chart data
class CandlestickChart(models.Model):
    date = models.DateField()  # Date for the candlestick entry
    open = models.DecimalField(max_digits=10, decimal_places=2)  # Opening price
    high = models.DecimalField(max_digits=10, decimal_places=2)  # Highest price
    low = models.DecimalField(max_digits=10, decimal_places=2)  # Lowest price
    close = models.DecimalField(max_digits=10, decimal_places=2)  # Closing price

# Model for Line chart inheriting from BaseChart
class LineChart(BaseChart):
    pass

# Model for Bar chart inheriting from BaseChart
class BarChart(BaseChart):
    pass

# Model for Pie chart inheriting from BaseChart
class PieChart(BaseChart):
    pass
