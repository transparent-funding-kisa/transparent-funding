import PrimarySearchAppBar from "../components/commons/Menu"
import React from "react";
import FundProduct from "../components/commons/ProductCard"
import MainPost,{mainFeaturedPost} from "../components/commons/MainPost"
import Sidebar, {ranking} from "../components/commons/Sidebar"
import { Grid} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';


const MainPage = () => {
    return (
        <>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        
        <MainPost post={mainFeaturedPost}></MainPost>
        <Grid container spacing={3}>
        <Grid item xs={9}>
            <FundProduct ></FundProduct>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2}>
            <Sidebar title={ranking.title}
              description={ranking.description}
              archives={ranking.archives}
              social={ranking.social}>
            </Sidebar>
        </Grid>
        </Grid>

        </>
    )
}

export default MainPage;