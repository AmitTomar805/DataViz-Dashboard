from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CandlestickChartViewSet, LineChartViewSet,
    BarChartViewSet, PieChartViewSet
)

router = DefaultRouter()
router.register(r'candlestick', CandlestickChartViewSet)
router.register(r'line', LineChartViewSet)
router.register(r'bar', BarChartViewSet)
router.register(r'pie', PieChartViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]