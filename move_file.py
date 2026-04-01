import os
import shutil

src = "Still 2026-01-13 220408_1.3.1.jpg"
dst = "public/hero-image.jpg"

print(f"Current working dir: {os.getcwd()}")
if os.path.exists(src):
    print(f"Found source file: {src}")
    try:
        shutil.copy2(src, dst)
        print(f"Successfully copied to {dst}")
    except Exception as e:
        print(f"Error copying file: {e}")
else:
    print(f"Source file not found: {src}")

if os.path.exists(dst):
    print(f"Verification: {dst} exists.")
else:
    print(f"Verification: {dst} does NOT exist.")
