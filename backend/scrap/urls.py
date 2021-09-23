from django.urls import path
from . import views

urlpatterns = [
    path('scrapproductlist/', views.scrap_product_list),
    path('scrapcurationlist/', views.scrap_curation_list),
]