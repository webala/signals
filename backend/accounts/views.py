from django.shortcuts import render
from .serializers import MyTokenObtainPairSerializer, NewUserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User


# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = NewUserSerializer

class MyTokenObtainView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer