import re
import os

path = 'HTML_Files'
#sitelist = open('sitelist', 'a')
for filename in os.listdir(path):
    variname = re.sub('.html', '', filename)
    #sitelist.write(variname + '\n')
    fileread = open('HTML_Files/' + filename, "r")
    content = fileread.read()
    content = re.sub('<!DOCTYPE html>', 'export const ' + variname + '= ` <!DOCTYPE html>', content)
    content = re.sub('</html>', '</html> `;', content)
    fileread.close()
    filewrite = open('JS_Files/' + variname+'.js', 'w')
    filewrite.write(content)
    filewrite.close()
sitelist.close()

