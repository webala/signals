from django.shortcuts import render
from .serializers import MyTokenObtainPairSerializer, NewUserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import SignalSellerSerializer
from .models import SignalSeller


# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = NewUserSerializer

class MyTokenObtainView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_mpesa_number(request):
    serializer_class = SignalSellerSerializer(data=request.data)
    user = request.user
    if serializer_class.is_valid(raise_exception=True):
        data = serializer_class.validated_data
        merchat = SignalSeller.objects.filter(user=user).first()
        merchat.m_pesa_phone_number = data.get('m_pesa_phone_number')
        merchat.save()
        serializer_class = SignalSellerSerializer(merchat)
        return Response(serializer_class.data, status.HTTP_200_OK)
    else:
        return Response({}, status.HTTP_400_BAD_REQUEST)
        

@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)