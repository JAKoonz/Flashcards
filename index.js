
var cardShown="";

function Init() {
    nextCard();
}

function toggleAccordion(x) {
    x.classList.toggle("open");

    /* Toggle between hiding and showing the active panel */
    var panel = x.nextElementSibling;
    if (panel.style.height){
      panel.style.height = null;
    } else {
      panel.style.height = panel.scrollHeight + "px";
    } 
}

function clearForm(oForm) {
    var frm_elements = oForm.elements;
    for(i=0; i<frm_elements.length; i++) {
        field = frm_elements[i];
        field.checked=false;        
    }
}

function selectAll(oForm) {
    var frm_elements = oForm.elements;
    for(i=0; i<frm_elements.length; i++) {
        field = frm_elements[i];
        field.checked=true;        
    }
}

function nextCard() {
    var checkboxes = document.getElementsByName('tags');
    var selectedTags='';
    for (var i=0; i<checkboxes.length; i++) {
        var checkbox=checkboxes[i];
        if (checkbox.checked) {
            if (selectedTags=='') {
                selectedTags='.'+checkboxes[i].value;
            } else {
                selectedTags=selectedTags+',.'+checkboxes[i].value;
            }
        }
    }
    if (selectedTags=='') selectedTags='.card';
    var random = Math.floor(Math.random() * $(selectedTags).length);
    cardShown=$(selectedTags).eq(random).attr('id');
    $('.card').hide();
    $(selectedTags).hide().eq(random).show();
    $('.flippedcard').hide()
}

function flipCard() {
    $('.card').hide();
    $('.flippedcard').hide();
    $('#flipped'+cardShown).show();
}


window.onload=Init;

