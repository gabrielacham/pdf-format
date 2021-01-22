import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
// import moment from "moment";
import logo from './logo.jpg';


const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        padding: 5
    },
    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20
    },
    imageContainer: {
      padding: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center'
    },
    image: {
        height: 100,
        width: 100
    },
    body: {
      display: "flex",
      flexDirection: "row",
      marginHorizontal: 40,
      justifyContent: "space-between"
    },
    textContainer: {
      borderBottom: '1 solid #000000',
      display: "flex",
      flexDirection: "row",
    },
    bodyText: {
      display: "flex",
      flexDirection: "row",
      fontWeight: "bold",
      textTransform: 'uppercase',
      fontSize: 12,
      padding: 5,
    },
    hr: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center',
      alignSelf: 'center',
      borderBottom: '1 solid #000000',
      width: 200
    },
    signature: {
      display: "flex",
      flexDirection: "row",
      fontWeight: "bold",
      fontSize: 12,
      padding: 5,
      textTransform: 'capitalize',
      textAlign: 'center',
      marginBottom: 7
    },
    footer: {
      display: "flex",
      flexDirection: "column",
      marginHorizontal: 50
    },
    footerText:{
      display: "flex",
      flexDirection: "row",
      fontWeight: "bold",
      textTransform: 'uppercase',
      fontSize: 11,
      padding: 5,
      marginHorizontal: 5,
      marginBottom: 5,
      textAlign: 'center'
    },
    footerhr: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center',
      alignSelf: 'center',
      width: '95%',
      borderBottom: '1 solid #000000',
    },
    direction: {
      display: "flex",
      flexDirection: "row",
      fontSize: 10,
      padding: 5,
      textAlign: 'center',
      marginBottom: 20
    }
});

function Format(data){
  return (
      <View style={styles.container}>
        {/*Logo*/}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={logo}
          />
        </View>

        {/*Titulo*/}
        <Text style={styles.title}>{data.titulo}</Text>

        {/*Cuerpo del Documento*/}
        <View style={styles.body}>

          {/*Columna Izquierda*/}
          <View style={[styles.container, { border: '1 solid #000000', padding: 0, marginRight: 10, maxWidth: '25%' }]}>

            {/*Libro*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> Libro: {data.libro} </Text>
            </View>

            {/*Folio*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> folio: {data.folio} </Text>
            </View>

            {/*Numero*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> num: {data.num} </Text>
            </View>

            {/*Nota marginal*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> nota marginal</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.bodyText, { textAlign: 'justify' }]}> {data.nota} </Text>
            </View>
          </View>

          {/*Columna Derecha*/}
          <View style={[styles.container, { border: '1 solid #000000', padding: 0, marginLeft: 10, maxWidth: '75%' }]}>

            {/*Presbitero*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> El Presbítero: {data.presbitero} </Text>
            </View>

            {/*Parrafo*/}
            <View style={styles.textContainer}>
              <Text style={[styles.bodyText, { textTransform: 'none', textAlign: 'justify' }]}> Cura Párroco Encargado de esta Parroquia, certifica que según consta del acta reseñada al margen correspondiente al libro de confirmaciones: </Text>
            </View>

            {/*Confirmado*/}
            <View style={styles.textContainer}>
              <Text style={[styles.bodyText, { textAlign: 'center', margin: 20 }]}> {data.confirmado} </Text>
            </View>

            {/*Fecha Sacramento*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> RECIBIÓ SACRAMENTO DE CONFIRMACIÓN EN FECHA: {data.fecha} </Text>
            </View>

            {/*Padrino*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> DATOS DEL PADRINO O MADRINA: </Text>
            </View>
            {/*Apellido*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> Apellidos: {data.apellido} </Text>
            </View>
            {/*Nombre*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> Nombres: {data.nombre} </Text>
            </View>

            {/*Ministro*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> Ministro Celebrante: {data.ministro} </Text>
            </View>

            {/*Proposito*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> SE PIDE ESTE CERTIFICADO PARA FINES: {data.fin} </Text>
            </View>

            {/*Fecha Actual*/}
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}> en puerto ordaz: {data.factual} </Text>
            </View>

            {/*Firma*/}
            <View style={[styles.textContainer, { padding: 10, flexDirection: 'column' }]}>
              <Text style={[styles.bodyText, { textTransform: 'none', marginBottom: 40 }]}> Doy fe. </Text>
              <View style={styles.hr} />
              <Text style={styles.signature}> Pbro. {data.presbitero} </Text>
            </View>
          </View>
        </View>
      </View>
  );
}

export function PdfDocument(props) {
    console.log("pdf props", props.data);
    return (
        <Document>
            <Page style={styles.page}>
                {props.data
                    ? Format(props.data)
            : ""}
            <View style={styles.footer}>
              <Text style={styles.footerText}> SI ESTE CERTIFICADO VA A SER UTILIZADO FUERA DE LA DIÓCESIS DEBE SER AUTENTICADO EN LA CURIA DIOCESANA </Text>
              <View style={styles.footerhr} />
              <Text style={styles.direction}> Av. Antonio de Berrío, El Roble, San Félix, Estado Bolívar. Teléfono (0286) 931.16.36 </Text>
            </View>
            </Page>
        </Document>
    );
}
