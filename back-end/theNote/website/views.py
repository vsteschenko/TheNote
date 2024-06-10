from rest_framework.viewsets import ModelViewSet
from .models import Note
from .serializers import NoteSerializer, UserSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from django.shortcuts import render
import os 
import cloudinary
from cloudinary.uploader import upload
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

class LoginView(APIView):
    def post(self, request):
        user = get_object_or_404(User, username=request.data['username'])
        if not user.check_password(request.data['password']):
            return Response({'detail': 'incorrect password.'}, status=status.HTTP_400_BAD_REQUEST)
        token, created = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance=user)
        return Response({"token": token.key, "user": serializer.data})

class SignupView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(
                email=request.data['email'],
                username=request.data['username'],
                password=request.data['password']
            )
            token = Token.objects.create(user=user)
            return Response({'token': token.key, 'user': serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NoteViewSet(ModelViewSet):
    serializer_class = NoteSerializer
    authentication_classes = [TokenAuthentication]
    permissions_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Note.objects.all()
        user = self.request.user
        if user.is_staff:
            return queryset
        else:
            return queryset.filter(user=user)

    def perform_create(self, serializer):
        serializer.validated_data["user"] = self.request.user
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

        note = Note.objects.create(image_url=image_url, text=text, user=request.user)
        note.save()

        serializer = self.get_serializer(note)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class TestTokenView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response("passed for {}".format(request.user.email))