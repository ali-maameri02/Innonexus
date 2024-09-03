from django.db import models
from django.contrib.auth.models import AbstractUser, Permission as AuthPermission
from django.contrib.auth.hashers import make_password

from django.utils.translation import gettext_lazy as _
from django.core.validators import RegexValidator

class User(AbstractUser):
    ROLE_CHOICES = [
        ('Participant', 'Participant'),
        ('Company', 'Company'),
        ('Mentor', 'Mentor'),
    ]
    username_validator = RegexValidator(
        regex=r'^[\w.@+-]+$',
        message=_('Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.'),
        flags=['case_sensitive'],
    )
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('Female', 'Female'),
    ]

    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)
    role = models.CharField(choices=ROLE_CHOICES, max_length=50)
    telephone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    birthday = models.DateField(default=None, blank=True, null=True)
    address = models.TextField(default=None, blank=True, null=True)
    marital_status = models.CharField(max_length=20, blank=True, null=True)
    def save(self, *args, **kwargs):
        if self.pk is None:  # Only hash the password when creating a new user
            self.password = make_password(self.password)
        super().save(*args, **kwargs)
    def __str__(self):
        return self.username

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
