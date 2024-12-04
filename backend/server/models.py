from django.db import models

# Create your models here.
class Client(models.Model):
    nom = models.CharField(max_length=100)
    cin = models.IntegerField()
    adresse = models.CharField(max_length=100)
    contact = models.IntegerField()

    def __str__(self):
        return self.nom