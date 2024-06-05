from rest_framework.viewsets import ModelViewSet
from .models import Note, Collaborator
from .serializers import NoteSerializer, CollaboratorSerializer
from .permissions import IsOwnerOrCollaboratorOrStaffOrReadOnly
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from rest_framework import status

class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsOwnerOrCollaboratorOrStaffOrReadOnly]

    def perform_create(self, serializer):
        note = serializer.save(owner=self.request.user)
        Collaborator.objects.create(user=self.request.user, note=note)

    @action(detail=True, methods=['post'], permission_classes=[IsOwnerOrCollaboratorOrStaffOrReadOnly])
    def add_collaborator(self, request, pk=None):
        note = self.get_object()
        if not note.owner == request.user:
            return Response({'detail': 'Only the owner can add collaborators.'}, status=status.HTTP_403_FORBIDDEN)
        
        username = request.data.get('username')
        if not username:
            return Response({'detail': 'Username is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({'detail': 'User does not exist.'}, status=status.HTTP_404_NOT_FOUND)
        
        Collaborator.objects.create(user=user, note=note)
        return Response({'detail': 'Collaborator added.'}, status=status.HTTP_200_OK)

def auth(request):
    return render(request, 'oauth.html')
