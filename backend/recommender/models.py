from __future__ import unicode_literals
from django.utils import timezone
from django.db import models
from django.conf import settings

class Recommender(models.Model):
    recommend_to_user = models.ManyToManyField('users.CustomUser', blank=True)
    products = models.ManyToManyField('product.Product',blank=True)
    product_tags = models.ManyToManyField('product.ProductTag',blank=True)
    curations = models.ManyToManyField('curation.Curation',blank=True)
    curation_tags = models.ManyToManyField('curation.CurationTag',blank=True)