from typing import Union
from fastapi import FastAPI, WebSocket
from openai import OpenAI

client = OpenAI(
    api_key="<DeepSeek API Key>",
    base_url="https://api.deepseek.com"
    )

app = FastAPI()

@app.get("/teste")
def read_root():
    return {"Hello": "World"}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=[
                {"role": "user", "content": data},
            ],
            stream=False
        )

        print(response.choices[0].message.content)
        await websocket.send_text(f"O texto enviado foi: {data}")