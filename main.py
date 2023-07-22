import psutil
import requests
import time
import os
from dotenv import load_dotenv
import schedule

# Load environment variables from .env file
load_dotenv()

# URL of the server to send the POST requests
SERVER_URL = f"{os.environ.get('SERVER_URL')}/metrics"


def get_system_info():
    # CPU utilization
    cpu_percent = psutil.cpu_percent(interval=1)

    # RAM utilization
    ram = psutil.virtual_memory()
    ram_total = ram.total
    ram_used = ram.used
    ram_percent = ram.percent

    # Disk space utilization
    disk_usage = psutil.disk_usage("/")
    disk_total = disk_usage.total
    disk_used = disk_usage.used
    disk_percent = disk_usage.percent

    # Network information
    network_info = psutil.net_io_counters()
    network_bytes_sent = network_info.bytes_sent
    network_bytes_recv = network_info.bytes_recv

    # System uptime
    uptime = int(time.time() - psutil.boot_time())

    # Battery information (for laptops and mobile devices)
    battery = psutil.sensors_battery()
    battery_percent = battery.percent if battery else None

    system_info = {
        "cpu_utilization": cpu_percent,
        "ram_total": ram_total,
        "ram_used": ram_used,
        "ram_utilization": ram_percent,
        "disk_total": disk_total,
        "disk_used": disk_used,
        "disk_utilization": disk_percent,
        "network_bytes_sent": network_bytes_sent,
        "network_bytes_recv": network_bytes_recv,
        "uptime_seconds": uptime,
        "battery_percent": battery_percent,
        "authentication": os.environ.get("TOKEN"),
    }

    return system_info


def send_system_info():
    try:
        system_info = get_system_info()
        response = requests.post(SERVER_URL, json=system_info)
        if response.status_code == 200:
            print("System information sent successfully.")
        else:
            print(
                f"Failed to send system information. Status code: {response.status_code}"
            )
    except requests.exceptions.RequestException as e:
        print(f"Error sending system information: {e}")


if __name__ == "__main__":
    # Run the script every 10 minutes (600 seconds)
    schedule.every(10).minutes.do(send_system_info)

    # Keep the script running to handle scheduled tasks
    while True:
        schedule.run_pending()
        time.sleep(1)
