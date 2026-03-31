from fastapi import FastAPI

app=FastAPI()

@app.get('/')
async def main():
    return {'message': 'hello world'}

# dont change the port (8000) for caddy to work