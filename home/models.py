from django.db import models

# Create your models here.

class ContactUsersInfo(models.Model):

	name = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	message = models.TextField()

	def __str__(self):
		return "Message From " + str(self.name)