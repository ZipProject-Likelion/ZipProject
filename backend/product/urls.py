from django.urls import path, include
from . import views

urlpatterns = [
    path('productlist/', views.product_list),
    path('commentlist/', views.comment_list),
    path('taglist/', views.tag_list),
]