from django.core import serializers
from django.db.models import fields
from rest_framework import serializers
from django.utils import timezone
from .models import ItemComment,Item
from django.conf import settings

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=Item
        fields='__all__'

class ItemCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=ItemComment
        fields='__all__'