from django.core import serializers
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Content, Image
from django.utils import timezone

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        models=Content
        fields='__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        models=Image
        fields='__all__'