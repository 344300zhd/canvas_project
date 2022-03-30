let fileTool = {
    download: function (path, name) {
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = path;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    },
    // form表单提交下载文件
    download_by_form : function(url,name){
        // 创建表单
        const form = document.createElement("form");
        form.action = url;
        form.method = "get";
        form.style.display = "none";
        // 创建input,用以传参
        const formItem = document.createElement("input");
        formItem.value = name;
        formItem.name = 'name';
        // 插入到网页中
        form.appendChild(formItem);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    } 
}