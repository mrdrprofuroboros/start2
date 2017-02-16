from django.contrib import admin
from .models import *

@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    pass

@admin.register(Combobox3)
class Combobox3Admin(admin.ModelAdmin):
    pass

@admin.register(FolderTreeNode)
class FolderTreeNodeAdmin(admin.ModelAdmin):
    pass