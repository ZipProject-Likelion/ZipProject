from django.urls import path
from . import views

urlpatterns = [
    path('recommender_list/', views.recommender_list),
    path('chosen_tag_list/', views.chosen_tag_list),
    path('top_tag_list/', views.top_tag_list),
]