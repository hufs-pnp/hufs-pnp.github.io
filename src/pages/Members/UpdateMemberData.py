import time
import getpass
import re
import json
import tqdm
from selenium import webdriver
import chromedriver_autoinstaller
from selenium.webdriver.common.by import By


# install chromedriver
chromedriver_autoinstaller.install()

# url 
url = "https://www.notion.so/5316/7bed21e5c21e4cb0a060fb5fd588ce01?v=059d0697cb254f9aa0c16808fbfac598"

# ID, PASS WORD 입력
print("hufspnp페이지 멤버 이름 업로드를 진행합니다.")
print("Notion 이메일 주소와 패스워드를 입력해주세요. 패스워드는 입력시 보안상 터미널에서 보이지 않으니, 상관쓰시지 마시고 입력하시면 됩니다.")
EMAIL =input("EMAIL:")
PASSWORD = getpass.getpass("PASSWORD:")
print("업데이트 준비중입니다.")

# 페이지 접속
driver = webdriver.Chrome()
driver.get(url)
driver.implicitly_wait(5)
time.sleep(10)
print("페이지 접속중 입니다.")

# 아이디 입력하기
driver.find_element(By.ID,'notion-email-input-1').send_keys(EMAIL)
driver.implicitly_wait(15)
driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div/main/div/div[3]/div[1]/div[3]/form/div[3]').click()
driver.implicitly_wait(15)
print("아이디 입력중입니다.")

# 비밀번호 입력하기 
driver.find_element(By.ID,'notion-password-input-2').send_keys(PASSWORD)
driver.implicitly_wait(15)
driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div/main/div/div[3]/div[1]/div[3]/form/div[3]').click()
driver.implicitly_wait(20)
print("비밀번호 입력합니다.")
#로딩 시간동안 sleep
time.sleep(15)

# 갯수
num = driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div[1]/div[6]/div[1]/div/span[2]').text
driver.implicitly_wait(120)
num = int(num)
print("페이지에 성공적으로 접속했습니다.")

# 내용을 저장할 딕셔너리 선언
print("학회원 정보를 크롤링중입니다.")
json_array = []

for i in tqdm.tqdm(range(2,num+2)):
    inst = dict()
    element = driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div[1]/div[3]/div['+str(i)+']/div[1]/div[1]')
    element.location_once_scrolled_into_view
    driver.implicitly_wait(5)
    text = driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div[1]/div[3]/div['+str(i)+']/div[1]/div[1]').text
    driver.implicitly_wait(5)
    inst["name"] = str(re.compile('[가-힣]+').findall(text))[2:-2]
    inst["grade"]= driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div[1]/div[3]/div['+str(i)+']/div[2]/div').text
    driver.implicitly_wait(5)
    inst["classof"]= driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div[1]/div[3]/div['+str(i)+']/div[3]/div').text+"학번"
    driver.implicitly_wait(5)
    inst["github"]= driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div[1]/div[3]/div['+str(i)+']/div[4]/div[1]').text
    driver.implicitly_wait(5)
    if inst["github"] == '':
        inst["github"] = 'none'
    inst["blog"]= driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div[1]/div[3]/div['+str(i)+']/div[5]/div[1]').text
    if inst["blog"] == '':
        inst["blog"] = 'none'
    driver.implicitly_wait(5)
    inst["email"]= driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div[1]/div[3]/div['+str(i)+']/div[6]/div[1]/span').text
    if inst["email"] == '':
        inst["email"] = 'none'
    driver.implicitly_wait(5)
    inst["Team"]= driver.find_element(By.XPATH,'//*[@id="notion-app"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div[1]/div[3]/div['+str(i)+']/div[8]').text.split('\n')
    if inst["Team"] == ['']:
        inst["Team"] = ['none']
    driver.implicitly_wait(5)
    inst["profileImage"]=" "
    json_array.append(inst)

json_array.reverse()
print("총 "+str(num)+"명 학회원 정보를 크롤링하는데 성공했습니다.")

# 이전 학회원, 졸업생 명단 저장 경로
# 저장 경로가 hufs-pnp.github.io/src/pages/Members를 기준으로 되어있습니다.
# 따라서 해당 파일은 members안에 실행해야 올바르게 명단을 가져올 수 있습니다.
member_file_path = "./Students/memberData.json"
graduate_file_path = "./Graduate/graduateData.json"

# 이전 학회원 명단 json 파일 로드
print("이전 학회원 멤버 파일을 불러옵니다.")
with open(member_file_path, 'r', encoding='utf-8') as file:
    memberData = json.load(file)

# 졸업생 명단 json 파일 로드
print("졸업생 명단 파일을 불러옵니다.")
with open(graduate_file_path, 'r', encoding='utf-8') as file:
    graduateData = json.load(file)

# 새로운 4학년 명단
new_memberData_key = set()
for data in json_array:
    if data['grade'] == '4':
        new_memberData_key.add(data['name'])

# 기존에 있는 4학년 명단에서 없어진 4학년 명단 체크 => 졸업생으로 파악
new_graduate = []
print("졸업생에 추가될 명단입니다. 확인해주세요!")
print("-----------명단-----------")
for data in memberData : 
    if (data['name'] not in new_memberData_key) and data['grade']=='4':
        temp = dict()
        temp['name'], temp['classof'], temp['classofOrder'] = data['name'], data['classof'], int('20'+data['classof'][:2])
        new_graduate.append(temp)
        print("이름:",data['name'], "학번:",data['classof'])
print("--------------------------")

# 졸업생에 해당 내용 업데이트 
for new in new_graduate:
    check_update = False
    for i in range(len(graduateData)):
        if graduateData[i]['classofOrder'] == new['classofOrder']:
            graduateData.insert(i, new)
            check_update =True
            break
    if check_update == False : 
        graduateData.append(new)

print("졸업생 파일을 업데이트 완료했습니다.")
with open(graduate_file_path, 'w', encoding='utf-8') as file:
    graduateData = json.dump(graduateData, file, indent="\t", ensure_ascii=False)

print("학회원 명단 업로드가 완료되었습니다.")
with open(member_file_path, 'w', encoding='utf-8') as file:
    graduateData = json.dump(json_array, file, indent="\t", ensure_ascii=False)

driver.quit()

print("업데이트가 완료되었습니다. 홈페이지를 확인해주세요!")