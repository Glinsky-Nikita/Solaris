from django.db import models

class СlientsList(models.Model):
    Name = models.CharField(max_length=20)
    Tell = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.Name} / {self.Tell}"

class FeedbackAndWishesList(models.Model):
    Name = models.CharField(max_length = 10)
    Text = models.TextField()

    def __str__(self):
        return f"{self.Name} / {self.Text}"