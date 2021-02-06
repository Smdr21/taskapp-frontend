

// Function which is called when the page is loaded
var currentTaskId;
var isEdit=false;
const onLoad = () =>{

    document.getElementById("submit-form").addEventListener('click',submitForm);
    document.getElementById("cancel-form").addEventListener('click',cancelForm);
    document.getElementById("delete-form").addEventListener('click',deleteForm);
    document.getElementById("edit-form").addEventListener('click',editForm);
    document.getElementById("delete-confirm").addEventListener('click',deletedTask);
    document.getElementById("delete-reject").addEventListener('click',cancelDelete);
    var todaysTask;
    axios.get("http://localhost:8081/").then((res,req)=>{
        console.log(res);
        if(res.data.length>0){
            handleTasks(res.data);
        }
    }).catch((err)=>{
        console.log(err);
    });
    
};



const submitForm = (event) =>{
    var inputName = document.getElementById("input-name");
    var inputCategory = document.getElementById("input-category");
    var inputDueDate = document.getElementById("input-duedate1");
    var inputDuetime = document.getElementById("input-duedate2");
    var inputdescription = document.getElementById("input-description");


    const data = {'name': inputName.value,
                  'category':inputCategory.value,
                  'dateDue': inputDueDate.value+'T'+inputDuetime.value+':00',
                  'description': inputdescription.value};

    if(validate(data)){
        if(!isEdit){
            axios.post("http://localhost:8081/newtask",data).then((res,req)=>{})
            .catch((err)=>{console.log(err);});
            cancelForm();
        }
        else{
            axios.post(`http://localhost:8081/edittask/${currentTaskId}`,data).then((res,req)=>{})
            .catch((err)=>{console.log(err);});
            cancelForm();
        }
    }
    else{
        var errorMessage = document.querySelector("#error-message");
        errorMessage.style["display"]="block";
    }

    
};


const cancelForm = (event) =>{
    document.getElementById("form").reset();
    var formBox = document.querySelector("#form-box");
    var emptyState = document.querySelector("#empty-state");
    var cancelButton = document.querySelector("#btn-cancel");
    var errorMessage = document.querySelector("#error-message");
    errorMessage.style["display"]="none";
    formBox.style["display"]="none";
    emptyState.style["display"]="block";
    cancelButton.style["display"]="none";

}

const editForm = (event) =>{
    console.log("Form has been edited");

    var inputName = document.getElementById("input-name");
    var inputCategory = document.getElementById("input-category");
    var inputDueDate = document.getElementById("input-duedate1");
    var inputDuetime = document.getElementById("input-duedate2");
    var inputdescription = document.getElementById("input-description");

    inputName.disabled=false;
    inputCategory.disabled=false;
    inputDueDate.disabled=false;
    inputDuetime.disabled=false;
    inputdescription.disabled=false;

    addOrRemoveEditStyles(true);

    var editButton = document.querySelector("#btn-edit");
    editButton.style["display"]="none";

    var deleteButton = document.querySelector("#btn-delete");
    deleteButton.style["display"]="none";

    var saveButton = document.querySelector("#btn-save");
    saveButton.style["display"]="inline-block";

    var cancelButton = document.querySelector("#btn-cancel");
    cancelButton.style["display"]="inline-block";
}

const deleteForm = (event) =>{
    console.log('DELETE WAS CLICKED')
    var modal = document.querySelector("#modal");
    modal.style["display"]="flex";

}

const deletedTask = () =>{
    try{
        axios.delete(`http://localhost:8081/task/${currentTaskId}`);
    }
    catch(err){
        console.log(err);
    }
    var modal = document.querySelector("#modal");
    modal.style["display"]="none";

    var editButton = document.querySelector("#btn-edit");
    editButton.style["display"]="none";

    var deleteButton = document.querySelector("#btn-delete");
    deleteButton.style["display"]="none";

    cancelForm();
    
}

const cancelDelete = () =>{
    var modal = document.querySelector("#modal");
    modal.style["display"]="none";
}


const validate= (data)=>{
    if(data.name==='') return false;
    if(data.category==='') return false;
    if(data.description==='') return false;
    if(data.dateDue==='T12:00:00') return false;

    return true;


}

const viewTask = async (id) =>{
    isEdit=true;
    var errorMessage = document.querySelector("#error-message");
    errorMessage.style["display"]="none";
    var response;
    try{
        response = await axios.get(`http://localhost:8081/task/${id}`);
    }
    catch(err){
        console.log(error);
    }
    var data=response.data;
    currentTaskId=data.id;
    console.log(currentTaskId);
    var inputName = document.getElementById("input-name");
    var inputCategory = document.getElementById("input-category");
    var inputDueDate = document.getElementById("input-duedate1");
    var inputDuetime = document.getElementById("input-duedate2");
    var inputdescription = document.getElementById("input-description");
    console.log(data,'THIS IS THE DATA')
    inputName.value=data.name;
    inputCategory.value=data.category;
    inputDueDate.value=data.dateDue.substring(0,10);
    inputDuetime.value=data.dateDue.substring(11,16);
    inputdescription.value=data.description;

    inputName.disabled=true;
    inputCategory.disabled=true;
    inputDueDate.disabled=true;
    inputDuetime.disabled=true;
    inputdescription.disabled=true;

    addOrRemoveEditStyles(false);

    var formBox = document.querySelector("#form-box");
    var emptyState = document.querySelector("#empty-state");

    var saveButton = document.querySelector("#btn-save");
    saveButton.style["display"]="none";

    var cancelButton = document.querySelector("#btn-cancel");
    cancelButton.style["display"]="none";

    var editButton = document.querySelector("#btn-edit");
    editButton.style["display"]="inline-block";

    var deleteButton = document.querySelector("#btn-delete");
    deleteButton.style["display"]="inline-block";

    var editIcon = document.querySelector("#edit-icon");
    editIcon.style["display"]="none";

    formBox.style["display"]="block";
    emptyState.style["display"]="none";

}

const addOrRemoveEditStyles = (boolean) =>{
    var inputName = document.getElementById("input-name");
    var inputCategory = document.getElementById("input-category");
    var inputDueDate = document.getElementById("input-duedate1");
    var inputDuetime = document.getElementById("input-duedate2");
    var inputdescription = document.getElementById("input-description");

    if(boolean){
        inputCategory.classList.add('select-categories-edit');
        inputDueDate.classList.add('input-fields-edit');
        inputDuetime.classList.add('input-fields-edit');
        inputdescription.classList.add('input-fields-edit');
    }
    else{
        inputCategory.classList.remove('select-categories-edit');
        inputDueDate.classList.remove('input-fields-edit');
        inputDuetime.classList.remove('input-fields-edit');
        inputdescription.classList.remove('input-fields-edit');
    };
};

const handleTasks = (doc) =>{
    let colourMap = new Map();
    colourMap.set('Health', 1);
    colourMap.set('Work', 2);
    colourMap.set('Chores', 3);
    colourMap.set('Social', 4);
    colourMap.set('Other', 5);
    console.log('I AM HERE');
    doc.forEach(element => {
        var box = document.createElement('div');
        const itemNumber = colourMap.get(element.category);

        var name = document.createElement('div')
        name.className="task-name";

        var title = document.createElement('a').appendChild(document.createTextNode(element.name));
        name.appendChild(title);

        var date = document.createElement('div');
        date.className="task-date";
        var d = new Date(element.dateDue);
        var datetitle = document.createElement('a');
        datetitle.appendChild(document.createTextNode(d.toString().substring(4,10)));
        var datetime = document.createElement('a');
        datetime.appendChild(document.createTextNode(d.toString().substring(16,21)));

        date.appendChild(datetitle);
        date.appendChild(datetime);
        box.appendChild(name);
        box.appendChild(date);
        
        var setItem = document.getElementById('task-items');
        setItem.appendChild(box);
        box.className="task-item item-"+itemNumber;
        box.addEventListener('click',()=>viewTask(element.id));
        });
};

const addTask = () =>{
    isEdit=false;
    addOrRemoveEditStyles(true);
    document.getElementById("form").reset();
    var inputName = document.getElementById("input-name");
    var inputCategory = document.getElementById("input-category");
    var inputDueDate = document.getElementById("input-duedate1");
    var inputDuetime = document.getElementById("input-duedate2");
    var inputdescription = document.getElementById("input-description");

    inputName.disabled=false;
    inputCategory.disabled=false;
    inputDueDate.disabled=false;
    inputDuetime.disabled=false;
    inputdescription.disabled=false;


    var formBox = document.querySelector("#form-box");
    var emptyState = document.querySelector("#empty-state");
    console.log(formBox.style);
    formBox.style["display"]="block";
    emptyState.style["display"]="none";

    var saveButton = document.querySelector("#btn-save");
    saveButton.style["display"]="inline";

    var cancelButton = document.querySelector("#btn-cancel");
    cancelButton.style["display"]="inline";

    var editButton = document.querySelector("#btn-edit");
    editButton.style["display"]="none";

    var deleteButton = document.querySelector("#btn-delete");
    deleteButton.style["display"]="none";

    var editIcon = document.querySelector("#edit-icon");
    editIcon.style["display"]="inline";
    
    //console.log("pROBLEM")

};


const saveTask = (event) =>{
    console.log('it is in here');
    console.log(event);

}