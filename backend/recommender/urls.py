from django.urls import path, include
from . import views

urlpatterns = [
    path('recommenderlist/', views.recommender_list),
]