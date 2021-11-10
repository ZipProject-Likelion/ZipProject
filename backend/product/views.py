from rest_framework import viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authentication import SessionAuthentication,BasicAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly

from django.shortcuts import render, get_list_or_404

import django_filters.rest_framework
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

from .models import Product, ProductTag
from .serializers import ProductSerializer, ProductTagSerializer
# from .serializers import ProductReviewSerializer

class ProductViewSet(viewsets.ModelViewSet):
    authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'content']
    ordering_fields = ['pub_date']

# class ProductReviewViewSet(viewsets.ModelViewSet):
#     queryset = ProductReview.objects.all()
#     serializer_class = ProductReviewSerializer

class ProductTagViewSet(viewsets.ModelViewSet):
    queryset = ProductTag.objects.all()
    serializer_class = ProductTagSerializer

product_list = ProductViewSet.as_view({'get': 'list'})
# review_list = ProductReviewViewSet.as_view({'get': 'list'})
tag_list = ProductTagViewSet.as_view({'get': 'list'})