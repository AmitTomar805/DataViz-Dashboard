from rest_framework import serializers
from .models import CandlestickChart, LineChart, BarChart, PieChart

# Serializer for Candlestick chart data
class CandlestickChartSerializer(serializers.ModelSerializer):
    x = serializers.DateField(source='date')  # Map 'date' field to 'x'

    class Meta:
        model = CandlestickChart
        fields = ['id', 'x', 'open', 'high', 'low', 'close']  # Define fields to serialize

# Base serializer for other chart types
class BaseChartSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id', 'label', 'value']  # Common fields for Line, Bar, Pie charts

# Serializer for Line chart data
class LineChartSerializer(BaseChartSerializer):
    class Meta(BaseChartSerializer.Meta):
        model = LineChart

# Serializer for Bar chart data
class BarChartSerializer(BaseChartSerializer):
    class Meta(BaseChartSerializer.Meta):
        model = BarChart

# Serializer for Pie chart data
class PieChartSerializer(BaseChartSerializer):
    class Meta(BaseChartSerializer.Meta):
        model = PieChart
