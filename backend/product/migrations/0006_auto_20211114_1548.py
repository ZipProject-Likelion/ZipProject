# Generated by Django 3.2.6 on 2021-11-14 06:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('product', '0005_auto_20211114_1539'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='online_shop',
            field=models.CharField(choices=[('이케아', '이케아'), ('기타', '기타'), ('집꾸미기', '집꾸미기'), ('오늘의 집', '오늘의 집'), ('네이버 스마트스토어', '네이버 스마트스토어'), ('해외사이트', '해외사이트')], default='오늘의 집', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='type',
            field=models.CharField(choices=[('수납/정리', '수납/정리'), ('장식/조명', '장식/조명'), ('패브릭', '패브릭'), ('가전', '가전'), ('가구', '가구'), ('DIY/공구', 'DIY/공구')], default='가구', max_length=20),
        ),
        # migrations.AlterField(
        #     model_name='product',
        #     name='user',
        #     field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='post_products', to=settings.AUTH_USER_MODEL),
        # ),
    ]
