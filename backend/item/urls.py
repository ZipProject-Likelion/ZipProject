from django.urls import path, include
from item import views
from django.contrib import admin

urlpatterns = [
    path('', views.homeitem, name="homeitem"),
    path('newitem/', views.newitem, name="newitem"),
    path('detail/<int:index>', views.detailitem, name="detailitem"),
    path('edit/<int:index>', views.edititem, name="edititem"),
    path('detail/<int:pk>/delete', views.deleteitem, name="deleteitem"),
    path('detail/<int:index>/comment/<int:comment_pk>/delete/',
    views.delete_comment, name="delete_comment"),
    path('api/item/', views.ItemListAPI.as_view()),
    path('api/itemcomment/', views.ItemCommentListAPI.as_view()),
    # path('like/<int:item_id>',views.like_item,name="like_item"),
]
