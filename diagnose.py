import os
import shutil

logging_file = "diagnostic_log.txt"

with open(logging_file, "w") as f:
    f.write(f"CWD: {os.getcwd()}\n")
    files = os.listdir(".")
    f.write(f"Root files: {files}\n")
    
    src = "Still 2026-01-13 220408_1.3.1.jpg"
    if src in files:
        f.write("Source file FOUND.\n")
        try:
            shutil.copy(src, "public/hero-image.jpg")
            f.write("Copy attempted.\n")
        except Exception as e:
            f.write(f"Copy FAILED: {e}\n")
    else:
        f.write("Source file NOT FOUND.\n")
        
    if os.path.exists("public/hero-image.jpg"):
        f.write("Dest file EXISTS.\n")
    else:
        f.write("Dest file MISSING.\n")
