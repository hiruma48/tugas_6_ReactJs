import React, { Component } from "react";
import Header from "./Header";
import "../Style/Kontak.css";

class kontak extends Component{
    render(){
        return(
            <div id="kontak_bg">
                <Header/>
                <div className="kontak">
                <h3>
                    jl.swadaya IV,,Pd. Ranggon, Cipayung,Kota jakarta timur,daerah
                    khusus ibukota jakarta 13860{" "}
                </h3>
                <p>081312345678</p>
                </div>
                
            </div>
        )
    }
}
export default kontak;