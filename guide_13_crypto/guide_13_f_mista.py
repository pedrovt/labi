# encoding=utf-8
# based on guide_13_d

from Crypto.Cipher import AES
from Crypto.PublicKey import RSA
import os

# Generates a key to encrypt
random_key = os.urandom(16)

# That key is encrypted with the user provided key
user_key = str(raw_input("Please enter your key: "))

key_cipher = AES.new(user_key)
key = key_cipher.encrypt(random_key)

# -----------------------------------------------------------------
# Reads file to encrypt
# path = "C:\\Users\\Pedro\\Desktop\\Comoutilizar.txt"
path = str(raw_input("Please enter the name of the file you want to encrypt: "))
infile = open(path, "rb")

# Encrypts file
cipher = AES.new(key)
buffer = infile.read(512)

while len(buffer) > 0:
    cryptogram = cipher.encrypt(buffer)
    #to print to a file "outfile" use
    #outfile.write(cipher.encrypt(buffer))
    buffer = infile.read(512)

infile.close()

# Prints cryptogram
print "Cryptogram from file " + path + "\n\n" + cryptogram

# -----------------------------------------------------------------
# Decrypts file and prints result
decipher = AES.new(key)
decrypted = decipher.decrypt(cryptogram)
print "\n--------------------------------------\nDecrypted file: \n\n" + decrypted