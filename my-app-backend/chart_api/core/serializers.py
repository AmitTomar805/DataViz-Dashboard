from rest_framework import serializers
from .models import CandlestickChart, LineChart, BarChart, PieChart

class CandlestickChartSerializer(serializers.ModelSerializer):
    x = serializers.DateField(source='date')

    class Meta:
        model = CandlestickChart
        fields = ['id', 'x', 'open', 'high', 'low', 'close']

class BaseChartSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id', 'label', 'value']

class LineChartSerializer(BaseChartSerializer):
    class Meta(BaseChartSerializer.Meta):
        model = LineChart

class BarChartSerializer(BaseChartSerializer):
    class Meta(BaseChartSerializer.Meta):
        model = BarChart

class PieChartSerializer(BaseChartSerializer):
    class Meta(BaseChartSerializer.Meta):
        model = PieChart