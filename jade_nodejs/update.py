import requests

url = 'http://192.168.18.5:3080/update_user_python'

payload = {'firstname': 'jaz', 'id': '1'}

r = requests.post(url, data=payload)
print(r.text)
