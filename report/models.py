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