# Generated by Django 3.2.6 on 2021-09-27 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0006_auto_20210927_1146'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='online_shop',
            field=models.CharField(choices=[('이케아', '이케아'), ('해외사이트', '해외사이트'), ('오늘의 집', '오늘의 집'), ('네이버 스마트스토어', '네이버 스마트스토어'), ('집꾸미기', '집꾸미기'), ('기타', '기타')], default='오늘의 집', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='shop_Type',
            field=models.CharField(choices=[('온라인', '온라인'), ('오프라인', '오프라인'), ('비매품', '비매품')], default='온라인', max_length=20),
        ),
        migrations.AlterField(
            model_name='product',
            name='type',
            field=models.CharField(choices=[('패브릭', '패브릭'), ('가전', '가전'), ('가구', '가구'), ('수납/정리', '수납/정리'), ('DIY/공구', 'DIY/공구'), ('장식/조명', '장식/조명')], default='가구', max_length=20),
        ),
    ]
