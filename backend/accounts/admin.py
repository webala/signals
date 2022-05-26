from django.contrib import admin
from .models import SignalBuyer, SignalSeller
# Register your models here.
admin.site.register(SignalSeller)
admin.site.register(SignalBuyer)