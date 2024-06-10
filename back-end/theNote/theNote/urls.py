from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from website.views import NoteViewSet, LoginView, SignupView, TestTokenView

router = SimpleRouter()
router.register(r'note', NoteViewSet, basename='note')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', LoginView.as_view(), name='login'),
    path('signup/', SignupView.as_view(), name='signup'),
    path('test_token/', TestTokenView.as_view(), name='test_token'),
    path('', include(router.urls)),
]
