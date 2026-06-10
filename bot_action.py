#!/usr/bin/env python3
import os
import time

# CONFIGURATION
MALLET_BTN = (818, 2212)
BRIDGE_BTN = (537, 2107)
ACTION_BTN = (605, 1786)
HOME_BTN = (509, 2148)
FOLLOW_UP_BTN = (546, 748)

# List of all X coordinates we have tried
RED_X_LIST = [
    (989, 542),
    (1007, 347),
    (996, 541),
    (996, 336),
    (972, 381),
    (867, 478)
]

def adb_action(coords, duration=500):
    os.system(f"adb shell input swipe {coords[0]} {coords[1]} {coords[0]} {coords[1]} {duration}")
    print(f"Clicked at {coords}")

def main():
    print("Bot started. Press Ctrl+C to stop.")
    try:
        while True:
            start_time = time.time()
            fails = 0
            
            # Bridge Loop
            while time.time() - start_time < 120:
                adb_action(BRIDGE_BTN, 500)
                fails += 1
                
                # Check for X after 10 attempts
                if fails >= 10:
                    print("--- Trying all X coordinates ---")
                    for x_coord in RED_X_LIST:
                        adb_action(x_coord, 500)
                        time.sleep(0.5) # Quick pause between tries
                    
                    print("--- Trying follow-up sequence ---")
                    for _ in range(3):
                        adb_action(FOLLOW_UP_BTN, 500)
                        time.sleep(0.5)
                        
                    time.sleep(1)
                    fails = 0     
                
                time.sleep(1.0)
            
            # Post-bridge sequence
            print("--- Running post-bridge sequence ---")
            adb_action(MALLET_BTN, 500)
            time.sleep(1)
            for _ in range(7):
                adb_action(ACTION_BTN, 500)
                time.sleep(0.5)
            adb_action(HOME_BTN, 500)
            time.sleep(2)
            
    except KeyboardInterrupt:
        print("\nBot stopped.")

if __name__ == "__main__":
    main()
