var str = "file:///Users/p_baraban/Desktop/html_barabanpierre/"

var url = new URL(str);

if(search_params.has('name')) {
    var name = search_params.get('name');
    console.log(name)
}