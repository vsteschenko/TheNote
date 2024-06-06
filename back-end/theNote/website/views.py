from rest_framework.viewsets import ModelViewSet
from .models import Note
from .serializers import NoteSerializer
from .permissions import IsOwnerOrStaffOrReadOnly
from django.shortcuts import render
import os 
import cloudinary
from cloudinary.uploader import upload
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

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

    @action(detail=False, methods=['POST'], parser_classes=[MultiPartParser, FormParser])
    def upload_image(self, request):
        image = request.FILES.get('image')
        text = request.data.get('text', '')
        if not image:
            return Response({"detail": "No image provided."}, status=status.HTTP_400_BAD_REQUEST)
        
        cloudinary.config( 
            cloud_name = os.getenv("cloud_name"), 
            api_key = os.getenv("api_key"), 
            api_secret = os.getenv("api_secret"),
            secure=True
        )

        upload_result = upload(image)
        image_url = upload_result["secure_url"]

        note = Note.objects.create(image_url=image_url, text=text, owner=request.user)
        note.save()

        serializer = self.get_serializer(note)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


def auth(request):
    return render(request, 'oauth.html')