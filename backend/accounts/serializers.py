from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import SignalSeller, SignalBuyer


#Used to access and refresh tokens
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        #Add custom claims
        token['username'] = user.username
        token['email'] = user.email

        return token

#Register user form
class NewUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators = [UniqueValidator(queryset=User.objects.all())]
        )
    
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    user_type = serializers.CharField(write_only=True, required=True)
    

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name', 'user_type')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({'password', 'Password fields do not match'})
        
        return attrs

    
    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
        )
        print('User created')
        user.set_password(validated_data['password'])
        user.save()

        user_type = validated_data['user_type']
        if user_type == 'merchant':
            SignalSeller.objects.create(user=user)
        elif user_type == 'buyer':
            SignalBuyer.objects.create(user=user)

        return user


class SignalSellerSerializer(serializers.ModelSerializer):
    m_pesa_phone_number = serializers.CharField()