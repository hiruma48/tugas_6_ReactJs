import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import App from "./App";
import kontak from "./Page/Kontak";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";

function AppRoute(){
    return(
        <Router>
        <Routes>
            <Route path="/" exact Component={App}/> 
            <Route path="/kontak" Component={kontak}/>
            <Route path="/menu_makanan" Component={MenuMakanan}/>
            <Route path="/menu_minuman" Component={MenuMinuman}/>
        </Routes>
        </Router>
       
    )
}
// const AppRoute = () => (
//     <Router>
//         <Routes>
//         <div>
//             <Route path="/" exact component ={App}/>
//             <Route path="/kontak" component={Kontak}/>
//         </div>
//         </Routes>
        
//     </Router>
// );
export default AppRoute;