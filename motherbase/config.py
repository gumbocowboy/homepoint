# Used for defining a trusted device.
class KnownDevice:
    name = ""
    mac = ""

# Weather API Key
owmApiKey = '7793815c309deae4ea47e3136141cf8a'

#Paths for HDD Pane
moviePath = "/media/meido/Magi/Movies"
animePath = "/media/meido/Magi/Animu"
#Creating the array for Known Devices
knownDevices = []

adamPhoneMac = KnownDevice()
adamPhoneMac.name = "Adam's Phone"
adamPhoneMac.mac = "B4:F7:A1:E8:BB:4E"
knownDevices.append(adamPhoneMac)

switchMac = KnownDevice()
switchMac.name = "Switch"
switchMac.mac =  "98:B6:E9:45:51:68"  
knownDevices.append(switchMac)
