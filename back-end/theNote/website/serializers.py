from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Note

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password']

class NoteSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Note
        fields = ['id', 'user', 'text', 'date', 'image_url']