$(document).ready(function(){
// Get The File From The Input
    var url = "https://bikashthapa01.github.io/excel-reader-android-app/story.xls";
    var toDisplay = document.getElementById('total_story');
    var toModified = document.getElementById('modified');


    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    // Ready The Event For When A File Gets Selected
    oReq.onload = function(e) {
       var arraybuffer = oReq.response;

        /* convert data to binary string */
        var data = new Uint8Array(arraybuffer);

        var arr = new Array();
        for (var i = 0; i != data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
        }

        var bstr = arr.join("");
        var cfb = XLS.read(bstr, { type: 'binary' });
        toDisplay.innerHTML = (cfb.Strings.Count)/3;
        modified.innerHTML = cfb.Custprops.ModifiedDate.slice(0,10);


        // cfb.SheetNames.forEach(function(sheetName, index) {
        //     var sCSV = XLS.utils.make_csv(cfb.Sheets[sheetName]);   
        //     var data = XLS.utils.sheet_to_json(cfb.Sheets[sheetName], {header:1});
        //     console.log(data[0])   
        // });
    }
    // Tell JS To Start Reading The File.. You could delay this if desired
    oReq.send()
});
    
