from rest_framework.viewsets import ModelViewSet
from .models import Note
from .serializers import NoteSerializer
from .permissions import IsOwnerOrStaffOrReadOnly
from django.shortcuts import render

class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsOwnerOrStaffOrReadOnly]

    def perform_create(self, serializer):
        print(f"Current user: {self.request.user}") 
        serializer.validated_data["owner"] = self.request.user
        serializer.save()


def auth(request):
    return render(request, 'oauth.html')