let prodname = document.getElementById("Iname")
let prodcate = document.getElementById("Icate")
let prodprice = document.getElementById("Inum")
let proddesc = document.getElementById("Idesc")
let addprod = document.getElementById("botset")
let updateprod = document.getElementById("bot2set")



addprod.addEventListener("click" ,addproduct )

updateprod.addEventListener("click",updateproduct)

let glopalindex=0;

let mystory ;

if(localStorage.getItem("informationproduct")==null)
{
          mystory=[]
}
else
{
         mystory= JSON.parse(localStorage.getItem("informationproduct"))
         displayproducts()
}



function addproduct()
{    
      let rgx =/^[A-Z][a-z]+$/
      if(rgx.test(prodname.value))
      {
            value1=prodname.value
            value2=prodcate.value
            value3=prodprice.value
            value4=proddesc.value
          
  
            let savaproduct = { 
  
                      pname:value1,
                      pcate:value2,
                      pprice:value3,
                      pdesc:value4,
  
                      
                     
            }
  
            mystory.push(savaproduct)
  
            localStorage.setItem("informationproduct" ,JSON.stringify(mystory))
            displayproducts()
            clareinputs();
            console.log(mystory)
      }
      else
      {
            document.getElementById("alrt").innerHTML=`<p class="text-danger p-3">Enter First latar cap</p5>`
      }
         
}

function clareinputs()
{
          prodname.value=""
          prodcate.value=""
          prodprice.value=""
          proddesc.value=""
}

function displayproducts()
{
          let container = ``

          for( let i=0; i<mystory.length;i++)
          {
                    container +=` <tr>
                    <td> ${i+1}</td>
                    <td> ${mystory[i].pname}</td>   
                    <td> ${mystory[i].pcate}</td>   
                    <td> ${mystory[i].pprice}</td>
                    <td> ${mystory[i].pdesc}</td> 
                    <td> <button class="btn btn-danger" id="delpro" onclick=" deletproducts(${i})"> Delete</button> </td>
                    <td> <button class="btn btn-success" id="delpro" onclick=" updateproducts(${i})" id="uppro"> Update</button> </td>              
                    </tr> `
          }

          document.getElementById("tbody").innerHTML=container
}

function deletproducts(index)
{
          mystory.splice(index,1)
          displayproducts();
          localStorage.setItem("informationproduct" ,JSON.stringify(mystory))


}

function updateproducts(upindex)
{
          glopalindex=upindex

          prodname.value=mystory[upindex].pname
          prodcate.value=mystory[upindex].pcate
          prodprice.value=mystory[upindex].pprice
          proddesc.value=mystory[upindex].pdesc

          document.getElementById("botset").style.display="none"
          document.getElementById("bot2set").classList.remove("d-none")


}

function updateproduct()
{
         mystory[glopalindex].pname=prodname.value
         mystory[glopalindex].pcate=prodcate.value
         mystory[glopalindex].pprice=prodprice.value
         mystory[glopalindex].pdesc=proddesc.value

         document.getElementById("botset").style.display="inline-block"
         document.getElementById("bot2set").classList.add("d-none")

         displayproducts();
         clareinputs();
         localStorage.setItem("informationproduct" ,JSON.stringify(mystory));

}

function searchproduct(userword)
{
          let container =``

         for(let i=0;i<mystory.length;i++)
         {
               if((mystory[i].pname).toLowerCase().includes(userword.toLowerCase()))
               {
                    container +=` <tr>
                    <td> ${i}</td>
                    <td> ${mystory[i].pname}</td>   
                    <td> ${mystory[i].pcate}</td>   
                    <td> ${mystory[i].pprice}</td>
                    <td> ${mystory[i].pdesc}</td> 
                    <td> <button class="btn btn-danger" id="delpro" onclick=" deletproducts(${i})"> Delete</button> </td>
                    <td> <button class="btn btn-success" id="delpro" onclick=" updateproducts(${i})" id="uppro"> Update</button> </td>              
                    </tr> `
               }    

         }
         document.getElementById("tbody").innerHTML=container

}