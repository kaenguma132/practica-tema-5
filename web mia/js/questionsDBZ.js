function gestionarXml(a){for(docXML=a.responseXML,preguntaXML=docXML.getElementsByTagName("title")[0].innerHTML,preguntaHTML=document.getElementById("dbz01"),ponerDatosInputHtml(preguntaHTML,preguntaXML),res_dbz1_text=docXML.getElementById("dbz01").getElementsByTagName("answer")[0].innerHTML,preguntaXML=docXML.getElementsByTagName("title")[1].innerHTML,preguntaHTML=document.getElementById("dbz02"),ponerDatosInputHtml(preguntaHTML,preguntaXML),res_dbz2_text=docXML.getElementById("dbz02").getElementsByTagName("answer")[0].innerHTML,preguntaXML=docXML.getElementsByTagName("title")[2].innerHTML,preguntaHTML=document.getElementById("dbz03"),selectHTML=document.getElementsByTagName("select")[0],xpath="/questions/question[@id='dbz03']/option",num_opciones=docXML.evaluate(xpath,docXML,null,XPathResult.ANY_TYPE,null),ponerDatosSelectHtml(preguntaHTML,preguntaXML,selectHTML,num_opciones),res_dbz3_sel=parseInt(docXML.getElementById("dbz03").getElementsByTagName("answer")[0].innerHTML),preguntaXML=docXML.getElementsByTagName("title")[3].innerHTML,preguntaHTML=document.getElementById("dbz04"),selectHTML=document.getElementsByTagName("select")[1],xpath="/questions/question[@id='dbz04']/option",num_opciones=docXML.evaluate(xpath,docXML,null,XPathResult.ANY_TYPE,null),ponerDatosSelectHtml(preguntaHTML,preguntaXML,selectHTML,num_opciones),res_dbz4_sel=parseInt(docXML.getElementById("dbz04").getElementsByTagName("answer")[0].innerHTML),preguntaXML=docXML.getElementsByTagName("title")[4].innerHTML,preguntaHTML=document.getElementById("dbz05"),selectHTML=document.getElementsByTagName("select")[2],xpath="/questions/question[@id='dbz05']/option",num_opciones=docXML.evaluate(xpath,docXML,null,XPathResult.ANY_TYPE,null),ponerDatosSelectHtml(preguntaHTML,preguntaXML,selectHTML,num_opciones,docXML.getElementById("dbz05").getElementsByTagName("option").length),num_res_mul=docXML.getElementById("dbz05").getElementsByTagName("answer").length,i=0;i<num_res_mul;i++)res_dbz5_mul[i]=parseInt(docXML.getElementById("dbz05").getElementsByTagName("answer")[i].innerHTML);for(preguntaXML=docXML.getElementsByTagName("title")[5].innerHTML,preguntaHTML=document.getElementById("dbz06"),radioHTML=document.getElementsByClassName("radio")[0],xpath="/questions/question[@id='dbz06']/option",num_opciones=docXML.evaluate(xpath,docXML,null,XPathResult.ANY_TYPE,null),ponerDatosCheckboxRadioHtml(preguntaHTML,preguntaXML,radioHTML,num_opciones,"tiempo","radio"),res_dbz6_rad=parseInt(docXML.getElementById("dbz06").getElementsByTagName("answer")[0].innerHTML),checkradioOpciones=[],preguntaXML=docXML.getElementsByTagName("title")[6].innerHTML,preguntaHTML=document.getElementById("dbz07"),checkboxHTML=document.getElementsByClassName("checkbox")[0],xpath="/questions/question[@id='dbz07']/option",num_opciones=docXML.evaluate(xpath,docXML,null,XPathResult.ANY_TYPE,null),ponerDatosCheckboxRadioHtml(preguntaHTML,preguntaXML,checkboxHTML,num_opciones,"saiyajin","checkbox"),num_res_checkbox=docXML.getElementById("dbz07").getElementsByTagName("answer").length,i=0;i<num_res_checkbox;i++)res_dbz7_chb[i]=parseInt(docXML.getElementById("dbz07").getElementsByTagName("answer")[i].innerHTML);for(checkradioOpciones=[],preguntaXML=docXML.getElementsByTagName("title")[7].innerHTML,preguntaHTML=document.getElementById("dbz08"),checkboxHTML=document.getElementsByClassName("checkbox")[1],xpath="/questions/question[@id='dbz08']/option",num_opciones=docXML.evaluate(xpath,docXML,null,XPathResult.ANY_TYPE,null),ponerDatosCheckboxRadioHtml(preguntaHTML,preguntaXML,checkboxHTML,num_opciones,"enemigo","checkbox"),num_res_checkbox=docXML.getElementById("dbz08").getElementsByTagName("answer").length,i=0;i<num_res_checkbox;i++)res_dbz8_chb[i]=parseInt(docXML.getElementById("dbz08").getElementsByTagName("answer")[i].innerHTML);for(checkradioOpciones=[],preguntaXML=docXML.getElementsByTagName("title")[8].innerHTML,preguntaHTML=document.getElementById("dbz09"),radioHTML=document.getElementsByClassName("radio")[1],xpath="/questions/question[@id='dbz09']/option",num_opciones=docXML.evaluate(xpath,docXML,null,XPathResult.ANY_TYPE,null),ponerDatosCheckboxRadioHtml(preguntaHTML,preguntaXML,radioHTML,num_opciones,"personaje","radio"),res_dbz9_rad=parseInt(docXML.getElementById("dbz09").getElementsByTagName("answer")[0].innerHTML),checkradioOpciones=[],preguntaXML=docXML.getElementsByTagName("title")[9].innerHTML,preguntaHTML=document.getElementById("dbz10"),selectHTML=document.getElementsByTagName("select")[3],xpath="/questions/question[@id='dbz10']/option",num_opciones=docXML.evaluate(xpath,docXML,null,XPathResult.ANY_TYPE,null),ponerDatosSelectHtml(preguntaHTML,preguntaXML,selectHTML,num_opciones,docXML.getElementById("dbz10").getElementsByTagName("option").length),num_res_mul=docXML.getElementById("dbz10").getElementsByTagName("answer").length,i=0;i<num_res_mul;i++)res_dbz10_mul[i]=parseInt(docXML.getElementById("dbz10").getElementsByTagName("answer")[i].innerHTML)}function ponerDatosInputHtml(a,b){a.innerHTML=b}function ponerDatosSelectHtml(a,b,c,d,e){a.innerHTML=b;var f=0;void 0!=e&&c.setAttribute("size",e);for(var g=d.iterateNext();g;g=d.iterateNext())option=document.createElement("option"),option.text=g.innerHTML,option.value=f,f++,c.options.add(option)}function ponerDatosCheckboxRadioHtml(a,b,c,d,e,f){a.innerHTML=b;for(var g,h,i=0,j=d.iterateNext();j;j=d.iterateNext())g=document.createElement("input"),h=document.createElement("label"),h.innerHTML=j.innerHTML,h.setAttribute("id",e+i),g.type=f,g.name=e,c.appendChild(g),c.appendChild(h),c.appendChild(document.createElement("br"))}function corregirTexto(a,b,c){a.toLowerCase()==b.toLowerCase()&&(nota+=1),useranswer=docXML.createElement("useranswer"),useranswer.innerHTML=a,c.appendChild(useranswer)}function corregirSelectSimple(a,b,c){a.selectedIndex==b&&(nota+=1),useranswer=docXML.createElement("useranswer"),useranswer.innerHTML=a.selectedIndex+1,c.appendChild(useranswer)}function corregirSelectMultiple(a,b,c){var d=[];for(i=0;i<a.length;i++)if(a[i].selected){for(useranswer=docXML.createElement("useranswer"),useranswer.innerHTML=i+1,c.appendChild(useranswer),d[i]=!1,j=0;j<b.length;j++)i==b[j]&&(d[i]=!0);d[i]?nota+=1/b.length:nota-=1/b.length}}function corregirCheckbox(a,b,c,d){var e=[];for(i=0;i<a.length;i++)if(a[i].checked){for(useranswer=docXML.createElement("useranswer"),useranswer.innerHTML=i+1,c.appendChild(useranswer),e[i]=!1,j=0;j<b.length;j++)i==b[j]&&(e[i]=!0);e[i]?nota+=1/b.length:nota-=1/b.length}}function corregirRadio(a,b,c,d){var e;for(i=0;i<a.length;i++)if(a[i].checked){e=i,useranswer=docXML.createElement("useranswer"),useranswer.innerHTML=i+1,c.appendChild(useranswer);break}e==b&&(nota+=1)}function mostrarCorreccion(a){var b=document.createElement("p"),c=document.createTextNode(a);b.appendChild(c),document.getElementById("correcciones").appendChild(b)}function mostrarNota(){document.getElementById("formDBZ").style.display="none",document.getElementById("correcciones").style.display="block",document.implementation&&document.implementation.createDocument&&(xsltProcessor=new XSLTProcessor,xsltProcessor.importStylesheet(docXSL),resultDocument=xsltProcessor.transformToFragment(docXML,document),document.getElementById("correcciones").appendChild(resultDocument)),mostrarCorreccion("Tu nota es de "+nota.toFixed(2)+" punto(s) sobre 10.")}function comprobar(a){for(var b=!0,c=!1,d=!1,e=!1,f=!1,g=!1,h=!1,i=0;i<a.getElementsByTagName("select")[2].length;i++)if(a.getElementsByTagName("select")[2][i].selected){c=!0;break}for(var i=0;i<a.tiempo.length;i++)if(a.tiempo[i].checked){d=!0;break}for(var i=0;i<a.saiyajin.length;i++)if(a.saiyajin[i].checked){e=!0;break}for(var i=0;i<a.enemigo.length;i++)if(a.enemigo[i].checked){f=!0;break}for(var i=0;i<a.personaje.length;i++)if(a.personaje[i].checked){g=!0;break}for(var i=0;i<formElement.getElementsByTagName("select")[3].length;i++)if(formElement.getElementsByTagName("select")[3][i].selected){h=!0;break}return""==a.getElementsByClassName("texto")[0].value&&(b=!1),""==a.getElementsByClassName("texto")[1].value&&(b=!1),0==a.getElementsByTagName("select")[0].selectedIndex&&(b=!1),0==a.getElementsByTagName("select")[1].selectedIndex&&(b=!1),c||(b=!1),d||(b=!1),e||(b=!1),f||(b=!1),g||(b=!1),h||(b=!1),b}function inicializar(){document.getElementById("correcciones").innerHTML="Aqui ira la nota final",nota=0}var formElement=null,res_dbz1_text=null,res_dbz2_text=null,res_dbz3_sel=null,res_dbz4_sel=null,res_dbz5_mul=[],res_dbz6_rad=null,res_dbz7_chb=[],res_dbz8_chb=[],res_dbz9_rad=null,res_dbz10_mul=[],nota=0,docXML,docXSL=null,useranswer=null;window.onload=function(){var a=new XMLHttpRequest;a.onreadystatechange=function(){4==this.readyState&&200==this.status&&gestionarXml(this)},a.open("GET","xml/questions.xml",!0),a.send();var b=new XMLHttpRequest;b.onreadystatechange=function(){4==this.readyState&&200==this.status&&(docXSL=this.responseXML)},b.open("GET","xml/questions.xsl",!0),b.send(),formElement=document.getElementById("formDBZ"),formElement.onsubmit=function(){return comprobar(formElement)?(inicializar(),corregirTexto(formElement.getElementsByClassName("texto")[0].value,res_dbz1_text,docXML.getElementById("dbz01")),corregirTexto(formElement.getElementsByClassName("texto")[1].value,res_dbz2_text,docXML.getElementById("dbz02")),corregirSelectSimple(formElement.getElementsByTagName("select")[0],res_dbz3_sel,docXML.getElementById("dbz03")),corregirSelectSimple(formElement.getElementsByTagName("select")[1],res_dbz4_sel,docXML.getElementById("dbz04")),corregirSelectMultiple(formElement.getElementsByTagName("select")[2],res_dbz5_mul,docXML.getElementById("dbz05")),corregirRadio(formElement.tiempo,res_dbz6_rad,docXML.getElementById("dbz06"),"tiempo"),corregirCheckbox(formElement.saiyajin,res_dbz7_chb,docXML.getElementById("dbz07"),"saiyajin"),corregirCheckbox(formElement.enemigo,res_dbz8_chb,docXML.getElementById("dbz08"),"enemigo"),corregirRadio(formElement.personaje,res_dbz9_rad,docXML.getElementById("dbz09"),"personaje"),corregirSelectMultiple(formElement.getElementsByTagName("select")[3],res_dbz10_mul,docXML.getElementById("dbz10")),mostrarNota()):alert("Tienes una o más preguntas sin contestar"),!1}};