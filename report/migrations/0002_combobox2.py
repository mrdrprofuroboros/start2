# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-16 07:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('report', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Combobox2',
            fields=[
                ('value', models.CharField(max_length=100, primary_key=True, serialize=False)),
            ],
        ),
    ]
