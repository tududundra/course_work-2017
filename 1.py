import re
def readfile (name): 
    fr = open(name,'r', encoding = 'utf-8') 
    f = fr.read()
    fr.close()
    return f
def nandsurname(st):
    names1 = []
    names = re.findall('[^А-Я][^.] ([А-Я]\. [А-Я][а-яё]+ ?)',st)
    names1 = '\n'.join(names)
    print(names1)
def namessurn(st):
    names  = re.findall('[А-Я][а-яё]+[-]?[А-Яа-яё]* [А-Я]\. [А-Я]\. ?',st)
    names0 = '\n'.join(names)
    print(names0)
    names1 = re.findall('[А-Я]\. [А-Я]\. [А-Я][а-яё]+[-]?[А-Яа-яё]* ?',st)
    names11 = '\n'.join(names1)
    print(names11)
    names2 = re.findall('([А-Я][а-яё]+ [А-Я][а-яё]+ ?)',st)
    names21 = '\n'.join(names2)
    print(names21)

def main():
    name = input('Please, give me a name of file. ')
    d = nandsurname(readfile(name))
    v = namessurn(readfile(name))
main()
