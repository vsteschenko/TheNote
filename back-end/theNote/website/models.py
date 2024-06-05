from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    private = models.BooleanField(default=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_notes')
    image_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f'ID{self.id}. {self.owner} user_id: {self.owner.id}'

    def is_collaborator(self, user):
        return self.collaborators.filter(user=user).exists()

class Collaborator(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    note = models.ForeignKey(Note, related_name='collaborators', on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} collaborates on {self.note}'