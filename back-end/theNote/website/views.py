from rest_framework.viewsets import ModelViewSet
from .models import Note
from .serializers import NoteSerializer
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render

class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]


def auth(request):
    return render(request, 'oauth.html')