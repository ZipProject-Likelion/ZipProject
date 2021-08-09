from __future__ import unicode_literals
from django.utils import timezone
from django.db import models
# Create your models here.
class Content(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField(default = timezone.now)
    body = models.TextField(default='')

class Image(models.Model):
    post = models.ForeignKey(Content, on_delete=models.CASCADE)
    file = models.ImageField( blank=True, null=True)
