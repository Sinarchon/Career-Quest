import os, smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
load_dotenv()

TO = "wahaj270984@gmail.com"

msg = EmailMessage()
msg["From"] = os.environ["SMTP_FROM"]
msg["To"] = TO
msg["Subject"] = "CareerQuest SMTP test"
msg.set_content("It works.")

with smtplib.SMTP(os.environ["SMTP_HOST"], int(os.environ["SMTP_PORT"])) as s:
    s.starttls()
    s.login(os.environ["SMTP_USER"], os.environ["SMTP_PASS"])
    s.send_message(msg)
print("SENT")