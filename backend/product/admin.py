from django.contrib import admin
from .models import Product,ProductComment,ProductTag

admin.site.register(Product)
admin.site.register(ProductComment)
admin.site.register(ProductTag)