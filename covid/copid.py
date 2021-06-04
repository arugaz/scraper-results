import requests as r
from bs4 import BeautifulSoup as bs

try:
    url = f'https://covid19.go.id/'
    req = r.get(url)
    soup = bs(req.text, 'html.parser')
    title = soup.find_all('div', class_='col-md-3 text-color-black p-4')[1].find('h4').text
    positif = soup.find_all('div', class_='col-md-3 text-color-black p-4')[1].findAll('div')[0].find('strong').text
    sembuh = soup.find_all('div', class_='col-md-3 text-color-black p-4')[1].findAll('div')[1].find('strong').text
    meninggal = soup.find_all('div', class_='col-md-3 text-color-black p-4')[1].findAll('div')[2].find('strong').text
    lastUpdate = soup.find_all('div', class_='col-md-3 text-color-black p-4')[1].findAll('div')[3].text.replace('\n','')
    print({
        'title': title,
        'positif': positif,
        'meninggal': meninggal,
        'lastUpdate': lastUpdate
    })
except Exception as e:
    print('Error : %s' % e)
