from django.urls import path
from . import views
from django.contrib import admin

urlpatterns=[
    path('signup/',views.signup_view,name='signup'),
    path('login/',views.login_view,name='login'),
    path('logout/',views.logout_view,name='logout'),
    path('mypage/<str:username>/',views.mypage_view,name='mypage'),
    path('profile/',views.profile,name="profile"),
    path('api/profile/', views.ProfileListAPI.as_view()),
]