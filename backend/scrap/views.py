from django.shortcuts import render
from rest_framework import viewsets
from .models import ScrapProduct,ScrapCuration
from .serializers import ScrapProductSerializer,ScrapCurationSerializer

class ScrapProductViewSet(viewsets.ModelViewSet):
    queryset = ScrapProduct.objects.all()
    serializer_class = ScrapProductSerializer

class ScrapCurationViewSet(viewsets.ModelViewSet):
    queryset = ScrapCuration.objects.all()
    serializer_class = ScrapCurationSerializer

scrap_product_list = ScrapProductViewSet.as_view({'get': 'list'})
scrap_curation_list = ScrapCurationViewSet.as_view({'get': 'list'})