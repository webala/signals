from django.urls import path
from .views import RegisterView, MyTokenObtainView, add_mpesa_number, testEndPoint
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', MyTokenObtainView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('mpesa_no/add/', add_mpesa_number, name='add_mpesa_number'),
    path('test/', testEndPoint, name='test')
]