# Generated by Django 3.2.6 on 2021-09-06 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_customuser_interest'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='interest',
            field=models.CharField(choices=[('choice2', 'Choice2'), ('choice3', 'Choice3'), ('choice1', 'Choice1')], default='', max_length=20),
        ),
    ]
