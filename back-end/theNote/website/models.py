from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    private = models.BooleanField(default=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f'ID{self.id}. {self.user} user_id: {self.user.id}'