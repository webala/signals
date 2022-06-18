from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Signal
from .serializers import SignalSerializer
from accounts.models import SignalSeller

# Create your views here.


class SignalView(viewsets.ModelViewSet):
    serializer_class = SignalSerializer
    queryset = Signal.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data
        seller_query = SignalSeller.objects.filter(user=request.user)
        if seller_query.exists():
            seller = seller_query.first()
        else:
            return Response({'message': 'Only signal sellers can post signals'})
        new_signal = Signal.objects.create(
            comodity=data['comodity'],
            mkt_range=data['mkt_range'],
            stop_loss=data['stop_loss'],
            take_profit1 = data['take_profit1'],
            take_profit2 = data['take_profit2'],
            take_profit3 = data['take_profit3'],
            action = data['action'],
            seller = seller
        )

        serializer = SignalSerializer(new_signal)
        return Response(serializer.data)
        