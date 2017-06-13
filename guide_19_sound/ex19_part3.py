import wave
import struct
import sys
from struct import pack
import math

def copy(data):
    output = []
    for index,value in enumerate(data):
        output.append(value)
    return output

def main(argv):
    stream = wave.open(argv[1], "rb")

    sample_rate = stream.getframerate()
    num_frames = stream.getnframes()

    raw_data = stream.readframes( num_frames )
    stream.close()

    data = struct.unpack("%dh" % num_frames, raw_data) # "B" para ficheiros 8bits
    
    # Aplica efeito sobre data, para output_data
    i = 2
    output_data = []
    while i < len(argv):
        if argv[i] == "copy":
            output_data = copy(data)
        elif argv[i] == "foo":
            param = int(argv[i + 1])
            output_data = foo(data, param)
            i += 1
        # Outros filtros
        elif argv[i] == "reverse":
            output_data = reverse(data)
        elif argv[i] == "volume":
            i += 1 
            output_data = volume(data, int(argv[i])) 
        #elif argv[i] == "normalize": 
        #    output_data = normalize(data)
        #elif argv[i] == "fade-in"
        #    output_data = fadeIn(data, sampleRate, duration)
        i += 1

    wvData = []
    for v in output_data:
        wvData += pack("h", int(v))

    stream = wave.open("out-" + argv[1], "wb")
    stream.setnchannels(1)
    stream.setsampwidth(2)
    stream.setframerate(sample_rate)
    stream.setnframes(len(wvData))
    stream.writeframes(bytearray(wvData))
    stream.close()

def volume(data, value):
    output = []
    for index,value in enumerate(data):
        output.append(value)
    return output

#def normalize(data):

def fadeIn(data, sampleRate, duration):
      

if len(sys.argv) < 3:
    print("Usage: %s wave-file filter1 <params> filter2 <params> ..." % sys.argv[0])
else:
    main(sys.argv)