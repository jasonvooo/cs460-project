import re
import os


#remove braces, changes dashes to underscores
path = 'HTML_Files'
sitelist = open('index.js', 'a')
sitelist2 = open('sitelist.txt', 'a')
for filename in os.listdir(path):
    variname = re.sub('.html', '', filename)
    variname = re.sub('\(|\)', '', variname)
    variname = re.sub('-', '_', variname)
    variname = re.sub('\.', '', variname)
    sitelist.write('export {' + variname + '} from \'./'+ variname + '.js\';\n')
    sitelist2.write('\'' + variname + '\', ')
    fileread = open('HTML_Files/' + filename, "r")
    content = fileread.read()
    content = re.sub(r'\\', r'\\\\', content)
    content = re.sub('`', r'\\`', content)
    content = re.sub('<!DOCTYPE html>', 'export const ' + variname + '= ` <!DOCTYPE html>', content)
    content = re.sub('</html>', '</html> `;', content)
    fileread.close()
    filewrite = open('JS_Files/' + variname+'.js', 'w')
    filewrite.write(content)
    filewrite.close()
sitelist.close()

