from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (ProjectImageViewSet, ProjectViewSet, ServiceViewSet,
                    TechnologyViewSet, UserViewSet)

router = DefaultRouter()

router.register(
    'technologies',
    TechnologyViewSet
)

router.register(
    'users',
    UserViewSet
)

router.register(
    'project-images',
    ProjectImageViewSet
)
router.register(
    'projects',
    ProjectViewSet
)
router.register(
    'services',
    ServiceViewSet
)

urlpatterns = [
    path('', include(router.urls)),
]
