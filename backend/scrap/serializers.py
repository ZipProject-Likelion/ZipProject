from rest_framework import serializers
from .models import ScrapCuration, ScrapProduct

class ScrapProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScrapProduct
        fields ='__all__'


class ScrapCurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScrapCuration
        fields ='__all__'