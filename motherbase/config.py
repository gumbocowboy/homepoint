class KnownDevice:
    name = ""
    mac = ""


owmApiKey = '7793815c309deae4ea47e3136141cf8a'
hdd1 = "/media/meido/6B3CBD946167CA06"
hdd2 = "/media/meido/8E5E03735E0352FF"
hdd3 = "/media/meido/7F0371732772D076"
moviePath = "/media/meido/Magi/Movies"
animePath = "/media/meido/Magi/Animu"
knownDevices = []

adamPhoneMac = KnownDevice()
adamPhoneMac.name = "Adam's Phone"
adamPhoneMac.mac = "B4:F7:A1:E8:BB:4E"
knownDevices.append(adamPhoneMac)

switchMac = KnownDevice()
switchMac.name = "Switch"
switchMac.mac =  "98:B6:E9:45:51:68"  
knownDevices.append(switchMac)