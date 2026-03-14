from fastapi import FastAPI
from fastapi_mail import FastMail, MessageSchema
from pydantic import BaseModel
from email_config import conf

app = FastAPI()

class EmailSchema(BaseModel):
    email: str


@app.post("/forgot-password")
async def forgot_password(data: EmailSchema):

    reset_link = "http://localhost:3000/reset-password"

    message = MessageSchema(
        subject="Reset Password - AI Precision Agriculture",
        recipients=[data.email],
        body=f"""
Hello,

Click this link to reset your password:

{reset_link}

AI Precision Agriculture System
""",
        subtype="plain"
    )

    fm = FastMail(conf)
    await fm.send_message(message)

    return {"message": "Reset link sent to email"}