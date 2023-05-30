from django.db import models
from uuid import uuid4

def upload_url(self, filename):
    return f"projects/{uuid4()}/{filename}"

# Create your models here.
class Projects(models.Model):
    title = models.CharField(max_length=200)
    message = models.TextField()
    image = models.ImageField(upload_to=upload_url)

    class Meta:
        db_table = 'projects'
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'

    def __str__(self) -> str:
        return self.title
