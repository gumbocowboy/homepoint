import nmap
nm = nmap.PortScanner()
import config

def getDevices():
    # nm.scan('127.168.10.0/24')
    test_scanner = nm.scan(hosts='192.168.10.0/24', arguments='-sn')
    devices = 0
    # Prints number of devices connected to network.
    
    for host in nm.all_hosts():
        devices += 1

    return devices
# Gets an array of all mac addresses on the local network
def getMacs():

    macs = []

    for host in nm.all_hosts():
            if 'mac' in nm[host]['addresses']:
                macs.append(nm[host]['addresses']['mac'])
    return macs
    
# Compares captured mac addresses against an array of macs from trusted devices
def knownDevices():
    known = config.knownDevices

    macs = getMacs()
    matchedDevices = []
    for mac in macs:
        for addr in known:
            if addr.mac == mac:
                print(addr.name)
                matchedDevices.append(addr.name)

    return matchedDevices
        


