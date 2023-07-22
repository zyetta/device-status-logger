# System Information Reporter

This Python script collects system information and sends it as a JSON payload to a server every 10 minutes. It utilizes the `psutil` library to gather information about CPU utilization, RAM usage, disk space utilization, network data, system uptime, and battery percentage (for laptops and mobile devices).

## Prerequisites

Before running the script, ensure you have the following:

1. Python installed on your system.
2. The required Python libraries installed. You can install them using pip:

```bash
pip install psutil schedule requests python-dotenv
```

## Configuration

1. Create a `.env` file in the same directory as the script.
2. Add the necessary environment variables to the `.env` file:

```bash
SERVER_URL=<your_server_url>
TOKEN=<your_authentication_token>
```

## Usage

1. Run the script using the following command:
```
python main.py
```

The script will start collecting system information and sending it to the specified server URL via HTTP POST requests every 10 minutes. It will print the status of each request to the console.

Please make sure that the server is properly configured to handle incoming POST requests and process the system information accordingly.

## Notes

- The script fetches the CPU utilization, RAM utilization, disk utilization, network data, uptime, and battery percentage (if available) to create a JSON payload.
- The `psutil` library is used for system information retrieval.
- The `dotenv` library is used to load environment variables from the `.env` file.
- The script runs indefinitely, sending system information in regular intervals, until manually stopped.
