from django.contrib import admin
from .models import *

@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    pass