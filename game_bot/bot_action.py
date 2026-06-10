#!/usr/bin/env python3
import subprocess
import time

def record_and_mimic(device_id):
    print("--- RECORDING MODE ---")
    print("Perform your actions now. Press Ctrl+C to stop recording.")
    
    # Capture raw events
    cmd = ['adb', '-s', device_id, 'shell', 'getevent', '-l']
    process = subprocess.Popen(cmd, stdout=subprocess.PIPE, text=True)
    
    recorded_events = []
    try:
        for line in iter(process.stdout.readline, ''):
            # We need the device path and the 3 event values (4 total)
            parts = line.split()
            if len(parts) >= 4 and "/dev/input" in parts[0]:
                recorded_events.append(parts[0:4])
                print(f"Captured: {parts[0]} {parts[1]} {parts[2]} {parts[3]}")
    except KeyboardInterrupt:
        process.terminate()
        
    print(f"\nRecording stopped. Captured {len(recorded_events)} events.")
    print("--- MIMIC MODE (Infinite Loop) ---")
    print("Press Ctrl+C to stop the playback.")
    
    try:
        while True:
            for event in recorded_events:
                # event[0] is device path, [1] is type, [2] is code, [3] is value
                subprocess.run(['adb', '-s', device_id, 'shell', 'sendevent'] + event)
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nPlayback stopped.")

if __name__ == "__main__":
    device = "R5CX1431XSL"
    record_and_mimic(device)
