from django.contrib import admin
from .models import CustomerLocation, MapLocation, TaskerLocation, TaskLocation

admin.site.register(CustomerLocation)
admin.site.register(TaskerLocation)
admin.site.register(TaskLocation)
admin.site.register(MapLocation)

# Register your models here.
