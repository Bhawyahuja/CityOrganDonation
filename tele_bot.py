import requests
import json
import time
import os
import emaildata
token = "1494739747:AAENSY5ank9n97OuD3Yv8QqdaleG7nHZ7CQ"
URL = "https://api.telegram.org/bot{}/".format(token)

def get_url(url):
    response = requests.get(url)
    content = response.content.decode("utf-8")
    return content

def get_json_from_url(url):
    content = get_url(url)
    js = json.loads(content)
    return js

def get_updates():
    url = URL+"getUpdates"
    js = get_json_from_url(url)
    return js

def get_last_chat_id_and_text(updates):
    num_updates = len(updates["result"])
    last_update = num_updates - 1
    text = updates["result"][last_update]["message"]["text"]
    chat_id = updates["result"][last_update]["message"]["chat"]["id"]
    return (chat_id, text)

def send_message(chat_id, text):
    url = URL + "sendMessage?chat_id={}&text={}".format(chat_id, text)
    print(url)
    print("sending message")
    get_url(url)

def main():
    last = (None,None)
    chat_id, text = get_last_chat_id_and_text(get_updates()) #last msg and id
    #msg = input("Enter msg to send....\n") #msg to send
    msg = emaildata.main()
    send_message(chat_id,msg)
    last = (chat_id,text)
    time.sleep(0.5)

if __name__ == "__main__":
    main()