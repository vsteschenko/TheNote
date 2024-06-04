from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from website.views import NoteViewSet, auth

router = SimpleRouter()
router.register(r'note', NoteViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('social_django.urls', namespace='social')),
    path('auth/', auth)
]

urlpatterns += router.urls