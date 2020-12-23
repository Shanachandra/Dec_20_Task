var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
request.onload=function(){
    try{
    var data=JSON.parse(this.response)  

GetCountriesFromAsia(data)
GetCountriesWith2LacPop(data)
GetSpecificDetail(data)
GetTotalPopulation(data)
GetCountryWithUSCurrency(data)
    }    
    catch(err)
    {
      alert(err.name);
      alert(err.message);
    }
    
}

function GetCountriesFromAsia(data)
{
 //Get all countries from Asia Continent/region using Filter function
 var AsiaCountry=data.filter((item,index,data)=>
 {
   if(item.region=='Asia')
         return item
 }       
 ).map((returnItem)=>{return returnItem.capital})
 console.log("Q1.Countries from Asia:  (includes empty country value satisfying the condition)")
 console.log(AsiaCountry)
}

 function GetCountriesWith2LacPop(data)
{
//Get all the countries with population of less than 2 lacs using Filter function
var PopulationCountry=data.filter((item,index,data)=>
{
    if(item.population<200000)
    {
        return item
    }
}).map((returnItem)=>{return returnItem.capital}) 
console.log("\n") 
console.log("Q2.Countries having less than 2Lac Population: (includes empty country value satisfying the condition)")
console.log(PopulationCountry)
}
function GetSpecificDetail(data)
{
 //Print the following details name, capital, flag using forEach function 
 var DetailArray=[];
    
 data.forEach((item)=>
 {
     var DetailObj={};
     DetailObj.name=item.name;
     DetailObj.capital=item.capital;
     DetailObj.flag=item.flag;
     DetailArray.push(DetailObj)       
 })
 console.log("\n")
 console.log("Q3.Get Name, Capital, Flag")
 console.log(DetailArray)
}
function GetTotalPopulation(data)
{
//Print the total population of countries using reduce function 
var totalPopulation=data.reduce((acc,item)=>
{
   return acc+item.population
},0)
console.log("\n")
console.log("Q4.Total Population")
 console.log(totalPopulation)
}
function GetCountryWithUSCurrency(data)
{
 //Print the country which use US Dollars as currency
 var USCurrencyCountry=[];
 data.map((item)=>
 {
     var newArrayData=item;
 item.currencies.filter((newitem,index,item)=>
 {
     if(newitem.symbol=='$')
     {           
        USCurrencyCountry.push(newArrayData.capital)
         
     }
 })        
 })
 console.log("\n")
 console.log("Q5.Countries having '$' as their currencies: (includes empty country value satisfying the condition)")
 console.log(USCurrencyCountry)
}
