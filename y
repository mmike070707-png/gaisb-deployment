cat << 'EOF' > modules/main.py
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
print("[Status] Beginning custom automation loop. Press Ctrl+C to abort.")

# Defined Coordinates
BUILD_X, BUILD_Y = 549, 2163
SEQUENCE_COORDS = [
    (768, 2145),
    (109, 2135),
    (318, 2159),
    (768, 2145),
    (287, 1022),
    (537, 862),
    (544, 150)
]

try:
    while True:
        print("\n--- Starting New Cycle ---")
        
        # 1. Hit the build button 5 times
        print("[Action] Tapping Build Button 5 times...")
        for i in range(5):
            run_adb(f"shell input swipe {BUILD_X} {BUILD_Y} {BUILD_X} {BUILD_Y} 500")
            time.sleep(0.5)

        # 2. Cycle through all the X's
        print("[Action] Scanning for 'X' close buttons...")
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
                print(f"[Action] Found an 'X' at {pts[0]}! Tapping to close.")
                run_adb(f"shell input tap {pts[0][0]} {pts[0][1]}")
                time.sleep(1)
            else:
                print("[Status] No 'X' buttons found on screen.")
        else:
            print("[Warning] 'modules/red_x.png' template missing. Skipping X scan.")

        # 3. Hit the specific coordinate sequence one at a time
        print("[Action] Executing custom coordinate sequence...")
        for cx, cy in SEQUENCE_COORDS:
            print(f" -> Tapping ({cx}, {cy})")
            run_adb(f"shell input tap {cx} {cy}")
            time.sleep(1) 
        
        print("[Status] Cycle complete. Restarting in 2 seconds...")
        time.sleep(2)

except KeyboardInterrupt:
    print("\n[Status] Automation sequence terminated safely.")
EOF
