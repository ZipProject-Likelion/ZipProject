# Generated by Django 3.2.6 on 2021-08-03 04:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('new', '0002_auto_20210704_2302'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='image',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
