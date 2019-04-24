from bs4 import BeautifulSoup
import urllib3
import certifi
import re

url = 'United_States', 'Donald_Trump', 'Barack_Obama', 'India', 'World_War_II'
base = 'https://en.wikipedia.org/wiki/'
http = urllib3.PoolManager(cert_reqs='CERT_REQUIRED', ca_certs=certifi.where())
for theurl in url:
    response = http.request('GET', base+theurl)
    soup = BeautifulSoup(response.data, features="html.parser")
    f0 = open('HTML_Files/'+theurl+'.html', "w")
    thehtml = soup.prettify()
    thehtml =thehtml.encode('ascii', 'ignore')
    thehtml = str(thehtml)
    thehtml = re.sub('<link href="/w/','<link href="https://en.wikipedia.org/w/', thehtml)
    thehtml = re.sub('src="/w/load.php', 'src="https://en.wikipedia.org/w/load.php', thehtml)
    f0.write(thehtml)
    f0.close()




