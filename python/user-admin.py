#program sederhana

username = input(" masukan username anda: ")
password = input(" masukan password anda: ")
str(username)
str(password)

if username == "admin" and password == "admin123" :
    print(" selamat datang admin! ");
else :
    print(" selamat datang user! ")

question = input("apakah anda ingin makan: ")

if question == "iya" : 
    print(" baiklah! ")
    
else: 
    print(" oke ")
    
item = input(" pilih makanan yg ingin anda makan: contoh(nasi goreng, ayam goreng, roti tawar): ")

if item == "nasi goreng" :
    print(" wah, anda mau nasi goreng? baiklah ")
    
elif item == "ayam goreng" :
        print(" wah, anda tau juga yang enak xixi ")
        
elif item == "roti tawar" :
        print(" baiklah, anda ingin roti tawar ")
        
        