from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import CandlestickChart, LineChart, BarChart, PieChart
from .serializers import (
    CandlestickChartSerializer, LineChartSerializer,
    BarChartSerializer, PieChartSerializer
)

# Base viewset for handling chart data creation
class BaseChartViewSet(viewsets.ModelViewSet):
    def create(self, request, *args, **kwargs):
        data = request.data
        many = isinstance(data, list)  # Check if multiple records are being created
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        
        # Save the validated data
        self.perform_create(serializer)
        
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)  # Return success response

# Viewset for Candlestick chart
class CandlestickChartViewSet(BaseChartViewSet):
    queryset = CandlestickChart.objects.all()
    serializer_class = CandlestickChartSerializer

# Viewset for Line chart
class LineChartViewSet(BaseChartViewSet):
    queryset = LineChart.objects.all()
    serializer_class = LineChartSerializer

# Viewset for Bar chart
class BarChartViewSet(BaseChartViewSet):
    queryset = BarChart.objects.all()
    serializer_class = BarChartSerializer

# Viewset for Pie chart
class PieChartViewSet(BaseChartViewSet):
    queryset = PieChart.objects.all()
    serializer_class = PieChartSerializer
