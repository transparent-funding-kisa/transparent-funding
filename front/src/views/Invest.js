import React from "react";
import MypageBar from "../components/commons/MypageBar"
import FundProduct from "../components/commons/ProductCard"
import { Grid} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';


function Invest(){
  
        
      
        return (
            <div>
            <MypageBar></MypageBar>
            <DialogTitle Strong >Mypage</DialogTitle>
            <Grid container spacing={3}>
            <Grid item xs={9}>
                <FundProduct ></FundProduct>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={2}>
               
    
              <DialogTitle>___ 님의 보유액은 : </DialogTitle> <br></br>
              <DialogTitle> ______point 입니다. </DialogTitle>
            </Grid>
            </Grid>
            </div>
        )
    }

export default Invest;