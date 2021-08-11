from rest_framework import serializers
from .models import Curation

class CurationSerializer(serializers.ModelSerializer) :
    image = serializers.ImageField(use_url=True)

    class Meta :
        model = Curation
        fields = ('id','title','pub_date','context','image')