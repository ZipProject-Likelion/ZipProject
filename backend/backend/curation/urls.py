from django.urls import path
from . import views

urlpatterns = [
	path('curation-list/', views.curationList, name="curation-list"),
	path('curation-detail/<str:pk>/', views.curationDetail, name="curation-detail"),
	path('curation-create/', views.curationCreate, name="curation-create"),
	path('curation-update/<str:pk>/', views.curationUpdate, name="curation-update"),
	path('curation-delete/<str:pk>/', views.curationDelete, name="curation-delete"),
]
