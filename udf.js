function transform(line) {
    var values = line.split(",");

    //Checking if header is present
    if (values[0] == "first_name"){
    return null;// Filter a record: return null;
    } 

    // Add a field: obj.newField = 1;
    var obj = new Object();
    obj.first_name = values[0];
    obj.last_name = values[1];
    obj.job_title = values[2];
    obj.department = values[3];
    obj.email = values[4];
    obj.address = values[5];
    obj.phone_number = values[6];
    obj.salary = parseInt(values[7]);
    obj.password = values[8];

    //var jsonString = JSON.stringify(obj)
    //return jsonString

    return JSON.stringify(obj);
}