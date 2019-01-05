import nmap
nm = nmap.PortScanner()

def getDevices():
    # nm.scan('127.168.10.0/24')
    test_scanner = nm.scan(hosts='192.168.10.0/24', arguments='-sP')
    devices = 0
    # Prints number of devices connected to network.
    for host in nm.all_hosts():
        devices += 1
    return devices
    
