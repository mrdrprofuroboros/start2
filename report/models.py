from __future__ import unicode_literals

from django.db import models

class Report(models.Model):
    value1 = models.CharField(max_length=100, null=True)
    value2 = models.CharField(max_length=100, null=True)
    value3 = models.CharField(max_length=100, null=True)
    value4 = models.CharField(max_length=100, null=True)
    value5 = models.BooleanField(default=False)
    value6 = models.CharField(max_length=100, null=True)

    def __unicode__(self):
        return self.value1

class Combobox3(models.Model):
    value = models.CharField(max_length=100, primary_key=True)

    def __unicode__(self):
        return self.value

class FolderTreeNode(models.Model):
    is_root = models.BooleanField(default=False)
    is_leaf = models.BooleanField(default=True)
    parent = models.ForeignKey('FolderTreeNode', related_name='children', on_delete=models.CASCADE, null=True, blank=True)

    name = models.CharField(max_length=100, null=True)

    def __unicode__(self):
        return self.name