//SECTION - Packages Array

const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]
//!SECTION - Functions
function isHeavy() {
  // let template = ''
  let packageWeight = packages.filter(p => p.weight > 5)
  drawPackages(packageWeight)
}
function isFragile() {
  let packageFragile = packages.filter(p => p.isFragile == true)
  drawPackages(packageFragile)
}
function isPriority() {
  let packagePriority = packages.filter(p => p.priorityLevel == 'express')
  drawPackages(packagePriority)
}

function drawPackages(packages) {
  let template = ''
  packages.forEach(p => template += `
    <div class="col-3 card bg-primary text-light">To: ${p.to} </div>
    <div class="col-3">Priority Level: ${p.priorityLevel} </div>
    <div class="col-3">Fragile? ${p.isFragile} </div>
    <div class="col-3">Weight: ${p.weight} </div>
    <div class="col-3">Tracking Number: ${p.trackingNumber} </div>
  `)
  document.getElementById('packages').innerHTML = template
}




drawPackages(packages)
