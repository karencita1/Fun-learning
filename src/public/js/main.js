const main = (() => {
    const $bodyTable = document.getElementById("data");
    const BASE_URL = "http://localhost:4000/administrador/getEstudiante";
    const form=document.getElementById("formEstudiante");
    
    const _getData = async () => {
      const response = await http.get(BASE_URL);
      $bodyTable.innerHTML = "";
      for (let index = 0; index < response.length; index++) {
        const $row = _createRow(response[index], "idEstudiante");
        $bodyTable.appendChild($row);
      }

    };
  
    const _actionButtonEditar = async (event) => {
        const $btn = event.target;
        const idEstudiante = $btn.getAttribute("item-id");
        const response = await http.get(`${BASE_URL}/${idEstudiante}`);
        _setData(response[0]);
        form.setVisible(true);
        main.setVisible(false);
      };

    const _actionButtonEliminar = async (event) => {
      const $btn = event.target;
      const idEstudiante = $btn.getAttribute("item-id");
      const response = await http.delete({ url: `${BASE_URL}/deleteEstudiante/${idEstudiante}`});
      main.getData;
  
    };
  
    const _createRow = (item = {}, itemId = "") => {
      const $row = document.createElement("tr");
      for (const key in item) {
        const value = item[key];
        const $td = document.createElement("td");
        $td.innerText = value;
        $row.appendChild($td);
      }
      $row.appendChild(_createBtnAction(item[itemId], "Editar", _actionButtonEditar));
      $row.appendChild(_createBtnAction(item[itemId], "Eliminar", _actionButtonEliminar));
      return $row;
    };
  
    
    const _createBtnAction = (itemId=0, labelBtn = "", _actionFuntion = () => { }) => {
      const $btn = document.createElement("button");
      $btn.innerText = labelBtn;
      $btn.className += "btn btn btn-outline-light";
      
      
      
      $btn.setAttribute("item-id", itemId);
      $btn.addEventListener("click", _actionFuntion);
  
      return $btn;
  
    };
  
    
    
  
    const _setVisible = (visible = true) => {
      if (visible) {
        $containerTable.classList.remove("hide");
      } else {
        $containerTable.classList.add("hide");
      }
    };
  
  
  
    const _setData = (item = {}) => {
    const $InputNombre = document.getElementById("user");
    const $InputapellidoP = document.getElementById("apellidopaterno");
    const $InputapellidoM = document.getElementById("apellidomaterno");
      const { nombre,apellido_paterno,apellido_materno,correo,contrasena } = item;
      $InputNombre.value = nombre;
      $InputapellidoM.value = apellido_materno;
      $InputapellidoP.value= apellido_paterno;
    };
  
    const _initElements = () => {
      _getData();
    };
  
    return {
      init: () => {
        _initElements();
      },
      setVisible: _setVisible,
      getData: _getData
    };
  })();
  
  main.init(); 