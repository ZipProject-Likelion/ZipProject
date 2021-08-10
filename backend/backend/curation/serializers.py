from rest_framework import serializers
from rest_framework import serializers
from .models import Curation

class CurationSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Curation
        fields = '__all__'