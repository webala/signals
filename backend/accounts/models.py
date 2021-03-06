from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class SignalBuyer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class SignalSeller(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    m_pesa_phone_number = models.CharField(max_length=15, null=True, blank=True)
    buyers = models.ManyToManyField(SignalBuyer, blank=True)


    