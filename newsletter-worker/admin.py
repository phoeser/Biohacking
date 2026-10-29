# Admin-Aufrufe an den Newsletter-Worker. Liest ADMIN_KEY aus der Schluesseldatei, zeigt ihn nie an.
# python3 admin.py statistik | export | versand <json-datei>
import json,os,sys,urllib.request,urllib.error
K=open(os.path.expanduser('~/mnt/Biohacking/.deploy/newsletter-admin.txt')).read().strip()
B='https://nl.biohackingkompakt.de'
def ruf(p,daten=None):
    r=urllib.request.Request(B+p,data=daten,method='POST' if daten else 'GET',headers={'Authorization':'Bearer '+K,'Content-Type':'application/json','User-Agent':'bk-admin'})
    try: return urllib.request.urlopen(r,timeout=120).read().decode()
    except urllib.error.HTTPError as e: return 'HTTP %d %s'%(e.code,e.read().decode()[:200])
a=sys.argv[1]
if a=='versand': print(ruf('/versand',open(sys.argv[2],'rb').read()))
else: print(ruf('/'+a))
