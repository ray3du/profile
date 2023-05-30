from django.urls import path
from portfolio.views import DashboardView

urlpatterns = [
    path('', DashboardView.as_view(), name="Home")
]
