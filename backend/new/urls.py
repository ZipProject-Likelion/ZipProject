from django.contrib import admin
from django.urls import path
from new import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('new/', views.new, name="new"),
    path('new1/', views.new1, name="new1"),
    path('new2/', views.new2, name="new2"),

    path('SHARE/', views.SHARE, name="SHARE"),
    path('ZIP/', views.ZIP, name="ZIP"),

    path('detail/<int:index>', views.detail, name="detail"),
    path('edit/<int:index>', views.edit, name='edit'),
    path('detail/<int:pk>/delete', views.delete, name="delete"),

    path('api/content/', views.ContentListAPI.as_view()),
    path('api/image/', views.ImageListAPI.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
