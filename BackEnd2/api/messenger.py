import asyncio
from configparser import ConfigParser
from fastapi import FastAPI, Form, status
from fastapi.responses import FileResponse, RedirectResponse
from pydantic_schemas import messenger as twilio_schema

router = FastAPI.APIRouter()
settings = twilio_schema.Settings()


@router.get('/')
async def index():
    return FileResponse('index.html')

# @router.post('/')
# async def handle_form(phone: str = Form(...)):
#     await asyncio.get_event_loop().run_in_executor(
#         None, send_sms, phone, 'Hello from FastAPI!')
#     return RedirectResponse(status_code=status.HTTP_303_SEE_OTHER) #'/success', 

# def send_sms(to_number, body):
#     client = Client(settings.twilio_account_sid, settings.twilio_auth_token)
#     return client.messages.create(from_=settings.twilio_phone_number,
#                                   to=to_number, body=body)

# @router.get('/success')
# async def success():
#     return FileResponse('success.html')
