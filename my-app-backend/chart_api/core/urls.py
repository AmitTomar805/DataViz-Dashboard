from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CandlestickChartViewSet, LineChartViewSet,
    BarChartViewSet, PieChartViewSet
)

# Set up the router to handle API routes
router = DefaultRouter()
router.register(r'candlestick', CandlestickChartViewSet)  # Route for Candlestick chart
router.register(r'line', LineChartViewSet)  # Route for Line chart
router.register(r'bar', BarChartViewSet)  # Route for Bar chart
router.register(r'pie', PieChartViewSet)  # Route for Pie chart

# Include the router-generated URL patterns
urlpatterns = [
    path('api/', include(router.urls)),
]
