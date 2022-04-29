from rest_framework import serializers
from .models import Signal

class SignalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signal
        fields = [
            'comodity',
            'mkt_range',
            'stop_loss',
            'take_profit1',
            'take_profit2',
            'take_profit3',
            'action'
        ]