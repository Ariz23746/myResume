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

# if request.method == 'POST':
# 		senders_name = request.POST['senders-name']
# 		senders_email = request.POST['senders-email']
# 		senders_message = request.POST['senders-message']
# 		msg = EmailMessage()
# 		msg['Subject'] = senders_email
# 		msg['From'] = senders_email
# 		msg['To'] = 'sims.kuwait@gmail.com'
# 		msg.set_content(senders_message)
# 		with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
# 			smtp.login(os.environ.get("EMAIL_USER"),os.environ.get("EMAIL_PASS"))
# 			smtp.send_message(msg)
# 		send_mail(
# 			'SIMS',
# 			f'Thank you for contacting us {senders_name}! We will get back to you shortly..',
# 			'THANK YOU!',
# 			[senders_email],
# 			fail_silently = False)
# 		# print(senders_name)
# 		contact = ContactForm(email = senders_email , msg = senders_message , name = senders_name)
# 		contact.save()
# 		messages.success(request,''.join(senders_name))
# 		return redirect('contactus')

def Contact(request):

	if(request.method == "POST"):
		username = request.POST['username']
		email = request.POST['email']
		message = request.POST['message']

		sendEmail = EmailMessage()
		sendEmail['Subject'] = "Replying on contacting"
		sendEmail['From'] = email
		sendEmail['To'] = 'khan.ariz2341997@gmail.com'
		sendEmail.set_content(message)
		print(os.environ.get('EMAIL_HOST_PASSWORD'))
		with smtplib.SMTP_SSL('smtp.gmail.com',465) as smtp:
			smtp.login("khan.ariz2341997@gmail.com", os.environ.get("EMAIL_HOST_PASSWORD"))
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

