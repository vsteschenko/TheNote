from rest_framework.viewsets import ModelViewSet
from .models import Note
from .serializers import NoteSerializer
from .permissions import IsOwnerOrStaffOrReadOnly
from django.shortcuts import render

class NoteViewSet(ModelViewSet):
    serializer_class = NoteSerializer
    permission_classes = [IsOwnerOrStaffOrReadOnly]

    def get_queryset(self):
        queryset = Note.objects.all()
        user = self.request.user
        if user.is_staff:
            return queryset
        else:
            return queryset.filter(owner=user)

    def perform_create(self, serializer):
        serializer.validated_data["owner"] = self.request.user
        serializer.save()


def auth(request):
    return render(request, 'oauth.html')