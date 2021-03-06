import React from "react";
import {
  StyledButton,
  StyledContainerRegister,
  StyledDescription,
  StyledLabel,
  StyledLogoSeranest,
} from "./Register.styles";
import { Container, Grid } from "@mui/material";
import useComponents from "views/components";
import useControllers from "controllers";
import { StyledFoundationLogo } from "views/components/FooterLogin/FooterLogin.styles";


const Register = () => {
  // Components
  const { InputRegister, CheckboxRegister } = useComponents();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useRegister } = useScreenHooks();
  const {
    control,
    setCheckboxSelected,
    checkboxSelected,
    setValue,
    especialityCheckbox,
    setEspecialityCheckbox,
    check1,
    setCheck1,
    check2,
    setCheck2,
    check3,
    setCheck3,
    isValid,
    errors,
    handleRegister,
    handleSubmit,
  } = useRegister();

  return (
    <StyledContainerRegister
      background={`${process.env.REACT_APP_ASSETS_URL}/images/background-register.png`}
    >
      <Grid item lg={12} className="flex justify-center py-10">
        <StyledLogoSeranest
          src={`${process.env.REACT_APP_ASSETS_URL}/images/logo-seranest.png`}
          alt="logo-seranest"
        />
      </Grid>
      <Container>
        <Grid item lg={12} className="flex justify-center text-center py-5">
          <StyledDescription>
            Bienvenido a SerAnest Interac-TIVA. Está a un paso de unirse a este
            proyecto de educación médica continua (EMC) con la actualización en
            la técnica de anestesia total intravenosa TIVA-TCI.
          </StyledDescription>
        </Grid>
        <form>
          <Grid container>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="name"
                placeholder=""
                label="Nombres:* "
                type="text"
                rules={{
                  required: "El campo es requerido",
                }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="last_name"
                placeholder=""
                label="Apellidos:*"
                type="text"
                rules={{
                  required: "El campo es requerido",
                }}
                isFull
              />
            </Grid>
            <Grid item xl={8} lg={8} md={12} sm={12} xs={12} className="pt-5">
              <Grid container>
                <Grid item lg={3} md={12} className="flex items-center">
                  <StyledLabel>Tipo de documento* :</StyledLabel>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={12}
                  sm={12}
                  xs={12}
                  className="pt-5 lg:pt-0"
                >
                  <CheckboxRegister
                    label="Cédula de ciudadanía"
                    onChange={() => {
                      if (checkboxSelected !== "CC") {
                        setCheckboxSelected("CC");
                        setValue("document_type", "Cédula de ciudadanía");
                      } else {
                        setCheckboxSelected("");
                        setValue("document_type", null);
                      }
                    }}
                    checked={checkboxSelected === "CC"}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={12}
                  sm={12}
                  xs={12}
                  className="pt-5 lg:pt-0"
                >
                  <CheckboxRegister
                    label="Cédula de extranjería"
                    onChange={() => {
                      if (checkboxSelected !== "CE") {
                        setCheckboxSelected("CE");
                        setValue("document_type", "Cédula de extranjería");
                      } else {
                        setCheckboxSelected("");
                        setValue("document_type", null);
                      }
                    }}
                    checked={checkboxSelected === "CE"}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={12}
                  sm={12}
                  xs={12}
                  className="pt-5 lg:pt-0"
                >
                  <CheckboxRegister
                    label="Pasaporte"
                    onChange={() => {
                      if (checkboxSelected !== "PA") {
                        setCheckboxSelected("PA");
                        setValue("document_type", "Pasaporte");
                      } else {
                        setCheckboxSelected("");
                        setValue("document_type", null);
                      }
                    }}
                    checked={checkboxSelected === "PA"}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={12}
              sm={12}
              xs={12}
              className="pt-5 flex justify-center"
            >
              <InputRegister
                control={control}
                name="nationality"
                placeholder=""
                label="Nacionalidad:*"
                type="text"
                rules={{
                  required: "El campo es requerido",
                }}
                isLine
                isFull
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="document"
                placeholder=""
                label="Número de identificación:*"
                type="text"
                rules={{
                  required: "El campo es requerido",
                }}
                isLine
                isFull
              />
            </Grid>
            <Grid
              item
              xl={5}
              lg={5}
              md={12}
              sm={12}
              xs={12}
              className="pt-5 items-center flex"
            >
              <Grid container>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={6}
                  xs={5}
                  className="flex items-center"
                >
                  <StyledLabel>Especialidad:*</StyledLabel>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={7}>
                  <CheckboxRegister
                    label="Anestesiología"
                    onChange={() => {
                      if (especialityCheckbox !== "AS") {
                        setEspecialityCheckbox("AS");
                        setValue("especiality", "Anestesiología");
                      } else {
                        setEspecialityCheckbox("");
                        setValue("especiality", null);
                      }
                    }}
                    checked={especialityCheckbox === "AS"}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={7} lg={7} md={12} sm={12} xs={12} className="pt-5 ">
              <Grid
                container
                className="items-center border-dotted border-[1px] border-black p-2 rounded-[10px]"
              >
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="flex items-center"
                >
                  <CheckboxRegister
                    label="Residente de anestesia"
                    onChange={() => {
                      if (especialityCheckbox !== "RA") {
                        setEspecialityCheckbox("RA");
                        setValue("especiality", "Residente de anestesia");
                      } else {
                        setEspecialityCheckbox("");
                        setValue("especiality", null);
                      }
                    }}
                    checked={especialityCheckbox === "RA"}
                  />
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="pt-5 md:pt-0"
                >
                  <InputRegister
                    control={control}
                    name="especiality_year"
                    placeholder=""
                    label="Año"
                    type="text"
                    isFull
                    disabled={especialityCheckbox === "AS"}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <Grid container>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <CheckboxRegister
                    label="Otra especialidad, <br/>¿cuál?"
                    onChange={() => {
                      if (especialityCheckbox !== "OE") {
                        setEspecialityCheckbox("OE");
                        setValue("especiality", '');
                      } else {
                        setEspecialityCheckbox("");
                        setValue("especiality", null);
                      }
                    }}
                    checked={especialityCheckbox === "OE"}
                  />
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8} className="pr-5">
                  <InputRegister
                    control={control}
                    name="especiality"
                    placeholder=""
                    type="text"
                    isFull
                    isLine
                    noLabel
                    disabled={
                      especialityCheckbox === "AS" ||
                      especialityCheckbox === "RA"
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="work_address"
                placeholder=""
                label="Sitio de trabajo u hospital donde labora actualmente:"
                type="text"
                // rules={{
                //     required: "El campo es requerido"
                // }}
                isFull
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="country"
                placeholder=""
                label="Paìs:*"
                type="text"
                rules={{
                  required: "El campo es requerido",
                }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="city"
                placeholder=""
                label="Ciudad:*"
                type="text"
                rules={{
                  required: "El campo es requerido",
                }}
                isFull
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="email"
                placeholder=""
                label="Correo Electrónico:*"
                type="email"
                rules={{
                  required: "El campo es requerido",
                }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="phone"
                placeholder=""
                label="Telefono Movil:*"
                type="number"
                rules={{
                  required: "El campo es requerido",
                }}
                isFull
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="password"
                placeholder=""
                label="Contraseña:*"
                type="password"
                rules={{
                  required: "El campo es requerido",
                }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="pt-5">
              <InputRegister
                control={control}
                name="confirm_password"
                placeholder=""
                label="Confirmar contraseña:*"
                type="password"
                rules={{
                  required: "El campo es requerido",
                }}
                isFull
              />
            </Grid>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="pt-16"
            >
              <CheckboxRegister
                label="Desea recibir notificaciones, alertas o mensajes de SerAnest Interac-TIVA en mi correo electrónico."
                onChange={() => setCheck1(!check1)}
                checked={check1}
                isMinimum
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="pt-5">
              <CheckboxRegister
                label={`En el cumplimiento de la Ley 1581 de 2012 sobre <b className="habeas"><i>Habeas Data</i></b>,
                                el régimen general de protección de datos personales y sobre
                                manejo de los mismos, acepto los términos presentados por SerAnest Pharma. Conoce los
                                términos y condiciones
                                <a href="https://seranest-interactiva.com/permisos/AUTORIZACION_DE_USO_DE_DATOS_PERSONALES.pdf"
                                target="_blank">Aquí</a>.`}
                isFull
                isMinimum
                onChange={() => {
                  setCheck2(!check2);
                }}
                checked={check2}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="py-2">
              <small className="text-red-700">* Datos requeridos</small>
            </Grid>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="py-10 flex justify-center"
            >
              <StyledButton
                disabled={!isValid}
                onClick={handleSubmit(handleRegister)}
              >
                <img
                  src={`${process.env.REACT_APP_ASSETS_URL}/images/send-button.png`}
                  alt="Button"
                  width={250}
                />
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Grid item  md={12}   className=" relative  flex justify-center xl:justify-end w-full">
        <StyledFoundationLogo
          src={`${process.env.REACT_APP_ASSETS_URL}/images/seranest-footer.png`}
          alt="Foundation Logo"
        />
      </Grid>
    </StyledContainerRegister>
  );
};

export default Register;
