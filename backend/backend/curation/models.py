from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from django.db import models


class Curation(models.Model):
    title = models.CharField(max_length=200) #큐레이션 제목
    pub_date = models.DateTimeField(default=timezone.now) #생성날짜/시간
    context = models.TextField(default='') #큐레이션 설명
    image = models.ImageField(default='media/default_image.jpeg')
    
    def __str__(self):
        return self.title