from rest_framework.viewsets import ModelViewSet
from .models import Note
from .serializers import NoteSerializer
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render

class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        print(f"Current user: {self.request.user}") 
        serializer.validated_data["owner"] = self.request.user
        serializer.save()


def auth(request):
    return render(request, 'oauth.html')