window.onload = function(){
   let collection = []
 
   collection.push({code:1,type:"Apple", weight:20, price:2, color:"red"})
   collection.push({code:2,type:"Banana", weight:21, price:3, color:"yellow"})
   collection.push({code:3,type:"Strawberry", weight:22, price:1, color:"pink"})
   collection.push({code:4,type:"Blueberry", weight:23, price:0.5, color:"purple"})
   collection.push({code:5,type:"Orange", weight:24, price:2, color:"orange"})
   collection.push({code:6,type:"Plum", weight:25, price:2.5, color:"purple"})
   collection.push({code:7,type:"Papaya", weight:26, price:3.5, color:"yellow"})
   collection.push({code:8,type:"Kiwi", weight:27, price:4, color:"green"})
   collection.push({code:9,type:"Pineapple", weight:28, price:5, color:"yellow"})
   collection.push({code:10,type:"Lemon", weight:29, price:5.5, color:"yellow"})
   collection.push({code:11,type:"Raspberry", weight:30, price:6, color:"pink"})
   collection.push({code:12,type:"Lime", weight:31, price:6.5, color:"green"})
   collection.push({code:13,type:"Grapefruit", weight:32, price:7, color:"orange"})
   collection.push({code:14,type:"Mango", weight:33, price:7.5, color:"yellow"})
   collection.push({code:15,type:"Cherry", weight:34, price:8, color:"purple"})
   collection.push({code:16,type:"Watermelon", weight:35, price:8.5, color:"green"})
   collection.push({code:17,type:"Nectarine", weight:36, price:9, color:"purple"})
   collection.push({code:18,type:"Grape", weight:37, price:9.5, color:"purple"})
   collection.push({code:19,type:"Pomegranate", weight:38, price:10, color:"pink"})
   collection.push({code:20,type:"Lychee", weight:39, price:10.5, color:"pink"})
   collection.push({code:21,type:"Fig", weight:35, price:11, color:"purple"})
   collection.push({code:22,type:"Peach", weight:40, price:12, color:"pink"})
   collection.push({code:23,type:"Dragonfruit", weight:41, price:11.5, color:"purple"})
   collection.push({code:24,type:"Pear", weight:42, price:12.5, color:"yellow"})
   collection.push({code:25,type:"Coconut", weight:43, price:13, color:"brown"})
   collection.push({code:26,type:"Tomato", weight:44, price:14, color:"red"})
   collection.push({code:27,type:"Cucumber", weight:45, price:13.5, color:"green"})
   collection.push({code:28,type:"Rockmelon", weight:46, price:14.5, color:"yellow"})
   collection.push({code:29,type:"Sapota", weight:47, price:15, color:"brown"})
   collection.push({code:30,type:"Olive", weight:15, price:15.5, color:"brown"})
   collection.push({code:31,type:"Blackcurrant", weight:10, price:16, color:"brown"})
   collection.push({code:32,type:"Cherimoya", weight:49, price:16.5, color:"green"})
   collection.push({code:33,type:"Madarine", weight:11, price:17, color:"orange"})
   collection.push({code:34,type:"Durian", weight:45, price:17.5, color:"yellow"})
   collection.push({code:35,type:"Elderberries", weight:22, price:18, color:"brown"})
   collection.push({code:36,type:"Gooseberries", weight:35, price:18.5, color:"green"})
   collection.push({code:37,type:"Jujube Fruit", weight:30, price:19, color:"brown"})
   collection.push({code:38,type:"Kumquat", weight:12, price:19.5, color:"orange"})
   collection.push({code:39,type:"Loquat", weight:10, price:20, color:"orange"})
   collection.push({code:40,type:"Mamgosteen", weight:17, price:21, color:"pink"})
   collection.push({code:41,type:"Rhubard", weight:22, price:22, color:"pink"})

   document.getElementById("but").onclick = function(){
       let upper = document.getElementById("Upper").value;
       let lower = document.getElementById("Lower").value;

       let color = document.getElementById("Color").value;
       let tbl = document.getElementById("tbl");
       let child = tbl.firstChild
           if (child != null)
               tbl.removeChild(child)
             
       let table = document.createElement("table");
       table.border='1';
       let tableBody = document.createElement('tbody');
       table.appendChild(tableBody);
       collection.forEach(function(elem){
           if (elem.price >= lower && elem.price <= upper && elem.color == color)
           {
              let tr = document.createElement('tr');
              tableBody.appendChild(tr);
              let td = document.createElement('td');              
              td.appendChild(document.createTextNode(elem.type));
              tr.appendChild(td);   
           }
       })
      
       tbl.appendChild(table);
   }
      document.getElementById("rst").onclick = function(){
         document.getElementById("Upper").value = "";
         document.getElementById("Lower").value = "";
         document.getElementById("Color").value = "";
       
       
   }
}