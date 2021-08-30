from rest_framework import serializers
from .models import Curation,CurationComment,CurationTag

class CurationCommentSerializer(serializers.ModelSerializer) :
    class Meta :
        model = CurationComment
        fields ='__all__'

class CurationTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurationTag
        fields ='__all__'

class CurationSerializer(serializers.ModelSerializer) :
    image = serializers.ImageField(use_url=True)
    comments = CurationCommentSerializer(many=True, read_only=True)
    class Meta :
        model = Curation
        fields = ('title','pub_date','user','content','image','private'
        ,'share','products','product_user','tags','comments')