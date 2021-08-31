# Generated by Django 3.2.6 on 2021-08-31 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_auto_20210901_0148'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='shop_Type',
            field=models.CharField(choices=[('비매품', '비매품'), ('오프라인', '오프라인'), ('온라인', '온라인')], default='온라인', max_length=20),
        ),
        migrations.AlterField(
            model_name='product',
            name='type',
            field=models.CharField(choices=[('장식/조명', '장식/조명'), ('가구', '가구'), ('가전', '가전'), ('패브릭', '패브릭'), ('DIY/공구', 'DIY/공구'), ('수납/정리', '수납/정리')], default='가구', max_length=20),
        ),
    ]
