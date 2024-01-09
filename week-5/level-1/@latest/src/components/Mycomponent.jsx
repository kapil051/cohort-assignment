
   const outer_div_style={
         // display:"flex",
         // justifyContent: "center",
         // // alignItems: "center",
         // //   flexDirection:"coloumn",
         border:"2px solid black",
            height:"500px",
             width:"600px",
            

   }
   
   
   
   export function Mycomponent(){

        return (
             <>
                  <div id="main-dv" style={outer_div_style}>
                        <h1>Name:kapil kant</h1>
                           <h3>A TA @coding ninjas</h3>
                              <button>INTERSEST</button>
                                 <ul>
                                    <li>Coding</li>
                                    <li>Web Dev</li>
                                    <li>Open Source</li>
                                 </ul>

                         <a href="https://www.linkedin.com/in/kapil-kant-450695233/" target="_blank">Linkdin</a> <br />
                         <a href="https://twitter.com/itzKapka" target="_blank">Twitter</a>
                  </div> 
             </>
        )

   }