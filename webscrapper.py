
#Importing libraries
from selenium import webdriver
from bs4 import BeautifulSoup
#Creating a webdriver of Chrome using selenium
driver= webdriver.Chrome('chromedriver.exe')
#Target website url
url='https://internshala.com/internships/data%20science-internship-in-india'
#Loading the target website on webdriver
driver.get(url)
#Getting html soup of target website
soup=BeautifulSoup(driver.page_source,'lxml')
"""Scrapping 1) Job profile
             2) Company name
             3) Location
             4) Staring from
             5) Months of internship
             6) Stipend
             7) Job posting date
             8) Last date of applying
             9) Link for specific internship respectively """
for ne in soup.find_all('div',{'class':'container-fluid individual_internship '}):
    for a in ne.find_all('a'):
        print(a.text.strip() if a.text.strip() !='View Details' else ''  )

    print(ne.table.tbody.text.strip())
    print('www.internshala.com'+ne.a['href'])
    print('*'*20)
    print('\n')