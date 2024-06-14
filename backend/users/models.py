from django.contrib.auth.models import AbstractUser
from django.db import models

from projects.models import Technology


class User(AbstractUser):
    image = models.ImageField(
        upload_to='images/users/',
        default='images/default_ava.jpg'
    )
    bio = models.TextField(
        blank=True,
        null=True
    )
    stack = models.ManyToManyField(
        Technology,
        related_name='users'
    )

    def __str__(self) -> str:
        return self.username
