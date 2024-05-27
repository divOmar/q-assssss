var qoutes= [
   {
    "auther": 'Frank Zappa',
    "qoute":"So many books, so little time."
   },
   {
    "auther": ' Marcus Tullius Cicero',
    "qoute":"A room without books is like a body without a soul"
   },
   {
    "auther": 'Mae West',
    "qoute":"You only live once, but if you do it right, once is enough"
   },
   {
    "auther": 'Mahatma Gandhi',
    "qoute":"Be the change that you wish to see in the world."
   },
];
function createQoutes(){
    var rqoute = Math.floor(Math.random() * qoutes.length);
    var qelement=document.getElementById("quoteelement")
    var aelement=document.getElementById("autherelement")
    qelement.innerHTML= qoutes[rqoute].qoute
    aelement.innerHTML= qoutes[rqoute].auther
}


