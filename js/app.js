
"use strict" ;
var hour =[ '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
// ////////// constractor-function/////////
function Shops (location , mincustomers , maxcustomers,theAverge){
  this.location =location ;
  this.mincustomers = mincustomers;
  this.maxcustomers= maxcustomers;
  this.theAverge= theAverge;
  this.dailySales=0 ;
  this.hourlySales=[];
  this.random();
  this.generateHourlySale();
  

}
// ////// random/////
Shops.prototype.random=function (){
var range = this.maxcustomers - this.mincustomers;
var rand = Math.random() * range + this.mincustomers;
return Math.ceil(rand);
}
///// hourlysales//////////
Shops.prototype.generateHourlySale=function (){
  for (var i= 0 ; i<hour.length ; i++){
    var cookiesSoldThisHour = Math.ceil(this.random() *this.theAverge);
    this.hourlySales.push(cookiesSoldThisHour);
   this.dailySales+= cookiesSoldThisHour;
  }
}

var Seattle= new Shops( 'Seattle',23,65,6.3)
var Tokyo =new Shops ('Tokyo',3,24,1.2)
var Dubai = new Shops ( 'Dubai', 11 ,38 ,3.7)
var Paris = new Shops ('paris', 20,38,2.3)
var Lima = new Shops ('Lima',2 , 16 ,4.6)
console.log('Seattle',Seattle);
console.log('Dubai',Dubai);
console.log('Tokyo',Tokyo);
console.log('Paris',Paris);
console.log('Lima',Lima);
// 
var shoplist =[ Seattle, Dubai, Tokyo,Paris,Lima]
// table//
var container = document.getElementById ('shops for cookies');
var table = document.createElement ('table');
container.appendChild(table);
///////// header raw/////////////
var headerRaw = document.createElement ('tr');
table.appendChild(headerRaw);
var th =document.createElement('th');
headerRaw.appendChild(th);
th.textContent=' xxxxxxxxxxx ';

for (var i =0 ;i <hour.length; i++  ){
  var th = document.createElement ('th');
  headerRaw.appendChild(th);
  th.textContent=hour [i];
}

///////// data raw/////////////
for ( var indexOfshop=0 ; indexOfshop<shoplist.length ; indexOfshop++){
  var shoprow = document.createElement('tr');
  table.appendChild(shoprow);
  var shopTd = document.createElement('td');
  shoprow.appendChild(shopTd);
 shopTd.textContent = shoplist [indexOfshop].location ;


 for (var i = 0 ;  i<hour.length ; i++) {
  var shoprow2 = document.createElement('tr');
  table.appendChild(shoprow2);
  var shopTd = document.createElement('td');
  shopTd.textContent = hour[i].hourlySales;
  shoprow2.appendChild(shopTd)
 }

}
/////////footer////////
var footerRow=document.createElement('tr');
table.appendChild(footerRow);
var th = document.createElement('th');
footerRow.appendChild(th);
th.textContent='Totals' 
//  for ( var i =0 ; i<hour.length ; i++){
//    shopTd.textContent = shoplist [hour].hourlySales
//  }




// var table = document.createElement('table');
// function makeHeaderRow() { //eslint-disable-line
//   var tableRow = document.createElement('tr');
//   var thElement = document.createElement('th');
//   thElement.textContent = null;
//   salmonTable.appendChild(tableRow);
//   tableRow.appendChild(thElement);
//   for (var i = 0; i < hours.length; i++) {
//     thElement = document.createElement('th');
//     thElement.textContent = hours[i];
//     tableRow.appendChild(thElement);
//     console.log(thElement)
//   }
// }


// var salmonSeattle={
//     location :'Seattle',
//     mincustomers  :23,
//     maxcustomers: 65 ,
//     theAverge : 6.3 ,
//     totalCookiesPerDay : 0 ,
//    randomNunmber : function(mincustomers , maxcustomers){
//         var range= this.maxcustomers- this.mincustomers ;
//         var rand = (Math.random()* range ) + this.mincustomers ; 
//         return Math.ceil(rand);

//    } ,
//      cookies : function (){
//     for (var i = 0 ; i<hour.length ; i++){
//      var cookiesPerHour = Math.ceil(salmonSeattle.randomNunmber(mincustomers , maxcustomers) * this.theAverge );
//           console.log (cookiesPerHour) ;
//      var result= (hour[i] + cookiesPerHour);
//      concole.log(result)
//     //this.totalCookiesPerDay +=cookiesPerHour
//         }
//        }
    
//       }*/
//      /* var Seattle = {

//       'min': 23,
//       'max': 65,
//       'Avg': 6.3,
//       avrcustmer: function () {
//           var range = this.max - this.min;
//           var rand = Math.random() * range + this.min;
//           return Math.ceil(rand);
//       }

//     };*/
//    /* var Seattle = {

//       min: 23,
//       max: 65,
//       Avg: 6.3,
//       hourlySales:[],
//       dailySales :0,
//       salesInfo :[],
//       avrcustmer: function () {
//           var range = this.max - this.min;
//           var rand = Math.random() * range + this.min;
//           return Math.ceil(rand);

//       },
//       generateHourlySale :function (){
//         for (var i= 0 ; i<hour.length ; i++){
//           var cookiesSoldThisHour = Math.ceil(this.avrcustmer()*this.Avg);
//           this.hourlySales.push(cookiesSoldThisHour);
//          this.dailySales+= cookiesSoldThisHour;
        
//       }
//       console.log (this.hourlySales)
//     },
//         render : function(){
//           var container = document.getElementById('content-area');
//           var h2 = document.createElement ('h2');
//           container.appendChild(h2);
//           h2.textContent='seattle';
//           var ul =document.createElement ('ul');
//           container.appendChild (ul);
//           for (var i=0 ;i<this.hourlySales.length;i++){
//               var li =document.createElement('li');
//               ul.appendChild(li);
//               // li.textContent='6am:16 cookies';
//               li.textContent=hour[i]+':'+Seattle.hourlySales[i];+'cookies';
//                 }
//                 var total = document.createElement('li');
//        total.textContent  ='Total: '+this.dailySales+' cookies';
//        li.appendChild(total);
//               }
                   
      
//     };
//     Seattle.generateHourlySale ();
//                Seattle.render ();


//      var Tokyo = {

//                 min: 3,
//                 max: 24,
//                 Avg: 1.2,
//                 hourlySales:[],
//                 dailySales :0,
//                 salesInfo :[],
//                 avrcustmer: function () {
//                     var range = this.max - this.min;
//                     var rand = Math.random() * range + this.min;
//                     return Math.ceil(rand);
          
//                 },
//                 generateHourlySale :function (){
//                   for (var i= 0 ; i<hour.length ; i++){
//                     var cookiesSoldThisHour = Math.ceil(this.avrcustmer()*this.Avg);
//                     this.hourlySales.push(cookiesSoldThisHour);
//                    this.dailySales+= cookiesSoldThisHour;
                  
//                 }
//                 console.log (this.hourlySales)
//               },
//                   render : function(){
//                     var container = document.getElementById('content-area');
//                     var h2 = document.createElement ('h2');
//                     container.appendChild(h2);
//                     h2.textContent='Tokyo';
//                     var ul =document.createElement ('ul');
//                     container.appendChild (ul);
//                     for (var i=0 ;i<this.hourlySales.length;i++){
//                         var li =document.createElement('li');
//                         ul.appendChild(li);
//                         // li.textContent='6am:16 cookies';
//                         li.textContent=hour[i]+':'+Tokyo.hourlySales[i];+'cookies';
//                           }
//                           var total = document.createElement('li');
//                  total.textContent  ='Total: '+this.dailySales+' cookies';
//                  li.appendChild(total);
//                         }
                             
                
//               };
//               Tokyo.generateHourlySale ();
//                          Tokyo.render ();
//    var Dubai = {

//                           min: 11,
//                           max: 38,
//                           Avg:3.7,
//                           hourlySales:[],
//                           dailySales :0,
//                           salesInfo :[],
//                           avrcustmer: function () {
//                               var range = this.max - this.min;
//                               var rand = Math.random() * range + this.min;
//                               return Math.ceil(rand);
                    
//                           },
//                           generateHourlySale :function (){
//                             for (var i= 0 ; i<hour.length ; i++){
//                               var cookiesSoldThisHour = Math.ceil(this.avrcustmer()*this.Avg);
//                               this.hourlySales.push(cookiesSoldThisHour);
//                              this.dailySales+= cookiesSoldThisHour;
                            
//                           }
//                           console.log (this.hourlySales)
//                         },
//                             render : function(){
//                               var container = document.getElementById('content-area');
//                               var h2 = document.createElement ('h2');
//                               container.appendChild(h2);
//                               h2.textContent='Dubai';
//                               var ul =document.createElement ('ul');
//                               container.appendChild (ul);
//                               for (var i=0 ;i<this.hourlySales.length;i++){
//                                   var li =document.createElement('li');
//                                   ul.appendChild(li);
//                                   // li.textContent='6am:16 cookies';
//                                   li.textContent=hour[i]+':'+Dubai.hourlySales[i];+'cookies';
//                                     }
//                                     var total = document.createElement('li');
//                            total.textContent  ='Total: '+this.dailySales+' cookies';
//                            li.appendChild(total);
//                                   }
                                       
                          
//                         };
//                         Dubai.generateHourlySale ();
//                                    Dubai.render ();
//     var Paris= {

//                                     min:20,
//                                     max: 38,
//                                     Avg: 2.3,
//                                     hourlySales:[],
//                                     dailySales :0,
//                                     salesInfo :[],
//                                     avrcustmer: function () {
//                                         var range = this.max - this.min;
//                                         var rand = Math.random() * range + this.min;
//                                         return Math.ceil(rand);
                              
//                                     },
//                                     generateHourlySale :function (){
//                                       for (var i= 0 ; i<hour.length ; i++){
//                                         var cookiesSoldThisHour = Math.ceil(this.avrcustmer()*this.Avg);
//                                         this.hourlySales.push(cookiesSoldThisHour);
//                                        this.dailySales+= cookiesSoldThisHour;
                                      
//                                     }
//                                     console.log (this.hourlySales)
//                                   },
//                                       render : function(){
//                                         var container = document.getElementById('content-area');
//                                         var h2 = document.createElement ('h2');
//                                         container.appendChild(h2);
//                                         h2.textContent='Paris';
//                                         var ul =document.createElement ('ul');
//                                         container.appendChild (ul);
//                                         for (var i=0 ;i<this.hourlySales.length;i++){
//                                             var li =document.createElement('li');
//                                             ul.appendChild(li);
//                                             // li.textContent='6am:16 cookies';
//                                             li.textContent=hour[i]+':'+Paris.hourlySales[i];+'cookies';
//                                               }
//                                               var total = document.createElement('li');
//                                      total.textContent  ='Total: '+this.dailySales+' cookies';
//                                      li.appendChild(total);
//                                             }
                                                 
                                    
//                                   };
//                                   Paris.generateHourlySale ();
//                                   Paris.render ();
//    var Lima = {

//                                               min: 2,
//                                               max: 16,
//                                               Avg: 4.6,
//                                               hourlySales:[],
//                                               dailySales :0,
//                                               salesInfo :[],
//                                               avrcustmer: function () {
//                                                   var range = this.max - this.min;
//                                                   var rand = Math.random() * range + this.min;
//                                                   return Math.ceil(rand);
                                        
//                                               },
//                                               generateHourlySale :function (){
//                                                 for (var i= 0 ; i<hour.length ; i++){
//                                                   var cookiesSoldThisHour = Math.ceil(this.avrcustmer()*this.Avg);
//                                                   this.hourlySales.push(cookiesSoldThisHour);
//                                                  this.dailySales+= cookiesSoldThisHour;
                                                
//                                               }
//                                               console.log (this.hourlySales)
//                                             },
//                                                 render : function(){
//                                                   var container = document.getElementById('content-area');
//                                                   var h2 = document.createElement ('h2');
//                                                   container.appendChild(h2);
//                                                   h2.textContent='Lima';
//                                                   var ul =document.createElement ('ul');
//                                                   container.appendChild (ul);
//                                                   for (var i=0 ;i<this.hourlySales.length;i++){
//                                                       var li =document.createElement('li');
//                                                       ul.appendChild(li);
//                                                       // li.textContent='6am:16 cookies';
//                                                       li.textContent=hour[i]+':'+Lima.hourlySales[i];+'cookies';
//                                                         }
//                                                         var total = document.createElement('li');
//                                                total.textContent  ='Total: '+this.dailySales+' cookies';
//                                                li.appendChild(total);
//                                                       }
                                                           
                                              
//                                             };
//                                             Lima.generateHourlySale ();
//                                             Lima.render ();*/
                      
                   
//    /* var Tokyo = {
//       'min': 3,
//       'max': 24,
//       'Avg': 1.2,
//       avrcustmer: function () {
//           var range = this.max - this.min;
//           var rand = Math.random() * range + this.min;
//           return Math.ceil(rand);
//       }
//     };
//     var Dubai = {
//       'min': 11,
//       'max': 38,
//       'Avg': 3.7,
//       avrcustmer: function () {
//           var range = this.max - this.min;
//           var rand = Math.random() * range + this.min;
//           return Math.ceil(rand);
//       }
//     };
//     var Paris = {
//       'min': 20,
//       'max': 38,
//       'Avg': 3.7,
//       avrcustmer: function () {
//           var range = this.max - this.min;
//           var rand = Math.random() * range + this.min;
//           return Math.ceil(rand);
//       }
//     };
//     var Lima = {
//       'min': 2,
//       'max': 16,
//       'Avg': 4.6,
//       avrcustmer: function () {
//           var range = this.max - this.min;
//           var rand = Math.random() * range + this.min;
//           return Math.ceil(rand);
//       }
//     };
//     // console.log("Seattle " + Seattle.avrcustmer());
//     // console.log("Tokyo " +  Tokyo.avrcustmer());
//     // console.log("Dubai " + Dubai.avrcustmer());
//     // console.log("Paris " + Paris.avrcustmer());
//     // console.log("Lima " + Lima.avrcustmer());
//     var each = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];//14
//     var obj = [Seattle, Tokyo, Dubai, Paris, Lima];
//     var cookiesnum = [];
//     for (var j = 0; j < obj.length; j++) {
//       for (var i = 0; i < each.length; i++) {
//           cookiesnum[i] = Math.ceil(obj[j].avrcustmer() * obj[j].Avg);
//           //  obj[j].cookNumArr=cookiesnum[i];
//       }
//     }
//     console.log(cookiesnum);
//     console.log(obj[1].avrcustmer() * obj[1].Avg);
  
