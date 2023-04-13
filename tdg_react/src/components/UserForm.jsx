import React from "react";
import { useFormik } from "formik";
import { TextField, Select, MenuItem, InputLabel, Button, FormControl, FormHelperText } from "@mui/material";
import * as Yup from 'yup';
import "./UserForm.css"

const UserForm = () => {

    const formik = useFormik({
        initialValues:{
            firstname: "",
            lastname: "",
            email:"",
            phone:"",
            birthdate: "",
            gender: null,
            country: "",
            nickname: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Debes ingresar un nombre."),
            lastname: Yup.string().required("Debes ingresar un apellido."),
            email: Yup.string().email().required("Debes ingresar un email."),
            phone: Yup.number().required("Debes ingresar un telefono."),
            birthdate: Yup.string().required("Debes ingresar un fecha."),
            gender: Yup.string().required("Debes seleccionar un genero."),
            country: Yup.string().required("Debes ingresar un pais."),
            nickname: Yup.string().required("Debes ingresar un apodo."),
        }),
        onSubmit:(data) => {
            console.log(data);
        },
    })

    return (
    <div className="body">
        <h2>Formulario de Registro</h2>
        
        <form className="form-conteiner" onSubmit={formik.handleSubmit} >
            <TextField 
                name="firstname" 
                type="text" 
                label="Nombre" 
                variant="standard"
                value={formik.values.firstname}
                onChange={formik.handleChange} 
                error={formik.errors.firstname} 
                helperText={formik.errors.firstname}
            />
            
            <TextField 
                name="lastname" 
                type="text" 
                label="Apellido" 
                variant="standard" 
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.errors.lastname} 
                helperText={formik.errors.lastname}
            />       
            <TextField 
                name="email"
                type="text"
                label="Email"
                variant="standard" 
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email} 
                helperText={formik.errors.email}
            />    
            <TextField 
                name="phone" 
                type="text" 
                label="Telefono" 
                variant="standard" 
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.errors.phone} 
                helperText={formik.errors.phone}
            /> 
            <TextField 
                name="birthdate" 
                type="text" 
                label="Fecha de nacimiento" 
                variant="standard" 
                value={formik.values.birthdate}
                onChange={formik.handleChange}
                error={formik.errors.birthdate} 
                helperText={formik.errors.birthdate}
            />
            <FormControl 
                variant="standard" 
                sx={{ m: 1, minWidth: 120 }}
                error={formik.errors.gender} 
                helperText={formik.errors.gender}
            >
                <InputLabel id="gender" >Genero</InputLabel>
                <Select
                    name="gender" 
                    labelId="gender"
                    onChange={ (e) => {
                        formik.setFieldValue("gender", e.target.value)
                    }}
                >
                    <MenuItem value={0} >Hombre</MenuItem>
                    <MenuItem value={1} >Mujer</MenuItem>
                    <MenuItem  value={2} >No Binario</MenuItem>
                </Select>
                <FormHelperText>{formik.errors.gender}</FormHelperText>
            </FormControl>
            <TextField 
                name="country" 
                type="text" 
                label="Pais" 
                variant="standard" 
                value={formik.values.country}
                onChange={formik.handleChange}
                error={formik.errors.country} 
                helperText={formik.errors.country}
            />
            <TextField 
                name="nickname" 
                type="text" 
                label="Apodo" 
                variant="standard" 
                value={formik.values.nickname}
                onChange={formik.handleChange}
                error={formik.errors.nickname} 
                helperText={formik.errors.nickname}
            />

            <FormControl 
                variant="standard" 
                sx={{ m: 1, minWidth: 120 }}
                error={formik.errors.gender} 
                helperText={formik.errors.gender}
            >
                <InputLabel id="gender" >Rol</InputLabel>
                <Select
                    name="gender" 
                    labelId="gender"
                    onChange={ (e) => {
                        formik.setFieldValue("gender", e.target.value)
                    }}
                >
                    <MenuItem value={0} >Developer</MenuItem>
                    <MenuItem value={1} >Recruiter</MenuItem>
                    <MenuItem  value={2} >Tech Leader</MenuItem>
                    <MenuItem  value={3} >Derv Box</MenuItem>
                </Select>
                <FormHelperText>{formik.errors.gender}</FormHelperText>
            </FormControl>
                   
            <Button type="submit" variant="contained">Registrarme</Button>
        </form>
    </div>
    ) 
        
}

export default UserForm;