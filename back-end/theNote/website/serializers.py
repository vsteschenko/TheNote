from rest_framework import serializers
from .models import Note, Collaborator
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class CollaboratorSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Collaborator
        fields = ['id', 'user', 'added_at']

class NoteSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    collaborators = CollaboratorSerializer(many=True, read_only=True)

    class Meta:
        model = Note
        fields = ['id', 'text', 'date', 'private', 'owner', 'image_url', 'collaborators']
        read_only_fields = ['owner', 'collaborators']