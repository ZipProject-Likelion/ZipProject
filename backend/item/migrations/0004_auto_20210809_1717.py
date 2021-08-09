# Generated by Django 3.2.6 on 2021-08-09 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0003_alter_item_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(blank=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='item',
            name='type',
            field=models.CharField(choices=[('홈데코/조명', '홈데코/조명'), ('가구', '가구'), ('수납/정리', '수납/정리'), ('패브릭', '패브릭'), ('DIY/공구', 'DIY/공구'), ('가전', '가전')], max_length=20),
        ),
    ]
