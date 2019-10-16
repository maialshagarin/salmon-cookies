"use strict"
var hour = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
function SweetShop(location,  mincustomers, maxcustomers, theAverag) {
    this.location = location;
    this.mincustomers =  mincustomers;
    this.maxcustomers = maxcustomers;
    this.theAverage = theAverag;
    this.dailySales = 0;
    this.hourlySales = [];
    this.random();
    this.hourlyDailySales();
    
}

SweetShop.prototype.random= function () {
    var range = this.maxcustomers - this.mincustomers;
    var rand = Math.random() * range + this.mincustomers;
    return Math.ceil(rand);
}
SweetShop.prototype.hourlyDailySales = function () {
    for (var i = 0; i < hour.length; i++) {
        var numOfCookies = Math.ceil(this.random() * this.theAverage);
        this.hourlySales.push(numOfCookies);
        this.dailySales += numOfCookies;
    }
}

var seattle = new SweetShop('Seattle', 23, 65, 6.3);
var tokyo = new SweetShop('Tokyo', 3, 24, 1.2);
var dobai = new SweetShop('Dubai', 11, 38, 3.7);
var paris = new SweetShop('Paris', 20, 38, 2.3);
var lima = new SweetShop('Lima', 2, 16, 4.6);

var shoplist = [seattle, tokyo, dobai, paris, lima];
// console.log(seattle);
// console.log(tokyo);
// console.log(dobai);
// console.log(paris);
// console.log(lima);
//randor shops
///table
var container = document.getElementById('shops for cookies');
var table1 = document.createElement('table1');
container.appendChild(table1);
//header row method
var headerRow = document.createElement('tr');
table1.appendChild(headerRow);
var th = document.createElement('th');
headerRow.appendChild(th);
th.textContent = 'xxx';
for (var i = 0; i < hour.length; i++) {
    var th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = hour[i];
}
var th = document.createElement('th');
headerRow.appendChild(th);
th.textContent = 'Daily Location Total';
//
for (var i = 0; i < shoplist.length; i++) {
    var currentShop=shoplist[i];
    var shoprow = document.createElement('tr');
    table1.appendChild(shoprow);
    var shopTd = document.createElement('td');
    shoprow.appendChild(shopTd);
    shopTd.textContent = currentShop.location;
   ////row data 
    for (var mai = 0; mai < hour.length; mai++) {
        var cellInput = document.createElement('td');
        shoprow.appendChild(cellInput);
        cellInput.textContent = currentShop.hourlySales[mai];
        //dataIn.textContent = 'hi'
    }
    console.log (cellInput);
    shopTd = document.createElement('td');
    shoprow.appendChild(shopTd);
    shopTd.textContent = currentShop.dailySales;
}
// //footer Row
var footerRow = document.createElement('tr');
table1.appendChild(footerRow);
var td = document.createElement('td');
footerRow.appendChild(td);
td.textContent = 'Totals';
var megaTotal = 0;

  for (var hourIndex = 0; hourIndex < hour.length; hourIndex++) {
    
    td = document.createElement('td');
    
    footerRow.appendChild(td);

    var sum = 0;

    for (var shopIndex = 0; shopIndex < shoplist.length; shopIndex++) {

      var shop = shoplist[shopIndex];
      
      sum += shop.hourlySales[hourIndex];
    }
    
    td.textContent = sum;

    megaTotal += sum;
  }

  td = document.createElement('td');
  
  footerRow.appendChild(td);
  
  td.textContent = megaTotal;


//add sum for tatal
