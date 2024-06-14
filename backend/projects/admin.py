from django.contrib import admin

from .models import Project, ProjectImage, Service, Technology


class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'description')
    list_filter = ('type',)
    search_fields = ('name', 'description')
    inlines = [ProjectImageInline]


class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'price', 'time')
    list_filter = ('type',)
    search_fields = ('name', 'description')


admin.site.register(Technology, TechnologyAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Service, ServiceAdmin)
