from django.db import models


class ServiceType(models.TextChoices):
    TELEGRAM = 'telegram', 'Telegram'
    SITE = 'site', 'Site'
    APP = 'app', 'App'
    AI = 'ai', 'AI'


class Technology(models.Model):
    name = models.CharField(
        max_length=255
    )
    image = models.URLField(
        max_length=200,
        blank=True,
        null=True
    )
    description = models.TextField()

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(
        max_length=255
    )
    type = models.CharField(
        max_length=20,
        choices=ServiceType.choices
    )
    users = models.ManyToManyField(
        'users.User',
        related_name='projects'
    )
    stack = models.ManyToManyField(
        Technology,
        related_name='projects'
    )
    description = models.TextField()

    def __str__(self):
        return self.name


class ProjectImage(models.Model):
    project = models.ForeignKey(
        Project,
        related_name='images',
        on_delete=models.CASCADE
    )
    image = models.URLField(
        max_length=200
    )

    def __str__(self):
        return f"Image for {self.project.name}"


class Service(models.Model):
    name = models.CharField(
        max_length=255
    )
    type = models.CharField(
        max_length=20,
        choices=ServiceType.choices
    )
    description = models.TextField()
    price = models.CharField(
        max_length=50
    )
    time = models.CharField(
        max_length=50
    )

    def __str__(self):
        return self.name
