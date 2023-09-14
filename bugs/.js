function getProperty(obj){
    return obj.property
}
const sample={
    property1:'prop-1',
    property2:'prop-2'
}
console.log(sample['property2'])


function calculatePower(voltage,current){
    return voltage*current
}
const power= calculatePower(50*20)
console.log(power)