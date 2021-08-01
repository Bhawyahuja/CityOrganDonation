import pymongo
import smtplib
from email.message import EmailMessage
import yaml

def main():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["test"]
    mycol = mydb['testrun']
    mydoc = list(mycol.find({"City":"Delhi"},{"Email":1,"Phone No":1}))
    datadb = myclient["CityOrgan"]
    coldata = datadb['details']
    orgdatadet=coldata.find_one()

    arrEmail = []
    arrPhoneNo = []
    for i in mydoc:
        arrPhoneNo.append(i["Phone No"])
        arrEmail.append(i["Email"])   
    print(arrEmail)
    print(arrPhoneNo)
    me =yaml.dump(orgdatadet)
    you="Greetings of the day!\n We hereby inform you that their are organs available in your City. Further details regarding the organs are attached to this mail.\n We hope registering with us has benefited you.\n"
    message = you + me
    def email_alert(subject, body, to):
        msg= EmailMessage()
        msg.set_content(body)
        msg['subject'] = subject
        msg['to'] = to
        user =" cityorgan@gmail.com"
        msg['from'] = user
        password = "tuzpwqucnzkwlmme"
        #subject= "Test Mail"
        #body = "Content lalalalalalalalalala"
        
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(user, password)
        server.send_message(msg)
        server.quit()
    body = message
    subject= "Organs Available in Your City"
    email_alert(subject, body, arrEmail)
    print("done")

    return message

if __name__=="__main__":
    main()