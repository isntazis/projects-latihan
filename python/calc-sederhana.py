#belajar coy

bil1 = input("masukan angka pertama: ")
bil2 = input("masukan angka kedua: ")
int(bil1)
int(bil2)
sum = input("pilih salah satu: +, -, x,/")

if sum == '+' :
    print("hasilnya adalah", int(bil1) + int(bil2))
    
elif sum == '-' :
    print("hasilnya adalah", int(bil1) - int(bil2))
    
elif sum == 'x' :
    print("hasilnya adalah", int(bil1) * int(bil2))
    
elif sum == '/' :
    print("hasilnya adalah", int(bil1) / int(bil2))
    
else :
    print("anda memasukan operator yang salah!")