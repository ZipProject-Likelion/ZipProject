from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

# for users app

# for product app
from rest_framework import routers
from product.views import ProductViewSet,ProductCommentViewSet,ProductTagViewSet
# for curation app
from curation.views import CurationViewSet,CurationCommentViewSet,CurationTagViewSet

router = routers.DefaultRouter()
# for product app
router.register('product/add',ProductViewSet)
router.register('product/comment', ProductCommentViewSet)
router.register('product/tag',ProductTagViewSet)
# for curation app
router.register('curation/add',CurationViewSet)
router.register('curation/comment',CurationCommentViewSet)
router.register('curation/tag',CurationTagViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    path('users/', include('users.urls')),
    path('api/', include('curation.urls')),
    path('product/', include('product.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)