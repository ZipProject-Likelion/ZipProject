from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.shortcuts import render, get_list_or_404

from .models import Recommender
from .serializers import RecommenderSerializer

class RecommenderViewSet(viewsets.ModelViewSet):
    queryset = Recommender.objects.all()
    serializer_class = RecommenderSerializer

recommender_list = RecommenderViewSet.as_view({'get': 'list'})