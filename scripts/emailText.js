function insertContactMailTag()
{
    var emailId = createMailText();
    
    document.write("<span data-icon=\"&#xe010;\"></span> <span class=\"openSansBolded\"><a href=\"mai" + "lto:" + emailId + "\">" + emailId + "</a></span>");
}

function insertFooterMailText()
{
    var emailId = createMailText();

    document.write("<span data-icon=\"&#xe010;\"></span>&nbsp;" + emailId);
}

function createMailText()
{
    var emailId;
    var domainName = "dieta-goja";
    var atSign = "&#64;";
    var fullStop = "&#46;";
    emailId = "poradnia";
    emailId = "" + emailId + atSign; 
    domainName = domainName + fullStop + "pl";
    emailId = emailId + domainName;

    return emailId;
}