from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'text', 'owner', 'date']
        read_only_fields = ['owner']