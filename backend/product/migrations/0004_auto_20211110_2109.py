# Generated by Django 3.2.6 on 2021-11-10 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_auto_20211110_1821'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='online_shop',
            field=models.CharField(choices=[('네이버 스마트스토어', '네이버 스마트스토어'), ('이케아', '이케아'), ('오늘의 집', '오늘의 집'), ('집꾸미기', '집꾸미기'), ('기타', '기타'), ('해외사이트', '해외사이트')], default='오늘의 집', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='shop_Type',
            field=models.CharField(choices=[('비매품', '비매품'), ('오프라인', '오프라인'), ('온라인', '온라인')], default='온라인', max_length=20),
        ),
        migrations.AlterField(
            model_name='product',
            name='type',
            field=models.CharField(choices=[('DIY/공구', 'DIY/공구'), ('장식/조명', '장식/조명'), ('가전', '가전'), ('수납/정리', '수납/정리'), ('가구', '가구'), ('패브릭', '패브릭')], default='가구', max_length=20),
        ),
        migrations.AlterField(
            model_name='productreview',
            name='product_rate',
            field=models.CharField(choices=[('1', '1'), ('5', '5'), ('3', '3'), ('4', '4'), ('2', '2')], default='5', max_length=20),
        ),
    ]