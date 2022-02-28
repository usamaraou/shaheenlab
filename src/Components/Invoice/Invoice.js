import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
import React, { useState } from "react";
import './Invoice.css'
import DatePicker from './DatePicker'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { IMaskInput } from 'react-imask';
import MaterialTable from "material-table";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="#0000- 0000000-0"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Invoice() {
  const { useState } = React;
  const [columns, setColumns] = useState([
      
      { title: "Client Name", field: "Name" },
      { title: "Price", field: "price", }

  ]);

  const [data, setData] = useState([
    {  Name: "rehman",price: "100"},
  ]);

  let name, value;
  const [values, setValues] = React.useState({
    customer:'',
    textmask: '',
    Name: '',
    passport: '',
    test: '',
    price:'',
    age:'',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setData({
      ...values,[name]:value
    })
   
  };
    return (
        <>
              <Grid item xs={12} md={12}>
          <Grid align="center">
            <h2>Add Test</h2>
          </Grid>
          <Grid>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
               <Box sx={{
                  margin: 2,
                  display: 'inline-flex',
          flexDirection: 'row', borderRadius: 1,}} >

<label className="p-3">Customer </label>
              <select className="form-select" aria-label="Default select example"
               value={values.customer}
               onChange={handleChange}
               name="test">
  <option selected > Select Customer</option>
  <option  value="">Customer 1</option>
  <option value="">Customer 2</option>
  <option value="">Customer 3</option>
</select>

      </Box>

              <Box>
                <Box sx={{
                  margin: 2,
                  display: 'inline-flex',
          flexDirection: 'row', borderRadius: 1}} >
                <FormControl variant="standard" >
        <InputLabel htmlFor="outlined-size-normal1">Client Name</InputLabel>
        <Input
          value={values.Name}
          onChange={handleChange}
          name="Name"
          id="outlined-size-normal1"
                    />
      </FormControl>
      </Box>
      <Box   sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}> 

                  <FormControl variant="standard">
        <InputLabel htmlFor="outlined-size-normal1">CNIC</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="outlined-size-normal1"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
      </Box>
       
                </Box>
              <Box>
              <Box sx={{
                  margin: 2,
                  display: 'inline-flex',
          flexDirection: 'row', borderRadius: 1}} >
                <FormControl variant="standard" >
        <InputLabel htmlFor="outlined-size-normal1">Passport</InputLabel>
        <Input
          value={values.passport}
          onChange={handleChange}
          name="passport"
          id="outlined-size-normal1"
                    />
      </FormControl>
      </Box>
                <DatePicker />
              </Box>
              <Box>
              <Box sx={{
                  margin: 2,
                  display: 'inline-flex',
          flexDirection: 'row', borderRadius: 1,width:'200px',}} >
              <select className="form-select" aria-label="Default select example"
               value={values.test}
               onChange={handleChange}
               name="test">
  <option selected > Select Test</option>
  <option  value="100">Test 1</option>
  <option value="200">Test 2</option>
  <option value="300">Test 3</option>
</select>
      </Box>  <Box sx={{
                  margin: 2,
                  display: 'inline-flex',
          flexDirection: 'row', borderRadius: 1}} >
                <FormControl variant="standard" >
        <InputLabel htmlFor="outlined-size-normal1">{values.test}</InputLabel>
        <Input
          value={values.price}
          onChange={handleChange}
          name="price"
          id="outlined-size-normal1"
                    />
      </FormControl>
      </Box>
              </Box>
              <Box>
                
                <Button
                  variant="contained"
  onClick={() => {
    alert('clicked');
    console.log('clicked');
    // console.log(values);
    console.log(data);
  }}
>
 Add
</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
        <Grid align="center">
            <h2>Table</h2>
          </Grid>
          <Box sx={{ width: "100%" }}>
                

                <MaterialTable
                     title="Editable Preview"
                columns={columns}
                    data={data}
                    options={{
      actionsColumnIndex: -1, addRowPosition: "first",search:false
    }}

/>
             
            </Box>
        </Grid>
        </>
    );
}