from django.contrib import admin
from portfolio.models import Projects

# Register your models here.
@admin.register(Projects)
class ProjectsAdmin(admin.ModelAdmin):
    list_display = ('title', 'message', 'image')
