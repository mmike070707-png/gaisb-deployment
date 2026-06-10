import os
import time
import cv2
import numpy as np

print("[Mobile Automation Engine] Initializing custom macro sequence...")

def run_adb(command):
    stream = os.popen(f'adb {command}')
    return stream.read()

# Verify connection
devices = [line for line in run_adb('devices').split('\n')[1:] if line.strip()]
if not devices:
    print("[Error] Handset not found. Check USB Debugging.")
    exit(1)

print(f"[Success] Target device established: {devices[0].split()[0]}")

# Coordinates
BUILD_X, BUILD_Y = 549, 2163
SEQUENCE_COORDS = [(768, 2145), (109, 2135), (318, 2159), (768, 2145), (287, 1022), (537, 862), (544, 150)]

try:
    while True:
        print("\n--- Starting New Cycle ---")
        
        # 1. Tap Build
        for i in range(5):
            run_adb(f"shell input swipe {BUILD_X} {BUILD_Y} {BUILD_X} {BUILD_Y} 500")
            time.sleep(0.5)

        # 2. X Scan
        run_adb("shell screencap -p /sdcard/screen.png")
        run_adb("pull /sdcard/screen.png modules/screen.png")
        
        if os.path.exists("modules/red_x.png") and os.path.exists("modules/screen.png"):
            img = cv2.imread("modules/screen.png")
            template = cv2.imread("modules/red_x.png")
            result = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED)
            threshold = 0.8
            loc = np.where(result >= threshold)
            pts = list(zip(*loc[::-1]))
            if pts:
                run_adb(f"shell input tap {pts[0][0]} {pts[0][1]}")
                time.sleep(1)

        # 3. Sequence
        for cx, cy in SEQUENCE_COORDS:
            run_adb(f"shell input tap {cx} {cy}")
            time.sleep(1) 
        
        time.sleep(2)

except KeyboardInterrupt:
    print("\n[Status] Automation sequence terminated safely.")
