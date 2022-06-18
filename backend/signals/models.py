from django.db import models

# Create your models here.


class Signal(models.Model):

    action_choices = (
        ('BUY', 'BUY'),
        ('SELL', 'SELL')
    )

    comodity = models.CharField(max_length=10)
    mkt_range = models.CharField(max_length=20)
    stop_loss = models.IntegerField()
    take_profit1 = models.IntegerField()
    take_profit2 = models.IntegerField()
    take_profit3 = models.IntegerField()
    action = models.CharField(choices=action_choices, max_length=4)
    

    def __str__(self):
        return self.comodity