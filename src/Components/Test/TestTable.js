import React from "react";
import Box from "@mui/material/Box";

import MaterialTable from "material-table";

export default function TestTable() {
     const { useState } = React;

  const [columns, setColumns] = useState([
    { title: "ID", field: "id" },
      
      { title: "Name", field: "name" },
      { title: "Price", field: "price", }

  ]);

  const [data, setData] = useState([
    { id :1, name: "Mehmet",price: 100},
    { id :2 , name: "Zerya Betül",price: 200},
  ]);

    return (
        <>
            <Box sx={{ width: "100%" }}>
                

                <MaterialTable
                     title="Editable Preview"
                columns={columns}
                    data={data}
                    options={{
      actionsColumnIndex: -1, addRowPosition: "first",search:false
    }}
    editable={{
        onRowAddCancelled: rowData => console.log('Row adding cancelled'),
        onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
        onRowAdd: newRow => new Promise((resolve, reject) => {
            const updatedRow = [...data, { id:Math.floor(Math.random()*100),...newRow }];
            setTimeout(() => {
                setData(updatedRow);
            resolve();
            },2000)
            console.log(newRow);
        }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                }, 2000);
            }),
    }}
/>
             
            </Box>
        </>
    );
}