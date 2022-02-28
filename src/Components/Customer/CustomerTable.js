import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MaterialTable from "material-table";
export default function CustomerTable({ row }) {
    const { useState } = React;
    
    const [columns1, setColumns1] = useState([
        { title: "ID", field: "id" },
          
          { title: "Date", field: "date" },
          { title: "Detail", field: "details" },
          { title: "Debit", field: "debit" },
          { title: "Credit", field: "credit" },
        { title: "Balance", field: "balance" },
          
    
      ]);
  
    return (
        <>
             <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                

                <MaterialTable
                     title=""
                columns={columns1}
                    data={row.name}
                    options={{
      actionsColumnIndex: -1, addRowPosition: "first",search:false
                            }}
    //                         editable={{
    //     onRowAddCancelled: rowData => console.log('Row adding cancelled'),
    //     onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
    //     onRowAdd: newRow => new Promise((resolve, reject) => {
    //         const updatedRow = [...data, { id:Math.floor(Math.random()*100),...newRow }];
    //         setTimeout(() => {
    //             setData(updatedRow);
    //         resolve();
    //         },2000)
    //         console.log(newRow);
    //     }),
    //     onRowUpdate: (newData, oldData) =>
    //         new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 const dataUpdate = [...data];
    //                 const index = oldData.tableData.id;
    //                 dataUpdate[index] = newData;
    //                 setData([...dataUpdate]);

    //                 resolve();
    //             }, 2000);
    //         }),
    // }}

/>
             
            </Box>
  </Grid>
        </>
    );
}