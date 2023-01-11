import React from "react";

import { gql, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

// reactstrap components

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col,
    Row,
    FormGroup,       
    Label
} from "reactstrap";


import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

const registerFormFields = {
    registerFirstName: '',
    registerLastName: '',
    registerGender: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmationPassword: '',
}

var emailRegistered;

export const Regitsercard = () => {

    const navigate = useNavigate();

    const { registerFirstName, registerLastName, registerGender, reset, registerEmail, registerPassword, registerConfirmationPassword, onInputChange } = useForm(registerFormFields);


    const REGISTER_QUERY = gql`
        mutation CreateUser($createUserInput: CreateUserInput!) {
            createUser(createUserInput: $createUserInput) {
                firstName
                email
                id
            }
        }`;

    const [registerSubmit, { loading, data }] = useMutation(REGISTER_QUERY, {
        variables: {
            createUserInput: {
                email: registerEmail || "",
                firstName: registerFirstName || "",
                lastName: registerLastName || "",
                pass: registerPassword || "",
                typeId: "GUEST",
                gender: registerGender || "",
            }
        }
    });

    if(data && data.createUser){
        emailRegistered = data.createUser.email;            
        console.log(emailRegistered);
    }

    useEffect(() => {        
        if (emailRegistered !== undefined) {
            Swal.fire({title:'Registrado', text:'Te llevaremos a la página de inicio de sesión'}).then(function(){navigate('/auth/login', {replace: true});});
        }
        emailRegistered = undefined;
        console.log(emailRegistered);        
    }, [emailRegistered]);

    if (loading) return <p>Loading ...</p>;
    return (
        <Card className="card-register" style={{ backgroundColor: 'transparent' }}>
            <br></br><br></br><br></br>
            <CardHeader>
                <h1 align="center">Registro</h1>
            </CardHeader>
            <CardBody>
                <Form type="form">
                    <Row>
                        <Col>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Nombre"
                                    type="text"
                                    name="registerFirstName"
                                    value={registerFirstName}
                                    onChange={onInputChange}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Apellido"
                                    type="text"
                                    name="registerLastName"
                                    value={registerLastName}
                                    onChange={onInputChange}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="fas fa-venus-mars" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Gender"
                                    type="text"
                                    name="registerGender"
                                    value={registerGender}
                                    onChange={onInputChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <span>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="tim-icons icon-email-85" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        type="text"
                                        name="registerEmail"
                                        value={registerEmail}
                                        onChange={onInputChange}
                                    />
                                </InputGroup>
                                <InputGroup
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="tim-icons icon-lock-circle" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Contraseña"
                                        type="text"
                                        name="registerPassword"
                                        value={registerPassword}
                                        onChange={onInputChange}
                                    />
                                </InputGroup>

                                <InputGroup
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="tim-icons icon-lock-circle" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Confirmación de contraseña"
                                        type="text"
                                        name="registerConfirmationPassword"
                                        value={registerConfirmationPassword}
                                        onChange={onInputChange}
                                    />
                                </InputGroup>

                                <FormGroup check className="text-left" align="left">
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                        />
                                        <span className="form-check-sign" />Estoy de acuerdo con los términos y condiciones{" "}
                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            terms and conditions
                                        </a>
                                        .
                                    </Label>
                                </FormGroup>
                            </span>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
            <CardFooter align="right">
                <Button
                    className="btn-round"
                    color="primary"
                    size="lg"
                    onClick={() => registerSubmit()}
                >
                    Regístrarme
                </Button>
            </CardFooter>
        </Card>
    )
}
