class Device {
  constructor(model, seri){
    this.model = model;
    this.seri = seri;
  }
}
const myDevice = new Device('Xiaomi','Note 11')
const yourDevice = new Device('iPhone','11 Pro')
console.log(myDevice, yourDevice)