from PIL import ExifTags, Image
import sys
import os

def main(filePath, fileNameSuffix):
    img = Image.open(filePath)

    fileName = os.path.basename(filePath).split(".")[0]
    fileExtension = filePath.split(".")[-1]
    fileFolder = filePath.split(".")[0] + "/"

    if not (os.path.exists(fileFolder)):  # creates dir if it doesn't exist
        os.makedirs(fileFolder)

    width, height = img.size

    print "Largura: " + str(width)  + "px"
    print "Altura: "  + str(height) + "px"
    print "Format: "  + img.format

    # Doesn't work for GIFs
    #tags = img._getexif()
    #for k, v in tags.items():
    #    print str(ExifTags.TAGS[k]+" : "+str(v))

    for s in [0.2, 8]:
        dimensions = (int(width*s), int(height*s))

        # Different filters
        #new_img = img.resize(dimensions, Image.NEAREST)
        #new_img = img.resize(dimensions, Image.LANCZOS)
        new_img = img.resize(dimensions, Image.BILINEAR)
        #new_img = img.resize(dimensions)

        # newFilePath = (original file name - extension)_s_fileNameSuffix.(original file name extension)
        newFilePath = fileFolder + fileName + "_" + str(s) + "_" + fileNameSuffix + "." + fileExtension

        new_img.save(newFilePath)

    print("File saved as "+ newFilePath)

name = raw_input("Suffix of the name: ")
main(sys.argv[1], name)