const urlRegex  = /^(http|https):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[a-zA-Z]+$/;

function checkurl(url){

    if(urlRegex.test(url))
    {
        console.log(`${url} : given url is valid`);
    }
    else{
        console.log(`${url} : given url is invalid`);
    }

}
checkurl("http://www.google.com");
checkurl("www.google.com");
