from django.shortcuts import render,redirect
from django.views.generic import TemplateView
from .models import ContactUsersInfo
from django.contrib import messages
from django.core.mail import send_mail 
from email.message import EmailMessage
import smtplib
import os

class HomeView(TemplateView):
	template_name = "home.html"


def Contact(request):

	if request.method == "POST":
		username = request.POST['username']
		email = request.POST['email']
		message = request.POST['message']

		sendEmail = EmailMessage()
		sendEmail['Subject'] = "Replying on contacting"
		sendEmail['From'] = email
		sendEmail['To'] = 'khan.ariz2341997@gmail.com'
		sendEmail.set_content(message)
		# print(os.environ.get('EMAIL_HOST_PASSWORD'))
		with smtplib.SMTP_SSL('smtp.gmail.com',465) as smtp:
			smtp.login("khan.ariz2341997@gmail.com", "afrnafrnd4u23746")
			smtp.send_message(sendEmail)
		send_mail(
			'MOHAMMAD ARIZ KHAN',
			f'Thank you for contacting me {username}! I will get in touch with you shortly..',
			'THANK YOU!',
			[email],
			fail_silently = False)	
		contactInfo = ContactUsersInfo(name=username,email=email,message=message)
		contactInfo.save()
		print(contactInfo)
		messages.success(request,username)
		return redirect('contact')

	return render(request,'home.html')	

