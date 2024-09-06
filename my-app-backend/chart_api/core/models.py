from django.db import models

class BaseChart(models.Model):
    label = models.CharField(max_length=255)
    value = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        abstract = True

class CandlestickChart(models.Model):
    date = models.DateField()
    open = models.DecimalField(max_digits=10, decimal_places=2)
    high = models.DecimalField(max_digits=10, decimal_places=2)
    low = models.DecimalField(max_digits=10, decimal_places=2)
    close = models.DecimalField(max_digits=10, decimal_places=2)

class LineChart(BaseChart):
    pass

class BarChart(BaseChart):
    pass

class PieChart(BaseChart):
    pass