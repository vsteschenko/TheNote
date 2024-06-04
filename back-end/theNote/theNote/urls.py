from django.contrib import admin
from django.urls import path
from rest_framework.routers import SimpleRouter
from website.views import NoteViewSet

router = SimpleRouter()
router.register(r'note', NoteViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += router.urls