from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.shortcuts import render, get_list_or_404

from .models import Product, ProductComment, ProductTag
from .serializers import ProductSerializer, ProductCommentSerializer, ProductTagSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductCommentViewSet(viewsets.ModelViewSet):
    queryset = ProductComment.objects.all()
    serializer_class = ProductCommentSerializer

class ProductTagViewSet(viewsets.ModelViewSet):
    queryset = ProductTag.objects.all()
    serializer_class = ProductTagSerializer

product_list = ProductViewSet.as_view({'get': 'list'})
comment_list = ProductCommentViewSet.as_view({'get': 'list'})
tag_list = ProductTagViewSet.as_view({'get': 'list'})
