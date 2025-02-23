!pip install google-generativeai
import google-generativeai as genai
genai.configure(api_key=AIzaSyAuHO_-ijh0XbhMmdqaz6tV7JszvwQLJfY)
model = genai.GenerativeModel(gemini-1.5-flash)
response = model.generate_content("quem é conhecido como zeus")
response.text 
