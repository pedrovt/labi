from PIL import Image
import sys
import os

def main(filePath):
    img = Image.open(filePath)

    fileName = os.path.basename(filePath).split(".")[0]
    fileExtension = filePath.split(".")[-1]
    fileFolder = filePath.split(".")[0] + "/"

    if not (os.path.exists(fileFolder)):  # creates dir if it doesn't exist
        os.makedirs(fileFolder)

    # newFilePath = (original file name - extension)_s_fileNameSuffix.(original file name extension)
    formats = ["PNG", "JPEG", "TIFF", "BMP"]

    for j in formats:
        if (j == "JPEG"):
            for i in [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]:
                newFilePath = fileFolder + fileName + "_compressFact_" + str(i) + "." + j
                img.save(newFilePath, j, quality=i)
                print(str(i) + ", " + j + ": File saved as " + newFilePath)
        elif (j == "PNG"):
            for i in [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]:
                newFilePath = fileFolder + fileName + "_compressFact_" + str(i) + "." + j
                img.save(newFilePath, j, compress_level=i)
                print(str(i) + ", " + j + ": File saved as " + newFilePath)
        else:
            newFilePath = fileFolder + fileName + "." + j
            img.save(newFilePath, j)

main(sys.argv[1])