# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-16 09:55
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('report', '0005_auto_20170216_1253'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='foldertreenode',
            name='checked',
        ),
    ]