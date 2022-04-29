from django.shortcuts import render
from rest_framework import viewsets
from .models import Signal
from .serializers import SignalSerializer

# Create your views here.


class SignalView(viewsets.ModelViewSet):
    serializer_class = SignalSerializer
    queryset = Signal.objects.all()