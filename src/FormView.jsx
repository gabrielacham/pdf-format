import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./Format";


export default function FormView() {
  const [data, setData] = useState({});
  const [show, setHide] = useState(false)

  const updateData = (e) => {
    e.preventDefault();
     let data = {}
     let elements = document.getElementById("formulario").elements;
      for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        data[item.name] = item.value
      };
    setHide(true)
    setData(data)
  };

  return (
    <div className="container">
      <h2>Formulario</h2><br/>
      <form id='formulario' name='formulario'>
        <label htmlFor="titulo">Título</label><br/>
        <input id="titulo" name="titulo" type='text' /><br/><br/>

        <label htmlFor="presbitero">Nombre del Presbitero</label><br/>
        <input id="presbitero" name="presbitero" type='text' /><br/><br/>

        <label htmlFor="confirmado">Nombre del Confirmado</label><br/>
        <input id="confirmado" name="confirmado" type='text' /><br/><br/>

        <label htmlFor="fecha">Fecha de Celebración</label><br/>
        <input type="date" id="fecha" name="fecha"/><br/><br/>

        <label htmlFor="apellido">Apellido del Padrino o Madrina</label><br/>
        <input id="apellido" name="apellido" type='text' /><br/><br/>

        <label htmlFor="nombre">Nombre del Padrino o Madrina</label><br/>
        <input id="nombre" name="nombre" type='text' /><br/><br/>

        <label htmlFor="ministro">Ministro</label><br/>
        <input id="ministro" name="ministro" type='text' /><br/><br/>

        <label htmlFor="fin">Fines del Certificado</label><br/>
        <input id="fin" name="fin" type='text' /><br/><br/>

        <label htmlFor="factual">Fecha Actual</label><br/>
        <input type="date" id="factual" name="factual"/><br/><br/>

        <label htmlFor="libro">Libro</label><br/>
        <input id="libro" name="libro" type='number' /><br/><br/>

        <label htmlFor="folio">Folio</label><br/>
        <input id="folio" name="folio" type='number' /><br/><br/>

        <label htmlFor="num">Numero</label><br/>
        <input id="num" name="num" type='number' /><br/><br/>

        <label htmlFor="nota">Nota Marginal</label><br/>
        <input id="nota" name="nota" type='text' /><br/><br/><br/>

        <input type="submit" value="Submit" onClick={updateData}/><br/><br/><br/><br/>
      </form>

      {show &&<PDFDownloadLink
        document={<PdfDocument data={data} />}
        fileName="certificado.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>}
      <br/><br/><br/><br/>
    </div>
  );
}
